#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os, sys
import logging
import jinja2
import re
from google.appengine.api import mail

# Lets set it up so we know where we stored the template files
JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        #Get path to determine which template to use and to set subtitle
        path = self.request.path.replace("/","")
        title=path.title()
        if self.request.path=="/":
            path = "home"
            title = "Home"

        template = JINJA_ENVIRONMENT.get_template('templates/%s.html' % (path)) 
        self.response.write(template.render({'title': title}))

class EmailHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('templates/think.html') 
        self.response.write(template.render({'title': "Think"}))

    def post(self):
        #Read the form input which is a single line as follows
        username=self.request.get('username')
        useremail=self.request.get('useremail')
        messagesubj=self.request.get('messagesubj')
        messagetext=self.request.get('messagetext')
        if len(re.findall(r".*@.*\.[a-z][a-z][a-z]",useremail))==0:
            logging.info("***EMAIL INVALID***") #log bad attempts
            msg="Please enter a valid email address.You entered: %s" % (useremail)
            goto = "/think.html"
        else:
            logging.info("***EMAIL SENT***")
            message = mail.EmailMessage()
            message.sender = "asharman@umich.edu"
            message.to = "asharman@umich.edu"
            message.subject = "SNIPPETS: "+messagesubj
            message.body = useremail + " ("+username+")\n"+messagetext
            message.send()
            goto = "/thinkpass.html"
            msg=""
        template = JINJA_ENVIRONMENT.get_template('templates/%s' % (goto))
        self.response.write(template.render({'msg': msg, 'title': "Think"}))

app = webapp2.WSGIApplication([
    ('/think*', EmailHandler),
    ('/.*', MainHandler)
], debug=True)


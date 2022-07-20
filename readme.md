Jira time logger script
=======================

Script helps in work time logging in jira cloud
-----------------------------------------------

------------------------------------------------------------------------

Note:

Currently timezone is mounted to Europe/Berlin and changing between
CEST/CET based on system time, so you need to be in same timezone as
jira is mounted up, otherwise it will not work.

Function is working on cloud version of jira, in order to migrate to
server version, head to jira docs.

#### SETUP:

In order to log time correctly, create .env file in top level directory,
and provide fields listed under:

Fields in .env file

USER\_EMAIL=example\@mail.com

API\_TOKEN=some\_random\_chars

JIRA\_DOMAIN\_NAME=companyname

Description

Api token generated on your account on atlassian site

Jira domain name, all between https:// and .atlassian.net

E-mail of JIRA account

then you have to provide list of issues where you want to log your work
time, in timeloglist.txt :) in format:

ticketName, startTimeOfWork - endTimeOfWork, dateOfWorkOnTask (DD-MM)

e.g giua-1212, 08;20 - 08;35, 20.07

------------------------------------------------------------------------

#### Note:

ticketName will be changed to upperCase, so you don\'t have to provide
it with capslock.

if you omit date, app will treat it as you were working today, and it
will log time based on current day + month.

#### If time will log correctly, info will be logged to the console: \"Request 201 Created\", otherwise it will be properly error.

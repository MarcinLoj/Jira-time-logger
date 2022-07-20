Jira time logger script
=======================

Script helps in work time logging in jira cloud
-----------------------------------------------

------------------------------------------------------------------------

## Note:

> Currently timezone is mounted to Europe/Berlin and changing between 
> CEST/CET based on system time, so you need to be in same timezone as
> jira is mounted up, otherwise it will not work.

> Function is working on cloud version of jira, in order to migrate to server version, head to jira docs.

## SETUP:

In order to log time correctly, create .env file in top level directory, and provide fields listed under:

### Fields in .env file

> USER\_EMAIL=example\@mail.com            

> API\_TOKEN=some\_random\_chars           

> JIRA\_DOMAIN\_NAME=companyname           

### Fields description: 

> JIRA\_DOMAIN\_NAME is jira domain name -> all between https:// and .atlassian.net

> API\_TOKEN is API token generated on your account on atlassian site

> USER\_EMAIL is JIRA account e-mail

After that, you have to provide list of issues where you want to log your work time, in the timeloglist.txt file, in format listed below:

> ticketName, startTimeOfWork - endTimeOfWork, dateOfWorkOnTask (DD-MM)

> e.g giua-1212, 08;20 - 08;35, 20.07

------------------------------------------------------------------------

### Note:

> ticketName will be changed to upperCase, so you don\'t have to provide it with capslock.

> If you omit date, app will treat it as you were working today, and it will log time based on current day + month.

#### If time will be logged correctly then: 
#### This will be displayed in console: 
> \"Request 201 Created\", 
#### otherwise properly error will be displayed.
> & logged time will be saved in {currentYear}__{currentMonth}.txt file

> e.g 2022__07.txt



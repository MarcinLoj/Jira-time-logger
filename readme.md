Jira time logger script
=======================

**Script is used to log time spent on tasks *worklog***
***

* Currently timezone is mounted to ***Europe/Berlin*** and changes between ***CEST/CET based on system time***.

* Function is working on ***jira cloud***, in order to migrate to server version, head to jira docs.

## ***SETUP:***

* **In order to log time correctly, create .env file in top level directory, and provide fields listed under:**

* **Fields in *.env* file**

  * **USER\_EMAIL**=**example\@mail.com**

  * **API\_TOKEN**=**some\_random\_chars**

  * **JIRA\_DOMAIN\_NAME**=**companyname**

* **Fields description:**

  * **JIRA\_DOMAIN\_NAME** is jira domain name -> all between https:// and .atlassian.net

  * **API\_TOKEN** is API token generated on your account on atlassian site

  * **USER\_EMAIL** is JIRA account e-mail
      
***
### ***Next***, 
* Provide list of issues, in the **/worklogdoc/timeloglist.txt** file, in format listed below:
##
**Format must be as listed below**

* ticketName, startTimeOfWork - endTimeOfWork, dateOfWorkOnTask (DD-MM)

  * e.g **giua-1212, 08;20 - 08;35, 20.07**

***
### ***Note***:
* **ticketName** will be changed to upperCase, so you don\'t have to provide it with capslock.

* If you **omit date**, app will treat it as you were working today, and it will log time based on current day + month.
*** 
* Correctly logged time, prints this:

    * **Request 201 Created**
***
* Incorrectly logged time, **prints error**
***
* Logged time will be saved in ***{currentYear}__{currentMonth}.txt*** file in **worklogdoc directory**
    * e.g **2022__07.txt**

## ***How to run a script?***

* Make sure you are in the top directory, run `npm i` to install dependencies,
* Then run `npm run timelog`

## LEGAL
***
Copyright 2022 Marcin Łojewski

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

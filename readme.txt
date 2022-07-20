<body>
<header style="text-align: center;">
    <h1>Jira time logger script</h1>
    <h2>Script helps in work time logging in jira cloud</h2>
</header>
<hr>
<h3 style="text-align: center;>Read information below to run it properly</h3>
<h4">Note:</h4>
    <p>Currently timezone is mounted to Europe/Berlin and changing between CEST/CET based on system time, so you need to be in same timezone as jira is mounted up, otherwise it will not work.</p>
    <p>Function is working on cloud version of jira, in order to migrate to server version, head to jira docs.</p>

<h4>SETUP:</h4> 

<p>In order to log time correctly, create .env file in top level directory, and provide fields listed under:</p>

<table>
    <th>Fields in .env file</th>
    <tr>
        <td>USER_EMAIL=example@mail.com</td>
        <td>API_TOKEN=some_random_chars</td>
        <td>JIRA_DOMAIN_NAME=companyname</td>
    </tr>
    <th>Description</th>
    <tr>
        <td>Api token generated on your account on atlassian site</td>
        <td>Jira domain name, all between https://    and     .atlassian.net</td>
        <td>E-mail of JIRA account</td>
    </tr>
</table>
<p>
then you have to provide list of issues where you want to log your work time, in timeloglist.txt :)
in format:
</p>
<p style="font-weight: 700;">ticketName, startTimeOfWork - endTimeOfWork, dateOfWorkOnTask (DD-MM)</p>

<p>e.g    giua-1212, 08;20 - 08;35, 20.07</p>
<hr>
<h4>Note:</h4> 
    <p>ticketName will be changed to upperCase, so you don't have to provide it with capslock.</p>
    <p>if you omit date, app will treat it as you were working today, and it will log time based on current day + month.</p>


<h4>If time will log correctly, info will be logged to the console: "Request 201 Created", otherwise it will be properly error.</h4>

</body>
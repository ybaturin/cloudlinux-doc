# Python Selector

## Overview and Requirements

Python Selector is a CloudLinux component that allows each user to easily deploy and manage Python applications via application server.

### Requirements

:::danger Important!
It is highly not recommended to downgrade LVE Manager to versions lower than 4.2 if you have already migrated Python applications.
:::

* Python Selector supports the following Alt-Python versions:
  * `alt-python27 2.7.16`, supported by CloudLinux 6, CloudLinux 7
  * `alt-python33 3.3.7`, supported by CloudLinux 6, CloudLinux 7
  * `alt-python34 3.4.9`, supported by CloudLinux 6, CloudLinux 7
  * `alt-python35 3.5.6`, supported by CloudLinux 6, CloudLinux 7
  * `alt-python36-3.6.8`, supported by CloudLinux 6, CloudLinux 7
  * `alt-python36-3.7.2`, supported by CloudLinux 6, CloudLinux 7
* This feature is available for CloudLinux 7, CloudLinux 6 hybrid and CloudLinux 6.
* New Python Selector requires LVE Manager version 4.2 or later.
* It supports cPanel and DirectAdmin servers. On DirectAdmin only on Apache. Plesk will not be supported.
* Python Selector uses `mod_passenger` to host Python. For more details about `mod_passenger`, please read [documentation](https://www.phusionpassenger.com/).
* Python Selector works with EasyApache 3 (note EOL at 1st September 2019), EasyApache 4 and LiteSpeed Web Server. Or Apache on DirectAdmin. 

## Migration to the new Python Selector 

The new Python Selector has a bunch of new features:

* the ability to set environment variables for the application
* the ability to set dependencies from the file requirements
* the ability to start and stop applications as in Node.js Selector
* the ability to add and edit custom configurations
* the ability to install modules from the custom configurations

All existing Python applications (created before the update of LVE Manager to version 5.0.1-1) will work the same as before. You do not need to migrate them unless you’d like to use new features. These applications we define as old applications.

:::warning Important!
There are some risks during the migration process and the migration can fail. To avoid such issues and make it possible to solve them if any, only user who created a particular application is allowed to initiate the migration process.
:::

You do not need to migrate the new applications that will be created after the update to the LVE Manager 5.0.1-1. All new features are available for them.

:::warning Important!
You cannot migrate back to the old application. If you face any issue during the migration, please [contact our support team](https://cloudlinux.zendesk.com/hc/requests/new).
:::

### How to migrate an application to the new Python Selector

:::tip Note
Only user who created an application can migrate it.
:::

To migrate a Python application:
* Log in to your control panel.
* Open Python Selector user interface.
    ![](/images/Python_general.png)
* Choose an application to migrate and click ![](/images/Migrate-btn.png) in the _Actions_ section. You will see the popup.
    ![](/images/Python-migration.png)
* Click _Migrate_ in the popup.
* After successful migration, you will see the confirmation popup.

If you face any issue during the migration, please [contact our support team](https://cloudlinux.zendesk.com/hc/requests/new).


## Installation

New clients can install Python Selector using the [CloudLinux Installation Wizard](/lve_manager/#cloudlinux-installation-wizard).

### cPanel

To use Python Selector, it is required to install the following:
* alternative Python packages by running the following command:
  
    ```
    yum groupinstall alt-python
    ```
 
* LVE Manager, LVE Utils and Phusion Passenger to create isolated Python environments by running the following command:

    ```
    yum install lvemanager lve-utils alt-python-virtualenv ea-apache24-mod-alt-passenger
    ```
 
__For EasyApache 3:__

```
yum install lve-utils lvemanager alt-python-virtualenv alt-mod-passenger
```

* CageFS for better security. See [CageFS documentation for details](/cagefs/).


### DirectAdmin
 
To use Python Selector, it is required to install the following:

* alternative Python packages by running the following command:

    ```
    yum groupinstall alt-python
    ```
 
* LVE Manager, LVE Utils and Phusion Passenger to create isolated Python environments by running the following command:

    ```
    yum install lve-utils lvemanager alt-python-virtualenv alt-mod-passenger
    ```

* CageFS for better security. See [CageFS documentation for details](/cagefs/).

:::tip Note
After installation, please make sure that you have unmarked appropriate checkboxes in LVE Manager Options tab to show Python App in the web-interface.
:::
 
:::tip Note
Adding Python module requires executing permissions to `gcc/make` binaries. Please enable compilers in Compiler Access section of WHM, then run:
```
cagefsctl --force-update
```
:::

## Command Line Interface

Below, there is a list of commands hoster and end user can run in a command line.

### Hoster

:::tip Note
When running user command as root, please use `--user` option.
:::

* Get all Python-related information: default version, a list of supported versions, status of Python Selector, a list of users, their applications, etc:
  
    ```
    cloudlinux-selector [get] [--json] --interpreter python
    ```

    JSON output for `get` command:

```
{
  "selector_enabled": true | false, 
  "default_version": "2.7.15", 
  "result": "success", 
  "timestamp": 1508667174.220027,
  “cache_status”: “ready”,         //  or “updating” during automatic yum cache rebuild
  "available_versions": {   //  begin of  “versions”
      "2.7.15" : {   //   begin of version "2.7.15"
          "status": "enabled",  //  enabled, disabled, not_installed, installing, removing, locked
          “base_dir”: “/opt/alt/alt-python27”   //  empty when version is not installed
          “users”: {   //  begin of  “users”
              “user1”: {   //  begin of “user1”
	“homedir”: “/home/user1”,		
                 “applications”: {    //  begin of “applications”
                     “apps_dir/app1” : {   //   begin of application “apps_dir/app1”
                         “domain”: “cltest1.com”,
                         “app_uri”: “apps/my-app1”,
                         “startup_file” : “run.py”,
                         “entry_point” : “app”,
                         “app_status” : “started”,   // ‘started’ or ‘stopped’
                         “config_files” : [
                             “requirements.txt”,
                             “requirements-migration.txt”
                         ],
                         “env_vars” : {
                             “var1” : “value1”,
                             “var2” : “value2”
                         },
                     },   // end of application “apps_dir/app1”
                     “apps_dir/app2” : {    //   begin of application “apps_dir/app2”
                          << data for application “apps_dir/app2”  (same structure as for application “apps_dir/app1” above) >>
                     },   //  end of application “apps_dir/app2”
                 },   //  end of “applications”
              },   //  end of “user1”
              “user2”: {   //  begin of “user2”
                  << data for user “user2”  (same structure as for “user1” above) >>
              },   //  end of “user2”
          },   // end of “users”
        },    //  end of version “2.7.15”
      "8.21.5" : {   //   begin of version "3.3.7"
            << data for version "3.3.7"  (same structure as for version “2.7.15” above) >>
        },    //  end of version “3.3.7”
    },    //  end of “versions”
}   //   end of json
```

* Set default version, supported versions, and status of Python Selector:

    ```
    cloudlinux-selector set [--json] --interpreter python (--selector-status <enabled,disabled> | --default-version <str> | --supported-versions <str>)
    ```

#### *Examples*

1. Enable Python Selector:

    ```
    cloudlinux-selector set --json --interpreter python --selector-status enabled
    ```
2. Set default Python Selector version as 3.3:

    ```
    cloudlinux-selector set --json --interpreter python --default-version 3.3
    ```
3. Set supported Python Selector version as 3.3:

    ```
    cloudlinux-selector set --json --interpreter python --supported-versions='{"2.7": false, "3.3": true}'
    ```   
4. Install a specific Python version:

    ```
    cloudlinux-selector install-version --json --interpreter python --version 2.7
    ```
5. Uninstall a specific Python version:

    ```
    cloudlinux-selector uninstall-version --json --interpreter python --version 2.7
    ```
6. Enable a specific Python version:

    ```
    cloudlinux-selector enable-version --json --interpreter python --version 2.7
    ```
7. Disable a specific Python version:

    ```
    cloudlinux-selector disable-version --json --interpreter python --version 2.7
    ```
* Change version for an application:
    * For a specific application:
        
        ```
        cloudlinux-selector set [--json] --interpreter python --user <str> --app-root <str> --new-version <str>
        ```
    * For all applications that use specific Python version:
        
        ```
        cloudlinux-selector change-version-multiple --json --interpreter python --from-version <str> --new-version <str>
        ```
    * For multiple applications:
        
        ```
        cloudlinux-selector change-version-multiple --json --interpreter python --data  <pairs user:app-root as json> --new-version <str>
        ```

#### *Examples*

1. Change version for a specific application:
    
    ```
    cloudlinux-selector set --json --interpreter python --user user1 --app-root apps_dir/app1 --new-version 2.7
    ```
2. Change version for all applications that use version 2.7.15 to version 3.3.5:
    
    ```
    cloudlinux-selector change-version-multiple --json --interpreter python --from-version 2.7 --new-version 3.3
    ```
3. Change version of multiple application(s) and/or multiple users:
    
    ```
    cloudlinux-selector change-version-multiple --json --interpreter python --data <pairs user:app-root as json> --new-version <str>
    ```

**Example**

```
cloudlinux-selector change-version-multiple --json --interpreter python --data [ {“user”: “user1”, “app_root”: “apps/app1”}, {“user”: “user2”, “app_root”: “apps/app1”} ]  --new-version 2.7
```

Common output for all `set` commands:

**in case of success:**

```
{
  "result": "success", 
  "timestamp": 1508666792.863358
}
```

**in case of error:**

```
{
  "result": "Some error message",
  "details" : "Traceback: ..." ,
  "context": {},
  "timestamp": 1508666792.863358
}
```

**in case of warning:**

```
{
  "result": "success",
  "warning" : "Some warning message" ,
  "context": {},
  "timestamp": 1508666792.863358
}
```

### End User

:::tip Note
To start all users CLI commands use `cagefs_enter` command:
```
/bin/cagefs_enter.proxied /usr/sbin/cloudlinux-selector --json <other parameters>
```
:::

* Get config file for the user application:
    
    ```
    cloudlinux-selector read-config [--json] --interpreter python  [--user <str> | --domain <str>] --app-root <str> --config-file <name>
    ```

    **JSON output:**

    ```
    {
      	"result": "success", 
     "timestamp": 1508666792.863358
     	 “data”: “content of config file as Base64 encoded string”
    }
    ```

    **Example:**

    ```
    cloudlinux-selector read-config --json --interpreter python  --user user1 --app-root app_dir/app1 --config-file requirements.txt
    ```

* Save config file for user application:
  
    ```
    cloudlinux-selector save-config [--json] --interpreter python  [--user <str> | --domain <str>] --app-root <str> --config-file <path> --content <content of config file as Base64 encoded string>
    ```
    **JSON output** (the same as for all `set` commands):

    ```
    {
      	"result": "success", 
    "timestamp": 1508666792.863358
    }
    ```
    
    **Example:**
    
    ```
    cloudlinux-selector save-config --json --interpreter python  --user user1 --app-root app_dir/app1 --config-file requirements.txt  --content VGh1ICAyIE5vdiAxMDo0MzoxMiBFRFQgMjAxNwo=
    ```

    :::tip Note
    An output for all commands below is like in Hoster’s CLI, but filtered out by username.
    :::

* Get a list of applications for a specific user:

    ```
    cloudlinux-selector [get] [--json] --interpreter python  [--user <str> | --domain <str>]
    ```
    **Example:**

    ```
    cloudlinux-selector get --json --interpreter python  --user user1
    ```

* Create user application:

    ```
    cloudlinux-selector create [--json] --interpreter python  [--user <str> | --domain <str>]  --app-root <str> --app-uri <str> [--version <str>]  [--startup-file <str>] [--entry-point <str>] [--env-vars <json string>]
    ```

    **Example:**
    
    ```
    cloudlinux-selector create --json --interpreter python --app-root my_apps/app1 --domain xyz.com --app-uri apps/app1 --version 2.7 --startup-file run.py --entry-point app
    ```

* Start, restart, stop, and destroy user application:
    
    ```
    cloudlinux-selector (start | restart | stop | destroy) [--json] --interpreter python  [--user <str> | --domain <str>] --app-root <str>
    ```

    **Example:**

    ```
    cloudlinux-selector start --json --interpreter python --user user1 --app-root my_apps/app1
    ```

* Change properties for an application:

    ```
    cloudlinux-selector set [--json] --interpreter python  [--user <str> | --domain <str>] --app-root <str> [--app-mode <str>]  [--new-app-root <str>]  [--new-domain <str>]  [--new-app-uri <str>]  [--new-version <str>]  [--startup-file <str>] [--entry-point <str>] [--env-vars <json string>] [--config-files <str>]
    ```
    **Example:**

    ```
    cloudlinux-selector set --json --interpreter python  --user user1 --app-root my_apps/app1 --app-mode production  --new-app-root new_apps/new_app1  --new-domain new.xyz.com --new-app-uri new_apps/app1  --new-version 8  --startup-file new_app.js --env-vars { “var1” : “value1”, “var2” : “value2” }  --config-files requirements.txt,reqs.txt
    ```

* Run `PIP install` for user application:

    ```
    cloudlinux-selector install-modules [--json] --interpreter python  [--user <str> | --domain <str>] --app-root <str> --requirements-file <path>
    ```
    **Example:**

    ```
    cloudlinux-selector install-modules --json --interpreter python --user user1 --app-root my_apps/app --requirements-file requirements.txt
    ```

* Optional: install or uninstall Python packages for user application:

    ```
    cloudlinux-selector (install-modules|uninstall-modules) [--json] --interpreter python  [--user <str> | --domain <str>] --app-root <str> --modules <module1[,module2...]>
    ```
    **Example:**

    ```
    cloudlinux-selector install-modules --json --interpreter python --user user1 --app-root my_apps/app --modules json-annotate,termcolor
    ```

* Optional: run Python script in virtual environment of user application, arguments `<args>` are passed to the script:
    
    ```
    cloudlinux-selector run-script [--json] --interpreter python  [--user <str | --domain <str>>] --app-root <str> --script-name <str> [-- <args>...]
    ```
    **Example:**

    ```
    cloudlinux-selector run-script --json --interpreter python --user user1 --app-root my_apps/app --script-name test_script -- --script_opt1 --script_opt2 script_arg1 script_arg2
    ```
    **JSON output:**
    
    ```
    {
      	"result": "success", 
     	"timestamp": 1508666792.863358
       	“data”: “script output as Base64 encoded string”
    }
    ```

## User Interface

### Hoster

Hoster interface allows to enable and disable Python Selector and manage individual Python versions.

Go to LVE Manager → Options Tab → Python Selector.

A list of installed Python versions is displayed. There are several columns in the list.
* Version — displays Python  version.
* Path — Python package location.
* Applications — number of applications that use this Python version. Click on an application number to go to the list of applications.
* Enabled — displays if particular Python version is enabled.
* Actions — allows to install, delete, and make default a particular Python version.

To display all changes immediately click _Refresh_ link.

![](/images/PythonGeneral.png) 

#### How to enable/disable Python Selector

To enable Python Selector move a slider to _Enable_ and complete the action by clicking _Agree_ or click _Cancel_ to close the popup..
To disable Python Selector move a slider back to _Disable_. Please note that if you disable Python, all users won't be able to manage their applications.

![](/images/PythonEnableDisable.png)

::: tip Note
Python Selector icon in end user interface is absent when Python is disabled.
:::

![](/images/PythonEndUserIcon.png)

#### How to manage Python Selector 

In the list of installed Python versions you can enable and disable, install and delete, and set a particular Python version as a default.
 
#### **Enable and disable particular Python version**
 
To enable particular Python version do the following:

* Move a disabled slider in the Enabled column for a particular Python version.
* In the confirmation popup click _Agree_ to save changes or _Cancel_ to close popup.

![](/images/PythonEnabled.png)

To disable particular Python version do the following:

* Move an enabled slider in the Enabled column for a particular Python version.
* In the confirmation popup click _Agree_ to save changes or _Cancel_ to close popup.
 
#### **Install and delete particular Python version**
 
To install particular Python version do the following:

* Click _Install_ button in the Actions column for a particular Python version.
* In the confirmation popup click _Agree_ to save changes or _Cancel_ to close popup.
 
To delete particular Python version do the following:

* Click _Bin_ icon in the Actions column for a particular Python version.
* In the confirmation popup click _Agree_ to start uninstalling process. Or close popup without changes by clicking _Cancel_ button.

:::tip Note
It is impossible:
* to remove default Python version
* to remove version with applications
* to install or remove version if another installation/uninstalling process is running
:::

![](/images/PythonInstall.png)

#### **Make a particular Python version as a default**

To make a particular Python version as a default do the following:

* Click _Double-Tick_ icon in the Actions column for a particular Python version.
* In the confirmation popup click _Agree_ to save changes or _Cancel_ to close popup.
 
:::tip Note
It is impossible to make default disabled version
:::

![](/images/PythonChangeDefaultVersion.png)

#### **Applications column**
 
To view and operate with the list of domains with Python versions click a number in the _Applications_ column for a particular Python version. A section with a list of Domains for particular Python version will be displayed.

![](/images/PythonDomains.png)

Domains are displayed by three. To load more domains click _Load More_ button.
 
To change Python version for a particular application do the following:

* Click _Double-Arrow_ icon in the _Actions_ column in a particular application row. A confirmation popup will be displayed.
* In the popup choose Python version from a dropdown.
* Click _Change_ to confirm the action or _Cancel_ to close the popup.
* To refresh state of applications in current version you can click _Refresh_ link.
 
:::tip Note
All packages of the application(s) will be re-installed.
:::

### End User

:::tip Note
Python Selector icon in end user interface is absent when Python is disabled
:::

![](/images/PythonEndUserIcon.png)

End User interface allows end users to setup and manage Python for their web applications.

Go to cPanel → Software Section → Setup Python App.
 
Web Applications page is displayed.

![](/images/PythonEUWebApp.png)

There are several columns in the list:

* App URI — application URI including the domain.
* App Root Directory —  application root directory relative to user's home.
* Status — started/stopped — displays if an application is running or not and version of the application.
* Actions — allows to start, restart, stop, edit, and remove a particular application.

#### How to manage an application

#### **Create application**

1. Click _Create Application_ to create an application. The Create Application tab opens.

    ![](/images/PythonCreateApp.png)

2. Specify the following:
    * Python version —  select from the dropdown (required);
    * Application root — physical address to your application on a server that corresponds with its URI (required);
    * Application URL —  HTTP/HTTPS link to your application (optional);
    * Application startup file — the file where WSGI callable object is located. It is required for application to run. Default is `passenger_wsgi.py`;
    * Application Entry point — WSGI callable object for your application (optional). Default is `application`;
3. Optionally, add environment variable. To do so, click _Add Variable_ and specify variable name and value, then click the _Done_ button or _Cancel_ to close an adding form.

To delete or edit environment variable, click _Bin_ or _Pencil_ icon for the required variable.

![](/images/PythonEnvVar.png)

**Start application**
 
To start a stopped application do the following:

* Click _Start_ icon in the _Actions_ column in a stopped application row.
* When an action is completed a _Start_ icon changes to _Stop_ icon.
 
**Stop application**
 
To stop a started application do the following:

* Click _Stop_ icon in the _Actions_ column in a started application row.
* When an action is completed a _Stop_ icon changes to _Start_ icon.

![](/images/PythonStartStopApp.png)

**Restart application**
 
To restart a started application do the following:

* Click _Restart_ icon in the _Actions_ column in a started application row. A current row is blocked and when a process is completed it will be unblocked.
 
**Remove application**
 
To remove application do the following:

* Click _Bin_ icon in the _Actions_ column in a particular application row.
* In the confirmation popup click _Agree_ to start removing or _Cancel_ to close the popup.
* When an action is completed an application will be removed from the _Web Applications_ table and a confirmation popup will be displayed.

![](/images/PythonRestartRemove.png)

**Edit application**
 
To edit application do the following:

* Click the _Pencil_ icon in the _Actions_ column in a particular application row. A particular application tab opens.

![](/images/PythonEditApp.png)

The following actions are available:

* Restart application — click the _Restart_ button.
* Stop application — click _Stop App_ button.
* Remove application — click _Destroy_ button and confirm the action in a popup.
* Change Python version — choose Python version from a dropdown.
* Change Application root — specify in a field a physical address to the application on a server that corresponds with its URI.
* Change Application URL — specify in a field an HTTP/HTTPS link to the application.
* Open Application URL —  click the _Open_ button.
* Change Application startup file — specify as NAME.py file.
* Change Application Entry point —  specify WSGI callable object for your application.
* Run pip install command — click _Run pip install_ button to install the package(s) described in the configuration file.
* Add Configuration files —  click _Add_ and specify all required information.
* Edit available configuration file —  click _Edit_, the file opens in a new popup.
* Remove available configuration file from the list —  click _Remove_ and confirm the action or click _Cancel_ to close the popup.
* Add Environment variables — click _Add Variable_ and specify a name and a value.
  
Click _Save_ to save all changes or _Cancel_ to close the tab.

## Deploying Trac using Python Selector

1. In <span class="notranslate"> **Setup Python App** </span> create an application. <span class="notranslate"> Trac </span> project <span class="notranslate"> WSGI </span> script will be located in <span class="notranslate"> **App Directory** </span> ( _e.g._ <span class="notranslate"> _trac_ </span> ).

<span class="notranslate"> App URI </span> – is a <span class="notranslate"> URL </span> where web-interface is located. ( _e.g._ <span class="notranslate"> _Trac_ </span> – web-interface is located in <span class="notranslate"> _YOUR_DOMAIN/trac_ </span> ).

<span class="notranslate"> Trac </span> needs <span class="notranslate"> Python </span> version from **2.5** to **3.0,** in actual example version 2.7 is used.

2. When the App is created, add the following modules: <span class="notranslate"> Trac, Genshi, MySQL-python </span> .

2.1. Alternatively, connect to the server via SSH and perform the following steps:

<span class="notranslate"> 
source ~/virtualenv/trac/2.7/bin/activate; </span>

then:

<span class="notranslate"> 
~/virtualenv/trac/2.7/bin/easy_install Trac mysql-python (using easy_install </span> );

or

<span class="notranslate">
~/virtualenv/trac/2.7/bin/pip install trac mysql-python </span> 
(using <span class="notranslate"> pip </span> ).

3. In cPanel create MySQL database and a user. Add user to database.

![](/images/trac1.jpg)

_In this example_ <span class="notranslate"> _DB tractest_trac_ </span> _and user_ <span class="notranslate"> _tractest_trac_ </span> _were created._

4. Connect to the server via SSH using your cPanel account.

Create <span class="notranslate"> Trac </span> project:
 <span class="notranslate"> ~/virtualenv/trac/2.7/bin/trac-admin  ~/trac_project initenv </span>

For <span class="notranslate"> "Database connection string" </span> parameter enter the following: <span class="notranslate"> mysql://user:password@localhost/database_name </span> – here the data for connecting MySQL database are specified.

::: tip Note
In case of "... The charset and collation of database are 'latin1' and 'latin1_swedish_ci' error the database must be created with one of (('utf8', 'utf8_bin'), ('utf8mb4', 'utf8mb4_bin')) ..."  while creating the project, you should change database encoding.
:::

To change encoding, in cPanel run <span class="notranslate"> phpMyAdmin </span> , choose <span class="notranslate"> DB </span> , go to <span class="notranslate"> Operations </span> , choose the necessary encoding in <span class="notranslate"> Collation </span> section and click <span class="notranslate"> Go </span> .

![](/images/trac2.jpg)

After that you have to repeat the procedure of creating a project. When done, the <span class="notranslate"> Trac </span> project must appear: <span class="notranslate"> ~/trac_project </span>

5. To create project frontend run the following:

<span class="notranslate">
~/virtualenv/trac/2.7/bin/trac-admin ~/track_project deploy ~/trac </span>

<span class="notranslate"> ~/track_project </span> — is the path to the project,
<span class="notranslate"> ~/trac </span> — is the path, that was specified while setting <span class="notranslate"> App Directory </span> .

Create topic directory by default:
<div class="notranslate">

```
cd ~/public_html/trac
mkdir chrome 
cp -R ~/trac/htdocs/ ~/public_html/trac/chrome/
```
</div>
- all project static files are located in this directory; the changes can be added here as well.

6. To add path to <span class="notranslate"> WSGI </span> file in created application:

Go back to <span class="notranslate"> cPanel Setup Python App </span> , change <span class="notranslate"> “WSGI file location” </span> for your application to <span class="notranslate"> cgi-bin/trac.wsgi </span> , click <span class="notranslate"> Update </span> to apply changes and then click <span class="notranslate"> Restart </span> .

Your Existing application now must look like the following:

![](/images/trac3.jpg)

7. Adding authorization:

In <span class="notranslate"> ~/public_html/trac/.htaccess </span> after <span class="notranslate"> CLOUDLINUX PASSENGER CONFIGURATION </span> section add the following lines:
<div class="notranslate">

```
AuthType Basic
AuthName "trac"
AuthUserFile /home/tractest/trac/passwd
Require valid-user
```
</div>

8. Add new user and create passwd file <span class="notranslate"> /usr/local/apache/bin/htpasswd </span> with <span class="notranslate"> ~/trac/passwd </span> admin.

Enter password.

<span class="notranslate">
~/virtualenv/trac/2.7/bin/trac-admin  ~/track_project permission add admin TRAC_ADMIN </span>

Add admin user to <span class="notranslate"> TRAC_ADMIN </span> group.

Here the path <span class="notranslate"> trac </span> directory is equal to <span class="notranslate"> App Directory </span> in your project.

Now <span class="notranslate"> Trac </span> is available via <span class="notranslate"> YOUR_DOMAIN/trac </span> .


### Trac with MySQL

To use <span class="notranslate"> Trac </span> with MySQL database you should install <span class="notranslate"> alt-python27-devel </span> package.

To install run:
<div class="notranslate">

```
yum install alt-python27-devel --enablerepo=cloudlinux-updates-testing 
```
</div>

## EasyApache 4


Since cPanel/WHM version 66 provides <span class="notranslate"> ea-ruby24-mod_passenger </span> (more information on the [link](https://documentation.cpanel.net/display/66Docs/Application+Manager) ), this allows creating <span class="notranslate"> Ruby </span> applications with cPanel application manager.

CloudLinux already has <span class="notranslate"> Python Selector </span>, which allows creating applications with <span class="notranslate"> ea-apache24-mod-alt-passenger </span> . However, it does not allow using <span class="notranslate"> cPanel application manager </span> .

It is not correct to install both of those packages on the server because they contain the same <span class="notranslate"> passenger </span> module for Apache web server.

The new <span class="notranslate"> ea-ruby24-mod_passenger </span> is available for download from our <span class="notranslate"> updates-testing (beta) </span> repository which allows you to run applications via <span class="notranslate"> cPanel application manager </span> and <span class="notranslate"> CloudLinux Python Selector </span>.

To install run:
<div class="notranslate">

```
# yum install lvemanager alt-python-virtualenv
# yum install ea-ruby24-mod_passenger --enablerepo=cl-ea4-testing
```
</div>


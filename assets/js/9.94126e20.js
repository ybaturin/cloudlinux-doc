(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{446:function(e,t,a){"use strict";a.r(t);var n=a(2),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"file-change-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-change-api","aria-hidden":"true"}},[e._v("#")]),e._v(" File Change API")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/cloudlinux-fchange/#general"}},[e._v("General Information")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/cloudlinux-fchange/#usage-and-integration"}},[e._v("Usage and Integration")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/cloudlinux-fchange/#installation-and-configuration"}},[e._v("Installation and Configuration")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/cloudlinux-fchange/#configuration-details"}},[e._v("Configuration Details")])],1),e._v(" "),a("p",[a("router-link",{attrs:{to:"/cloudlinux-fchange/#low-level-access"}},[e._v("Low-level access")])],1),e._v(" "),a("h2",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general","aria-hidden":"true"}},[e._v("#")]),e._v(" General")]),e._v(" "),a("p",[a("strong",[e._v("General description")])]),e._v(" "),a("p",[e._v("One of the main problems on a shared hosting system for file backup operations is to figure out which files have changed. Using "),a("span",{staticClass:"notranslate"},[e._v(" INOTIFY ")]),e._v(" on a 1T drive with a large number of small files and directories guarantees slow startup times, and a lot of context switching between kernel and userspace - generating additional load. On the other hand scanning disk for newly modified files is very "),a("span",{staticClass:"notranslate"},[e._v(" IO ")]),e._v(" intensive, and can kill the performance of the fastest disks.")]),e._v(" "),a("p",[a("strong",[e._v("CloudLinux approach")])]),e._v(" "),a("p",[a("span",{staticClass:"notranslate"},[e._v(" CloudLinux File Change API ")]),e._v(" is a kernel level technology with the user space interface that buffers lists of modified files in the kernel and then off-loads that list to user space daemon.")]),e._v(" "),a("p",[e._v("After that - any software (with enough permissions) can get a list of files that has been modified for the last 24 hours.")]),e._v(" "),a("p",[e._v("The software is very simple to use and produces the  list of modified files. As such we expect file backup software, including integrated cPanel backup system to integrate with this "),a("span",{staticClass:"notranslate"},[e._v(" API ")]),e._v(" soon.")]),e._v(" "),a("h2",{attrs:{id:"usage-and-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-and-integration","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage and Integration")]),e._v(" "),a("p",[a("strong",[e._v("Userland utilities")])]),e._v(" "),a("p",[a("span",{staticClass:"notranslate"},[e._v("/usr/bin/cloudlinux-backup-helper ")]),e._v(" is a utility for getting the list of changed files.")]),e._v(" "),a("p",[e._v("It is supposed to be run by a super user only.")]),e._v(" "),a("p",[e._v("Command line parameters:\n")]),a("div",{staticClass:"notranslate"},[a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-t | --timestamp retrieve file names for files modified after specified timestamp\n-u | --uid       retrieve file names for particular UID only\n")])])])]),e._v("\nIf no UID specified, are retrieved for all users. If no timestamp specified, all database events are shown.\n"),a("p",[a("strong",[e._v("Output Format")])]),a("div",{staticClass:"notranslate"},[a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("protocol version (1 right now), timestamp (in seconds) - up to which time data was collected\nUID:absolute path to file changed\nUID:absolute path to file changed\n…\n")])])])]),e._v(" "),a("p",[e._v(":::tip Note\nThe timestamp in output is needed so you can clearly identify from which timestamp to get list of changed files next.\n:::")]),e._v(" "),a("p",[a("strong",[a("em",[e._v("Examples:")])])]),a("div",{staticClass:"notranslate"},[a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@localhost ~]# cloudlinux-backup-helper -t 1495533489 -u <UID>\n1,1495533925\n1001:/home/user2/public_html/output.txt\n1001:/home/user2/public_html/info.php\n[root@localhost ~]# cloudlinux-backup-helper -t 1495533489\n1,1495533925\n1000:/home/user1/.bashrc\n1001:/home/user2/public_html/output.txt\n1001:/home/user2/public_html/info.php\n1003:/home/user3/logs/data.log\n")])])])]),e._v("\n**Getting changed files by end user**\n"),a("p",[a("span",{staticClass:"notranslate"},[e._v("/usr/bin/cloudlinux-backup-helper-uid")]),e._v("  is a SUID wrapper for the  "),a("span",{staticClass:"notranslate"},[e._v(" cloudlinux-backup-helper ")]),e._v("  utility that enables an end user to get the list of files changed. It accepts timestamp argument only and retrieves data of the user who is running it only.")]),e._v(" "),a("p",[a("strong",[a("em",[e._v("Examples:")])])]),a("div",{staticClass:"notranslate"},[a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[user@localhost ~]$ cloudlinux-backup-helper-uid               \n1,1495530576\n1000:/home/user/.bash_history \n\n[user@localhost ~]$ cloudlinux-backup-helper-uid -t 1495547922\n1,1495548343\n1000:/home/user/file1.txt\n1000:/home/user/file2.txt\n")])])])]),e._v("\nThis command is available within CageFS.\n"),a("h2",{attrs:{id:"installation-and-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation and Configuration")]),e._v(" "),a("p",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("cloudlinux-fchange-0.1-5")])])]),e._v(" "),a("p",[a("strong",[e._v("Requirements")])]),e._v(" "),a("p",[a("span",{staticClass:"notranslate"},[e._v(" CloudLinux OS ")]),e._v(" 6 (requires Hybrid kernel) or 7\nKernel Version: 3.10.0-427.36.1.lve1.4.47")]),e._v(" "),a("p",[a("strong",[e._v("Installation and Configuration")])]),e._v(" "),a("p",[e._v("To install "),a("span",{staticClass:"notranslate"},[e._v(" cloudlinux-fchange ")]),e._v(" system run:")]),e._v(" "),a("p",[a("em",[e._v("CloudLinux 7:")])]),a("div",{staticClass:"notranslate"},[a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install cloudlinux-fchange --enablerepo=cloudlinux-updates-testing\n")])])])]),e._v(" "),a("p",[a("em",[e._v("CloudLinux 6 Hybrid:")])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install cloudlinux-fchange --enablerepo=cloudlinux-hybrid-testing\n")])])])]),e._v("\nConfiguration file can be found in "),a("span",{staticClass:"notranslate"},[e._v("/etc/sysconfig/cloudlinux-fchange ")]),e._v(" "),a("p",[e._v("Database containing list of modified files is located at "),a("span",{staticClass:"notranslate"},[e._v("/var/lve/cloudlinux-fchange.db ")]),e._v(" by default.")]),e._v(" "),a("p",[a("strong",[e._v("Starting and Stopping")])]),e._v(" "),a("p",[e._v("After successful installation the event collecting daemon starts automatically, providing all "),a("span",{staticClass:"notranslate"},[e._v(" kernel-exposed ")]),e._v(" data are in place.")]),e._v(" "),a("p",[e._v("To start daemon:\n"),a("span",{staticClass:"notranslate"},[a("em",[e._v("CloudLinux 7:")])])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("systemctl start cloudlinux-file-change-collector\n")])])])]),e._v(" "),a("p",[a("em",[e._v("CloudLinux 6 Hybrid:")])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("service cloudlinux-file-change-collector start\n")])])])]),e._v("\nTo stop daemon:\n"),a("span",{staticClass:"notranslate"}),e._v("\n_CloudLinux 7:_\n"),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("systemctl stop cloudlinux-file-change-collector\n")])])])]),e._v(" "),a("p",[a("em",[e._v("CloudLinux 6 Hybrid:")])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("service cloudlinux-file-change-collector stop\n")])])])]),e._v(" "),a("p",[e._v("To uninstall "),a("span",{staticClass:"notranslate"},[e._v(" cloudlinux-fchange ")]),e._v(" run:\n")]),a("div",{staticClass:"notranslate"},[a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum remove cloudlinux-fchange\n")])])])]),e._v(" "),a("h2",{attrs:{id:"configuration-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-details","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration Details")]),e._v(" "),a("p",[e._v("Configuration resides in "),a("span",{staticClass:"notranslate"},[e._v("/etc/sysconfig/cloudlinux-fchange")]),e._v(". The following is the default configuration (see comments):\n")]),a("div",{staticClass:"notranslate"},[a("p"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# sqlite database file path. If commented out a default value is used\n#database_path=/var/lve/cloudlinux-fchange.db\n\n# If uncommented paths starting with 'include' one are processed only\n# Pay attention this parameter is a regular string, not a regex\n# To include more than one item just specify several lines to include:\n# include=/one\n# include=/two\n\n# If uncommented exclude paths which contain 'exclude'\n# Pay attention this parameter is a regular string, not a regex\n# To exclude more than one item just specify several lines to exclude:\n# exclude=var\n# exclude=tmp\n\n# Daemon polling interval in seconds\npolling_interval=5 \n\n# Time to keep entries in days. Does not clean if commented out or zero\ntime_to_keep=1\n\n# User read-only mode minimal UID\n# If file change collector stopped, all users with UID >= user_ro_mode_min_uid\n# are restricted to write to their home directory. This prevents to miss\n# a file change event.\n# Value of -1 (default) allows to disable the feature\nuser_ro_mode_min_uid=-1\n\n# Minimal UID of events to be processed.\n# Events of users with UID less then specified are not handled.\n# By default 500 (non-system users for redhat-based systems)\n#minimal_event_uid=500\n \n# SQLite shared lock prevents setting more restrictive locks. That is a\n# process cannot write to a database table when a concurrent process reads\n# from the table. As saving data to database is considered far more important\n# than getting them (data could be reread a second later after all), database\n# writer could try to terminate concurrent reading processes. Just set\n# terminate rivals to 'yes' to turn this ability on.\n# terminate_rivals=no \n\n# Events to be handled. Currently the following types of events are processed:\n# 1. file creation\n# 2. file deletion\n# 3. directory creation\n# 4. directory deletion\n# 5. file content/metadata modification\n# 6. file/directory attributes/ownership modification\n# 7. hardlink creation\n# 8. symlink creation\n# 9. file/directory moving/renaming\n# By default all events are processed. Keep in mind that events for a filepath\n# are cached, i.e if a file was deleted and then a file with the same absolute\n# name is created, only the deletion event is triggerred. Changing file\n# modification timestamp with command 'touch' will trigger modification event\n# as if a file content is modified.\n# Currently supported options are:\n# file_created, file_modified, file_deleted, dir_created, dir_deleted,\n# owner_changed, attrib_changed, moved, hardlink_created, symlink_created, all\n# Options that don't have 'file' or 'dir' prefix, applied to both files and\n# directories. To set more than one options, separate them with commas,\n# e.g. event_types=file_created,file_deleted,file_modified. Unknown options are\n# ignored.\n#\n# event_types=all\n")])])])]),e._v(" "),a("p",[e._v(":::tip Note\nPlease keep in mind, that current implementation implies that one process is writing to a database and another is reading from it. As reading sets shared lock to a database table, the writing process cannot write to the table until the lock is released. That’s why passing a timestamp to cloudlinux-backup-helpermatters: this way the number of records to be returned is substantially decreased, lowering the processing time and filtering out old records. Likewise, pay attention to narrowing the scope of events being recorded. Chances are that changing attributes, ownership, directory creation/deletion, symlink events are not relevant and there’s no need to keep them.\n:::")]),e._v(" "),a("h2",{attrs:{id:"low-level-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#low-level-access","aria-hidden":"true"}},[e._v("#")]),e._v(" Low-level access")]),e._v(" "),a("p",[e._v(":::tip Note\nUsing this options is dangerous, and might cause problems with "),a("span",{staticClass:"notranslate"},[e._v("CloudLinux File Change API.")]),e._v("\n:::")]),e._v(" "),a("p",[e._v("The kernel exposes the functionality to folder.")]),e._v(" "),a("ol",[a("li",[a("p",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("enable")])]),e._v(" - enable/disable the functionality. Write 1 to this file to enable, 0 to disable. If disabled, no events are coming to events file.")])]),e._v(" "),a("li",[a("p",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("events")])]),e._v(" - the modified files log itself. Events in the format "),a("span",{staticClass:"notranslate"},[e._v(" <EVENT_ID>:<EVENT_TYPE_ID>:<USER_ID>:<FILE_PATH> ")]),e._v(" are constantly appending to the end of the file if datacycle enabled. File events are never duplicated: if we have file modification event, we would not get file deletion event if the file has been later deleted. This events buffer has limited capacity, therefore from time to time, the events log requires flushing.")])]),e._v(" "),a("li",[a("p",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("flush")])]),e._v(" - a file for clearing events log. For flushing, the last "),a("span",{staticClass:"notranslate"},[e._v(" event_id ")]),e._v(" from the events file is written to this file. Right after this, events log is truncated to that "),a("span",{staticClass:"notranslate"},[e._v(" event_id ")]),e._v(" .")])]),e._v(" "),a("li",[a("p",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("user_ro_mode")])]),e._v(" - forbidding users with UIDs equal or bigger that set in this file writing to their home directories. At the boot, the file has -1. When it’s written positive value, say 500, the system starts effectively preventing users from modifying their home dirs (on write attempt a user gets "),a("span",{staticClass:"notranslate"},[e._v(" ‘read-only filesystem’ ")]),e._v(" error). This feature is designed to prevent users from updating their home dirs when events are not handled.")])]),e._v(" "),a("li",[a("p",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("entries_in_buffer")])]),e._v(" - just counter of log entries of events file.")])]),e._v(" "),a("li",[a("p",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("min_event_uid")])]),e._v(" - this file has minimal UID of events to be handled. Events from users with smaller UID are not handled. By default 500 (non-system users in redhat-based systems).")])])])])},[],!1,null,null,null);t.default=s.exports}}]);
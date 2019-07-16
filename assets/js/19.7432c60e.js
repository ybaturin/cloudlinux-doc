(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{449:function(t,a,s){"use strict";s.r(a);var e=s(2),i=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"inodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inodes","aria-hidden":"true"}},[t._v("#")]),t._v(" inodes")]),t._v(" "),s("p",[s("strong",[t._v("[cPanel Only]")])]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" LVE Manager inodes ")]),t._v(" limits extension allows setting "),s("span",{staticClass:"notranslate"},[t._v(" inode ")]),t._v(" limits for the customers. An "),s("span",{staticClass:"notranslate"},[t._v(" inode ")]),t._v(" is a data structure on a file system used to keep information about a file or a folder. The number of "),s("span",{staticClass:"notranslate"},[t._v(" inodes ")]),t._v(" indicates the number of files and folders an account has. "),s("span",{staticClass:"notranslate"},[t._v(" inodes ")]),t._v(" limits work on the level of "),s("span",{staticClass:"notranslate"},[t._v(" disk quota ")]),t._v(" , and will be enabled on "),s("span",{staticClass:"notranslate"},[t._v(" /home ")]),t._v(" partition only.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" LVE Manager ")]),t._v(" allows to set "),s("span",{staticClass:"notranslate"},[t._v(" soft ")]),t._v(" and "),s("span",{staticClass:"notranslate"},[t._v(" hard IO ")]),t._v(" limit.")]),t._v(" "),s("ul",[s("li",[s("p",[s("span",{staticClass:"notranslate"},[t._v(" Hard ")]),t._v(" limit prevents a user from writing data to disk.")])]),t._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[t._v(" Soft ")]),t._v(" limit can be exceeded for a period of time. The grace period can be set using: "),s("span",{staticClass:"notranslate"},[t._v(" edquota -t ")]),t._v(" .")])]),t._v(" "),s("li",[s("p",[t._v("You can set "),s("span",{staticClass:"notranslate"},[t._v(" inodes ")]),t._v(" limits using "),s("span",{staticClass:"notranslate"},[t._v(" LVE Manager ")]),t._v(" , the same way you would set any other LVE Limits:")])])]),t._v(" "),s("p",[t._v("::: tip Note\nWe do not collect statistical information on the inodes like we do for other LVE limits.\n:::")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/inodes_zoom70.png",alt:""}})]),t._v(" "),s("p",[t._v("The limits can be set on the level of individual account or package:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/inodespackages_zoom70.png",alt:""}})]),t._v(" "),s("p",[t._v("Sometimes "),s("span",{staticClass:"notranslate"},[t._v(" disk quota ")]),t._v(" breaks, so do "),s("span",{staticClass:"notranslate"},[t._v(" inodes ")]),t._v(" limits. You can reset them through the "),s("span",{staticClass:"notranslate"},[s("em",[t._v("Options")])]),t._v(" tab of "),s("span",{staticClass:"notranslate"},[t._v(" LVE Manager ")]),t._v(" :")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/inodelimitsoptions_zoom70.png",alt:""}})]),t._v(" "),s("p",[t._v("The same can be achieved using "),s("router-link",{attrs:{to:"/command-line_tools/#cloudlinux-config"}},[t._v("cloudlinux-config")]),t._v(" CLI utility")],1),t._v(" "),s("p",[t._v("End users can monitor their inodes usage through cPanel:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/inodescpanel.png",alt:""}})]),t._v(" "),s("p",[t._v("End user can also see the usage inside resource usage menu.")]),t._v(" "),s("h2",{attrs:{id:"cl-quota"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cl-quota","aria-hidden":"true"}},[t._v("#")]),t._v(" cl-quota")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("cl-quota")])]),t._v(" utility is designed to control "),s("span",{staticClass:"notranslate"},[t._v(" disk quotas ")]),t._v(" and provides:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Setting user and package limits.")])]),t._v(" "),s("li",[s("p",[t._v("Integration with panel packages.")])]),t._v(" "),s("li",[s("p",[t._v("Limits synchronization.")])]),t._v(" "),s("li",[s("p",[t._v("Automatic inheritance of panel limits to all appropriate users.")])])]),t._v(" "),s("p",[t._v("::: tip Note\ncl-quota works only with inodes soft/hard limits (soft/hard file limits in setquota/repquota utilities terminology). Block limits are not controlled by cl-quota utility in any way, they are not taken into account and do not affect the data that they issue. That is why hereinafter it is the inode limits that are implied by the word “limits”.\n:::")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/inodes_limits/#general-provisions"}},[t._v("General Provisions")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/inodes_limits/#setting-limits-and-integration-with-panel-packages"}},[t._v("Setting Limits and Integration with Panel Packages")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/inodes_limits/#limits-inheritance"}},[t._v("Limits Inheritance")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/inodes_limits/#caching-and-synchronizing-the-limits"}},[t._v("Caching and Synchronizing the Limits")])],1),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("router-link",{attrs:{to:"/inodes_limits/#quotas-db-file"}},[t._v("Quotas DB")])],1),t._v(" "),s("router-link",{attrs:{to:"/inodes_limits/#quotas-db-file"}},[t._v(" File")])],1),t._v(" "),s("p",[s("router-link",{attrs:{to:"/inodes_limits/#cli-options-examples"}},[t._v("CLI Options/Examples")])],1),t._v(" "),s("h3",{attrs:{id:"general-provisions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-provisions","aria-hidden":"true"}},[t._v("#")]),t._v(" General Provisions")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" utility never sets/reads limits directly in the system, it uses standard "),s("span",{staticClass:"notranslate"},[t._v(" setquota/repquota ")]),t._v(" utilities included into the "),s("span",{staticClass:"notranslate"},[t._v(" quota ")]),t._v(" package for this purpose.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" "),s("strong",[t._v("will not work")]),t._v(" in the following cases:")]),t._v(" "),s("ul",[s("li",[s("p",[s("span",{staticClass:"notranslate"},[t._v(" setquota/repquota ")]),t._v(" are missing or working incorrectly;")])]),t._v(" "),s("li",[s("p",[t._v("the "),s("span",{staticClass:"notranslate"},[t._v(" quotas ")]),t._v(" are not configured in the system.")])])]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" only "),s("strong",[t._v("performs")]),t._v(" the minimal diagnostics of "),s("span",{staticClass:"notranslate"},[t._v(" quota ")]),t._v(" related errors:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("verifies the availability of "),s("span",{staticClass:"notranslate"},[t._v(" setquota/repquota ")]),t._v(" utilities on the disk;")])]),t._v(" "),s("li",[s("p",[t._v("verifies if "),s("span",{staticClass:"notranslate"},[t._v(" quotas ")]),t._v(" are activated for a specified user (with a separate command), see below.")])])]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" quota ")]),t._v(" package which contains the required "),s("span",{staticClass:"notranslate"},[t._v(" setquota/repquota ")]),t._v(" utilities, is not included in "),s("span",{staticClass:"notranslate"},[t._v(" lvemanager ")]),t._v(" package dependencies by default, and "),s("span",{staticClass:"notranslate"},[t._v(" quotas ")]),t._v(" activation is a long process which sometimes depends on the panel used, therefore, all the steps on "),s("span",{staticClass:"notranslate"},[t._v(" quotas ")]),t._v(" configuration and activation must be carried out by yourself, "),s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" does not perform these actions.")]),t._v(" "),s("p",[t._v("Error messages sent back to the console are extremely rare, to receive error messages use the command:\n")]),s("div",{staticClass:"notranslate"},[s("p"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# cat /var/log/messages | grep clquota\n")])])])]),t._v(" "),s("p",[t._v("::: tip Note\nYou should not set soft limit higher than hard limit. cl-quota does not control it in any way, but in some cases, the system can ban such limits combination and they won’t be set or will be set in some other way.\n:::")]),t._v(" "),s("h3",{attrs:{id:"setting-limits-and-integration-with-panel-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-limits-and-integration-with-panel-packages","aria-hidden":"true"}},[t._v("#")]),t._v(" Setting Limits and Integration with Panel Packages")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" utility allows setting "),s("span",{staticClass:"notranslate"},[t._v(" inodes ")]),t._v(" limits for users of the system.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" integrates with the panels through a standard mechanism - "),s("router-link",{attrs:{to:"/integration_guide/#integrating-lve-limits-with-packages"}},[t._v("Integrating LVE Limits with Packages")]),t._v(" .")],1),t._v(" "),s("p",[t._v("Panel users are such users whose UIDs are issued by the above panel integration mechanism. The list of panel packages and the information on the user's affiliation to a particular package is obtained from there as well.")]),t._v(" "),s("p",[t._v("When installing/reading the limits, the following peculiarities are applied:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("When displaying "),s("span",{staticClass:"notranslate"},[t._v(" quotas, cl-quota ")]),t._v(" displays information about the limits of all users - system and panel. No filter applied. The actual limit values are always displayed.")])]),t._v(" "),s("li",[s("p",[t._v("Limit value -1 for the packages (see below) is displayed as dash (-).")])]),t._v(" "),s("li",[s("p",[t._v("If "),s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" is running under "),s("span",{staticClass:"notranslate"},[t._v(" root ")]),t._v(" , it will display the limits returned by "),s("span",{staticClass:"notranslate"},[t._v(" repquota ")]),t._v(" utility with no changes. If it is running under some other user, it will return data from a special cache file, see "),s("router-link",{attrs:{to:"/inodes_limits/#caching-and-synchronizing-the-limits"}},[t._v("“")]),t._v(" "),s("span",{staticClass:"notranslate"},[s("router-link",{attrs:{to:"/inodes_limits/#caching-and-synchronizing-the-limits"}},[t._v("Quotas")])],1),t._v(" "),s("router-link",{attrs:{to:"/inodes_limits/#caching-and-synchronizing-the-limits"}},[t._v(" cache and synchronization”")]),t._v(" .")],1)]),t._v(" "),s("li",[s("p",[t._v("Limits setting only works for panel users, for all other users limits are not set (the command is ignored). The only exception - "),s("span",{staticClass:"notranslate"},[t._v(" uid=0 ")]),t._v(" . The limits are never set for the "),s("span",{staticClass:"notranslate"},[t._v(" root ")]),t._v(" user "),s("span",{staticClass:"notranslate"},[t._v(" (uid=0) ")]),t._v(" , but they are stored in "),s("span",{staticClass:"notranslate"},[t._v(" DB ")]),t._v(" file and are used by inheritance mechanism. See "),s("router-link",{attrs:{to:"/inodes_limits/#limits-inheritance"}},[t._v('"Limits Inheritance”')]),t._v(" .")],1)]),t._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[t._v(" Hard ")]),t._v(" and "),s("span",{staticClass:"notranslate"},[t._v(" soft ")]),t._v(" limits are completely independent, "),s("span",{staticClass:"notranslate"},[t._v(" сl-quota ")]),t._v(" does not apply any interdependencies to them. Setting only one of them (any) is acceptable, the other one will not change.")])])]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" utility also supports package limits set/read. When setting package limits, they are set for all users of a particular package except for those whose limits are set individually. "),s("em",[t._v("See also")]),t._v(" "),s("router-link",{attrs:{to:"/inodes_limits/#limits-inheritance"}},[t._v("“Limits Inheritance”")]),t._v(" .")],1),t._v(" "),s("p",[t._v("If package name is "),s("span",{staticClass:"notranslate"},[t._v(' "default" ')]),t._v(" , then setting limits command is ignored. If some limits are set for this package in "),s("span",{staticClass:"notranslate"},[t._v(" DB ")]),t._v(" file, they will be displayed along with all the others, but will not be used. "),s("em",[t._v("See also")]),t._v(" "),s("router-link",{attrs:{to:"/inodes_limits/#limits-inheritance"}},[t._v("“Limits inheritance”")]),t._v(" "),s("em",[t._v(".")])],1),t._v(" "),s("p",[t._v("Any positive numbers are allowed as limit values. "),s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" neither controls nor changes these values except the following cases:")]),t._v(" "),s("p",[t._v("negative values are taken modulo;")]),t._v(" "),s("p",[t._v("fractional values are converted to integers by discarding the fractional part;")]),t._v(" "),s("p",[t._v("if the transferred value can not be turned into a number (for example, 67wg76), it is completely ignored and the limit is not set at all.")]),t._v(" "),s("p",[t._v("Then these values are transmitted directly to "),s("span",{staticClass:"notranslate"},[t._v(" setquota ")]),t._v(" system utility for the actual setting of the limits.")]),t._v(" "),s("p",[t._v("Thus "),s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" has two limit values, which are processed in a special way:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("0: Means inheritance of the limit from the package where the user is located, or from "),s("span",{staticClass:"notranslate"},[t._v(" uid=0 ")]),t._v(" . See also "),s("router-link",{attrs:{to:"/inodes_limits/#limits-inheritance"}},[t._v("“Limits inheritance”")]),t._v(" for more detailed information.")],1)]),t._v(" "),s("li",[s("p",[t._v('-1: The real limits are set to 0, which means no limits, literally "unlimited". This is legit both for individual and for package limits. Limit value -1 is stored in the database as well as any other but is never displayed.')])])]),t._v(" "),s("p",[t._v("You can use the words "),s("span",{staticClass:"notranslate"},[t._v(" “default” ")]),t._v(" and "),s("span",{staticClass:"notranslate"},[t._v(" “unlimited” ")]),t._v(" instead of 0 and -1 respectively, they are fully interchangeable. See also "),s("router-link",{attrs:{to:"/inodes_limits/#quotas-db-file"}},[t._v("“DB File”")]),t._v(" and "),s("router-link",{attrs:{to:"/inodes_limits/#cli-options-examples"}},[t._v("“CLI Options”")]),t._v(" .")],1),t._v(" "),s("p",[t._v("Individual and package limits are always saved in DB file. Limits from there are used when synchronizing "),s("span",{staticClass:"notranslate"},[t._v(" quotas ")]),t._v(" . Please find more details in "),s("router-link",{attrs:{to:"/inodes_limits/#caching-and-synchronizing-the-limits"}},[t._v("“Limits Synchronization”")]),t._v(" .")],1),t._v(" "),s("p",[t._v("Also, find detailed information on DB file itself in "),s("router-link",{attrs:{to:"/inodes_limits/#quotas-db-file"}},[t._v("“")]),t._v(" "),s("span",{staticClass:"notranslate"},[s("router-link",{attrs:{to:"/inodes_limits/#quotas-db-file"}},[t._v("Quotas")])],1),t._v(" "),s("router-link",{attrs:{to:"/inodes_limits/#quotas-db-file"}},[t._v(" DB File”")]),t._v(" section.")],1),t._v(" "),s("p",[t._v("Utility options are described in "),s("router-link",{attrs:{to:"/inodes_limits/#cli-options-examples"}},[t._v("“CLI Options”")]),t._v(" section.")],1),t._v(" "),s("h3",{attrs:{id:"limits-inheritance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limits-inheritance","aria-hidden":"true"}},[t._v("#")]),t._v(" Limits Inheritance")]),t._v(" "),s("p",[t._v("When setting package limits to the package users, the inheritance principle is applied. It means that:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If no individual limit is set to a user, then he inherits the limits of the package he belongs to.")])]),t._v(" "),s("li",[s("p",[t._v("If no limit is set to a package (=0), then the users inherit uid=0 limits.")])])]),t._v(" "),s("p",[t._v("Limits of the package named "),s("span",{staticClass:"notranslate"},[t._v(" “default” ")]),t._v(" (if found in the "),s("span",{staticClass:"notranslate"},[t._v(" DB ")]),t._v(" file) will always be ignored and all the users of this package will get "),s("span",{staticClass:"notranslate"},[t._v(" uid=0 ")]),t._v(" limits.")]),t._v(" "),s("h3",{attrs:{id:"caching-and-synchronizing-the-limits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caching-and-synchronizing-the-limits","aria-hidden":"true"}},[t._v("#")]),t._v(" Caching and Synchronizing the Limits")]),t._v(" "),s("p",[t._v("Any user of the system (including panel users) is always created with limits equal to 0. To assign him the limits of the corresponding package, the synchronization process is used.")]),t._v(" "),s("p",[t._v("During the synchronization, "),s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" utility reads the database file and sets the limits from it to the users and packages specified therein.\nThis mode is designed to set the correct limits for the new users and to restore them for the existing ones. When recovering, the current limits are neither read nor analyzed.")]),t._v(" "),s("p",[t._v("Caching - is writing current limits to "),s("span",{staticClass:"notranslate"},[s("em",[t._v("/etc/container/cl-quotas.cache")])]),t._v(" file. If "),s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" is not started from the "),s("span",{staticClass:"notranslate"},[t._v(" root ")]),t._v(" for reading the current limits, then it returns data from this file.")]),t._v(" "),s("p",[t._v("When installing "),s("span",{staticClass:"notranslate"},[t._v(" LVE Manager ")]),t._v(" package, a special "),s("span",{staticClass:"notranslate"},[t._v(" cron job ")]),t._v(" is installed, which performs synchronization and caching ( "),s("span",{staticClass:"notranslate"},[t._v(" cl-quota -YC ")]),t._v(" ) every 5 minutes. Therefore, the correct limits will be set for the user within 5 minutes from the moment of its creation.")]),t._v(" "),s("p",[t._v("Caching and synchronization can also be performed separately, see "),s("router-link",{attrs:{to:"/inodes_limits/#cli-options-examples"}},[t._v('"CLI Options"')]),t._v(" section.")],1),t._v(" "),s("p",[t._v("To disable this feature add to the config file "),s("em",[t._v("/etc/sysconfig/cloudlinux")]),t._v(" .")]),t._v(" "),s("h3",{attrs:{id:"quotas-db-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quotas-db-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Quotas DB File")]),t._v(" "),s("p",[t._v("All "),s("span",{staticClass:"notranslate"},[t._v(" cl-quota ")]),t._v(" limits settings are stored in along with the "),s("span",{staticClass:"notranslate"},[t._v(" UID ")]),t._v(" or the name of the package the limit was set for.")]),t._v(" "),s("p",[t._v("When saving the limits to a file, the following rules are applied:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If a limit value is non-integer or non-numeric, then the rules from "),s("span",{staticClass:"notranslate"},[t._v(' "Setting limits and integrating with panel packages" ')]),t._v(" section are applied. The assigned value is saved to the file.")])]),t._v(" "),s("li",[s("p",[t._v("Limits are always saved in pairs, no matter if only one limit was set or both. The pair looks as follows: "),s("span",{staticClass:"notranslate"},[t._v(" soft_limit:hard_limit ")]),t._v(" .")])]),t._v(" "),s("li",[s("p",[t._v("The values 0 and -1, when having a predetermined meaning, are saved as is without any transformations.")])]),t._v(" "),s("li",[s("p",[t._v("The words "),s("span",{staticClass:"notranslate"},[t._v(" “default” ")]),t._v(" and "),s("span",{staticClass:"notranslate"},[t._v(" “unlimited” ")]),t._v(" are saved as 0 and -1 respectively.")])]),t._v(" "),s("li",[s("p",[t._v("If both limits for a user/package were set as 0, then such user/package is not saved in the file, and if it was previously there - it will be removed. Therefore, if a user/package is not mentioned in the file, then all its limits are inherited. See "),s("router-link",{attrs:{to:"/inodes_limits/#limits-inheritance"}},[t._v('"Limits Inheritance"')]),t._v(" section.")],1)])]),t._v(" "),s("p",[t._v("The lists of panel users, packages, and user-package correspondence are not saved anywhere, this information is always subtracted from the panel.")]),t._v(" "),s("p",[t._v("Example:\n")]),s("div",{staticClass:"notranslate"},[s("p"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/etc/container/cl-quotas.dat\n[users]\n0 = 1000:2000\n500 = -1:-1\n958 = 0:20000\n[packages]\npack1 = 5000:-1\n")])])])]),t._v("\nIt follows that:\n"),s("ul",[s("li",[s("p",[t._v("uid=0 limits are set to 1000:2000 - all users in the default package will obtain these limits.")])]),t._v(" "),s("li",[s("p",[t._v("Both limits are set as unlimited for a user with uid=500, which means that its real limits will always be 0:0. The package limits do not affect this user.")])]),t._v(" "),s("li",[s("p",[s("span",{staticClass:"notranslate"},[t._v(" Soft ")]),t._v(" limit of the user with uid=958 is inherited (0 means inheritance), his "),s("span",{staticClass:"notranslate"},[t._v(" hard ")]),t._v(" limit is set to 20000 and it will not depend on the package limits or uid=0 limits.")])]),t._v(" "),s("li",[s("p",[t._v("Limits 5000:-1 are set for pack1 package, therefore its real limits are: "),s("span",{staticClass:"notranslate"},[t._v(" soft_limit=5000 ")]),t._v(" and "),s("span",{staticClass:"notranslate"},[t._v(" hard_limit=0 ")]),t._v(" (unlimited).")])]),t._v(" "),s("li",[s("p",[t._v("The users of "),s("span",{staticClass:"notranslate"},[t._v(" pack1 ")]),t._v(" package will get "),s("span",{staticClass:"notranslate"},[t._v(" pack1 ")]),t._v(" limits (5000:-1), the users of all the rest of the packages will get the limits of uid=0 because no limits are set for them. Exceptions: uid=500 and 958. uid=500 has both limits set individually, and uid=958 inherits only "),s("span",{staticClass:"notranslate"},[t._v(" soft ")]),t._v(" limits.")])])]),t._v(" "),s("h3",{attrs:{id:"cli-options-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-options-examples","aria-hidden":"true"}},[t._v("#")]),t._v(" CLI Options/Examples")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[t._v(" cl-quotа ")]),t._v(" utility has the following command line options:\n")]),s("div",{staticClass:"notranslate"},[s("p"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-u | --user                  : specifies the user\n-U | --user-id              : specifies the user ID\n-S | --soft-limit            : sets the soft limit for a user. Pass 0 or 'default' to set package default limit. Pass -1 or 'unlimited' to cancel limit\n-H | --hard-limit            : sets the hard limit for a user. Pass 0 or 'default' to set package default limit. Pass -1 or 'unlimited' to cancel limit\n-V | --csv                  : returns data as comma separated values\n-p | --package              : specifies a package to set or get limits\n-P | --package-limits        : prints package limits\n-a | --all-package-limits : prints all package limits (including packages without limits)\n-Y | --sync                  : synchronizes packages and users limits with the database\n-C | --cache-content        : cache quota data to a file the database\n-F | --force                : save user quotas even when they are equal to defaults\n       --check                : check if quotas is enabled/activated/suported; if disabled show diagnostic information; using with --user or --user-id options\n")])])])]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--user")])]),t._v(" and "),s("span",{staticClass:"notranslate"},[s("strong",[t._v("--user-id")])]),t._v(" options are designed to specify user whose limits are required to be set or displayed. "),s("span",{staticClass:"notranslate"},[t._v(" --user ")]),t._v(" specifies user name, "),s("span",{staticClass:"notranslate"},[t._v(" --user-id - uid ")]),t._v(" . It is acceptable to specify one or another.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--package")])]),t._v(" - specifies package name.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--soft-limit")]),t._v(" ,  "),s("strong",[t._v("--hard-limit")])]),t._v(" - specify "),s("span",{staticClass:"notranslate"},[t._v(" soft ")]),t._v(" and "),s("span",{staticClass:"notranslate"},[t._v(" hard ")]),t._v(" limits values respectively. It is acceptable to use words "),s("span",{staticClass:"notranslate"},[t._v(" “default” ")]),t._v(" or "),s("span",{staticClass:"notranslate"},[t._v(" “unlimited” ")]),t._v(" as limit value.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--csv")])]),t._v(" - displays limits in "),s("span",{staticClass:"notranslate"},[t._v(" csv ")]),t._v(" format (instead of data formatted in the table).")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--package-limits")])]),t._v(" - displaying the limits of the packages created by the panel admin.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--all-package-limits")])]),t._v(" - displaying the limits of all the packages, including the ones created by the resellers and packages with no users.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--sync")])]),t._v(" - synchronizes users "),s("span",{staticClass:"notranslate"},[t._v(" quotas ")]),t._v(" and packages with the database.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--cache-contents")])]),t._v(" - performs "),s("span",{staticClass:"notranslate"},[t._v(" quotas ")]),t._v(" caching.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--force")])]),t._v(" - saving user "),s("span",{staticClass:"notranslate"},[t._v(" quotas ")]),t._v(" even if they are equal to the current.")]),t._v(" "),s("p",[s("span",{staticClass:"notranslate"},[s("strong",[t._v("--check")])]),t._v(" - performs diagnostics for a specified user. Can be used only when a user is specified (along with "),s("span",{staticClass:"notranslate"},[t._v(" --user / --user-id ")]),t._v(" ).")]),t._v(" "),s("p",[s("em",[t._v("Examples:")])]),t._v(" "),s("ol",[s("li",[t._v("Reading current user limits:")])]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# cl-quota\n# cl-quota --csv\n")])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Reading current package limits:")])]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# cl-quota --package-limits\n# cl-quota --all-package-limits\n# cl-quota --package-limits --csv\n# cl-quota --all-package-limits --csv\n")])])])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Specifying limits for a user:")])]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# cl-quota --user-id=500 --soft-limit=0 --hard-limit=0\n# cl-quota --user-id=500 --soft-limit=unlimited\n# cl-quota --user-id=500 --soft-limit=0 --hard-limit=-1\n# cl-quota --user-id=958 --hard-limit=20000 --soft-limit=0 --force\n")])])])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Specifying limits for a package:")])]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# cl-quota --package pack1 --hard-limit=-1 --soft-limit=5000\n# cl-quota --package pack1 --hard-limit=10000\n# cl-quota --package pack1 --soft-limit=default\n")])])])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("User diagnostics (with example output):")])]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# cl-quota --user-id=500 --check\nQuota disabled for user id 500 (home directory /home/cltest1); quotaon: Mountpoint (or device) / not found or has no quota enabled.\n")])])])]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("Synchronizing "),s("span",{staticClass:"notranslate"},[t._v(" quotas with caching (executed in cron): ")])])]),t._v(" "),s("div",{staticClass:"notranslate"},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# cl-quota -YC\n")])])])])])},[],!1,null,null,null);a.default=i.exports}}]);
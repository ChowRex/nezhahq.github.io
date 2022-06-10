import{_ as e,c as t,o,a}from"./app.b8b795d4.js";const g='{"title":"How to use","description":"","frontmatter":{},"headers":[{"level":2,"title":"How to use","slug":"how-to-use"},{"level":2,"title":"Manage tasks","slug":"manage-tasks"},{"level":2,"title":"FAQ","slug":"faq"}],"relativePath":"en_US/guide/tasks.md"}',i={},s=a('<p><strong>In the task area, you can set up scheduled tasks, periodic tasks, and multi-server batch execution tasks</strong></p><p>Nezha monitoring supports pushing commands to the Agent for execution, so this feature is very flexible and can be used to periodically back up the server in conjunction with restic, rclone, or periodically restart a service to reset the network connection.</p><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a></h2><p>Go to the &quot;Tasks&quot; page of the admin panel and click &quot;Add Scheduled Task&quot;<br> To add a scheduled task you need to make the following settings:</p><ul><li><p><code>Name</code> - Customize a task name</p></li><li><p><code>Cron Expression</code> - Set schedule time, the Cron Expression is like:\uFF1A <code>* * * * * *</code> <code>sec min hour day month week</code>, see details in <a href="https://pkg.go.dev/github.com/robfig/cron/v3#hdr-CRON_Expression_Format" target="_blank" rel="noopener noreferrer">CRON Expression Format</a><br> For example: <code>0 0 3 * * *</code> is <code>Every day at 3 o&#39;clock</code></p></li><li><p><code>Command</code> - Just like writing shell/bat scripts, <strong>but line wrap is not recommended</strong>, <strong>Multiple Commands should be connected with <code>&amp;&amp;/&amp;</code></strong><br> For example, to execute a periodic reboot command, you can type <code>reboot</code> here</p></li><li><p><code>Coverage</code> and <code>Specific Servers</code> - Similar to the settings on the Services page, select rules to determine which Agents need to execute scheduled tasks</p></li><li><p><code>Notification Group</code> - Select the notification method you have set up on the &quot;Notification&quot; page. <a href="/en_US/guide/notifications.html#flexible-notification-methods">Click here</a> for more information</p></li><li><p><code>Send Success Notification</code> - When this item is activated, a message notification will be triggered when the task is successfully executed<br><br></p></li></ul><h2 id="manage-tasks" tabindex="-1">Manage tasks <a class="header-anchor" href="#manage-tasks" aria-hidden="true">#</a></h2><p>To manage existing scheduled tasks, you can go to the &quot;Tasks&quot; page in the administration panel<br> Select a task configuration and the three icons on the right, which are:</p><ul><li><code>Execute Now</code> - When clicked, the scheduled time will be ignored and the task will be executed immediately</li><li><code>Edit</code> - Click to modify the task configuration</li><li><code>Delete</code> - Delete this scheduled task<br><br></li></ul><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h2><ol><li>Command not found<br> Command not found may cause by missing PATH environment variable, for Linux Server, you may try adding <code>source ~/.bashrc</code> at beginning of your command or execute by absolute path.</li></ol>',10),n=[s];function c(r,d,l,h,u,p){return o(),t("div",null,n)}var f=e(i,[["render",c]]);export{g as __pageData,f as default};

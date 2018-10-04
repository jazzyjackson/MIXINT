# MIXINT
## Mixable Interface: Transparent Timeshares for Trusted Parties

MIXINT is a free (as in freedom) server and web application allowing owners, groups, and the world to publish and subscribe to each other's file directories. Calendar events, chat messages, RSS subscriptions, and documents are organized in plain text formats on a shared file system controlled by you (or your friendly neighborhood sysdamin). JSON and markdown files can be presented by custom elements or linked to directly. The stylesheets and source code to any component of the workspace is only a few clicks away, so MIXINT can be customized and extended on-the-fly.

Features:
- [Internet Connection Optional](#ico)
- [No Assembly Required](#nar)
- [Rearrangeable Message Threads](#rmt)
- [Working with Owners, Groups, and the World](#ogw)
- [Configurable Fingers and Footprints](#cff)
- [Shallow Technology Stack](#sts)
- [All You See is a Mirror](#asm)

## <a name="ico"></a>
## Internet Connection Optional
Collaborative editing tools are great, until you're collaborating on a farm with flakey internet. (I'll have to blog about my Open Source Ecology experience.) MIXINT gives chatrooms and shared folders to teams sitting around the same table with zero configuration. You can start MIXINT on one machine and give your neighbors an address to sign on.

Since calendars, chatrooms, and documents are just files in directories, you can use git or rsync to work offline. Keep a globally accessible cloud server online for $5/month, and back your work up when you have a good connection. Otherwise, anyone on the same local network can still collaborate in whatever directories you store on your own machine.

## <a name="nar"></a>
## No Assembly Required
MIXINT is unique in providing a framwork for building custom applications while being useful out-of-the-box. In addition, tools for editing the source code of the server, creating new API endpoints, and customizing the stylesheets of all components are provided. Components bundled with v0:

- chatroom
- calendar
- RSS feed manager for news, podcasts, and other subscriptions
- Code / Markdown editor with live preview
- http agent for testing API endpoints & constructing HTTP requests a la curl
- library (a.k.a. file explorer)
- media player
- crontab editor for process scheduling
- identity and group editor for access control
- file access + cpu usage logs & analytics view

## <a name="rmt"></a>
## Rearrangeable Message Threads

Chatrooms in MIXINT are unlike any other platform. Every message is a plain text file on disk ([YAM format](/jazzyjackson/YAM)), owned by the identity that PUTS it there. You can consider any directory on the filesystem to be a 'context' and start a conversation by creating a file containing your message. A chat interface is provided by a customizable web component: every participant may apply their own stylesheet, and functionality can be added by editing the source code in-browser. File attachments can be dropped into the chat interface and they will be uploaded in whatever directory the conversation is taking place. Any of these individual files can have its read/write permissions modified by whoever PUT the message, so that authors can determine whether their message can shared publicly (offsite) or if the message is limited to members of a group, or even locked down so only the author can view its contents. (Read [Working with Owners, Groups, and the World](#ogw) for more on this.)

Keeping every message as a normal file has novel side effects. By default, if you have permission to write files to a directory, you also have permission to delete files. If you've ever been in a twitter thread and seen someone say "Delete this" - that's now within your rights as a participant of a conversation. In the same manner, you're within your rights to overwrite a file with your own comment (tho you will appear as the author.)

Another option provided by unix filesystems is to set the "sticky bit" on the directory, which prevents files from being modified by anyone except the owner or an administrator. This will give you a less surprising permissions system where you can edit and delete your own messages but no one else's.

Any context can contain any number of relevant attachments and sub-contexts (aka subthreads, or simply threads). The interface may be altered to adapt to a more single-thread chatroom style or a fully threaded forum, where divergences can be stepped into as a separate live chatroom.

Aside from moving entire contexts around after the fact, to manually organize discussions after the fact, any directory can be symlinked to multiple other directories, so if some discussion is relevant in multiple contexts, it can be accessed via multiple routes: replies from one context will be seen in others.

## <a name="ogw"></a>
## Working with Owners, Groups, and the World

Another unique quality of keeping conversations organized in a traditional folder/context heirarchy is that private sidechain conversations can be kept within the larger context: people who can read messages in one folder can see that subfolders exist, but may be denied read permissions if they are not included in the group that owns that subfolder.

...

## <a name="cff"></a>
## Configurable Fingers + Footprints
Having detailed access logs is important for managing a server: it allows you to check what files are being accessed by whom, and it allows you to monitor usage and load over time to hint at whether your server has enough power to serve your team's needs.

However, the owner of a service having more information than clients of a service can lead to distrust: how can I know my picture is really deleted? How do I know if the service provider is tracking my IP address? By default, MIXINT allows everyone in the community to see this information so they can trust that they understand what their system is recording.

Every read/write/execute/delete request is recorded as a timeseries such that any interested parties (in an appropriately permissioned group) can observe server-wide activity (check out what contexts are being used by your friends or coworkers for instance) or easily request the past day/week/month of logs for analytics purposes.

## <a name="sts"></a>
## Shallow Technology Stack
MIXINT wants to be understood. Not only is there a focus on front end code being auditable (harkening back to web 1.0 days where a quick 'view source' would tell you everything you needed to know, you can click + modify:style/class/template to read the source), everything that happens has a visible effect on the back end machine: a file is created, a program returns its output, or a file watch is executed - and very little  happens in between. Because the server allows arbitrary bash commands, you can find out exactly what program is running to return a response - then fire off a GET request to read the source code of that program.

For example, the chatroom is not running any particular protocol or built on top of a database. You choose a chatroom component and point its 'src' attribute to some file path (a.k.a. a directory, or my preference, a 'context').

## <a name="asm"></a>
## All You See is a Mirror
MIXINT has an archive-first policy. Articles and media fetched from RSS feeds are stored on disk, and sharing links to images and video creates a mirror for offline viewing that will remain even if the

As feeds can be followed across domains, a server only has to serve its community and the other servers that follow your server - files are mirrored across the machines that serve each community, so that no one server has to handle the traffic from the whole world.

Different servers can have different access rules. Maybe an artist doesn't want comments made on their server, but fan pages can have privately moderated discussions on the public video.

------

Move away from data farming

toward an information permaculture

------

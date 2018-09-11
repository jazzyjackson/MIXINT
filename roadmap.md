## Current Version: 0.1.0

## <a href="0.1.0"></a>
## 0.1.0

0.1.0 brings together a few examples of Transflect streams to provide a basic level of functionality and a pattern to build off of. `node mixint` will launch a server that allows reading, writing, executing, and deleting files as an API endpoint. Read and Write functions return informative headers on ContentType, ContentLength, Permissions, Ownership, and Created/Modified/Access timestamps.

New dependencies include:
- ParsedMessage
- ServerFailSoft
- Transflect
- PathRead
- PathWrite
- PathFork
- PathUnlink

## <a href="0.2.0"></a>
## 0.2.0

0.2.0 adds the ability to read and write partial contents, respecting 'bytes=' headers, as well as a feature to set inotify watches on files and directories in order to stream updates over a persistent connection (with a keepalive heartbeat). This improves support for streaming video and downloaded new bytes off large log files (to emulate [tail --follow](http://man7.org/linux/man-pages/man1/tail.1.html), requesting new bytes when notified of file change). It also lays the groundwork for live updates to chat and filesharing interfaces in future versions.

New dependencies include:
- ContextFeed
- WriteRange
- BytePipette

## <a href="0.3.0"></a>
## 0.3.0

0.3.0 will be the first version to include a method of writing a GUI to the client's browser. I'll have to decide what example interfaces to load here, but a file library and media player are top priorities. Drag and drop files to your server, get a link to share it either direct or through the current interface.

New dependencies include:
- FigjamFeed
- MultiplexUI
- LiveLibrary
- MixedMedia

## <a href="0.4.0"></a>
## 0.4.0

0.4.0 brings self-editing functionality and the use-case of prototyping programs in any language for remote execution. Every component can open an editor to inspect, customize, or extend the source code. CodeMirror will include its own vim-key bindings and all the syntax themes. A CodeMirror will be able to watch the source for updates to be notified if file changes on disk before overwriting. Being able to take advantage of git diffs and merge operations is a long way away, but plausible.

TeleFork will open a ContextFeed on the output of an executable so you can watch results live and immediately move program output into other contexts. Error output and info on the executable (git hash, sha hash) are included in the output files: stdin.txt, stdout.txt, stderr.txt, exit.txt, fork.json, and if the executable doesn't launch at all: error.json. This allows you to immediately grab the PID of a launched process and share the output with others before the program exits.

Alternately, a terminal-emulator-like-interface is provided to interact with programs in a more traditional style.

- CodeMirror
- TeleFork
- TeleForkForm
- ShellPlex

## <a href="0.5.0"></a>
## 0.5.0

Halfway there! 0.5.0 serves as a blog platform with media sharing and chat. Includes a new chmod interface for intuitive permissioning.

- ProseMirror
- LibraryTree
- ConvoPlex
- YamParsnip

## <a href="0.6.0"></a>
## 0.6.0

0.6.0 is a visual upgrade: YAM documents can now include metadata configuring an animated background composed of emoji unicode. Ranges of characters and randomness/replacement speed can be edited to create a visual context for documents big and small.

- EmoLottery

## <a href="0.7.0"></a>
## 0.7.0

With the basic functionality established, 0.7.0 turns toward the sysadmin side of things, adding an API for creating identities and adding them to groups.


- Keymaker
- Operator
- Bookkeeper

## <a href="0.8.0"></a>
## 0.8.0

Implements some fancy footwork for allowing anyone in a group to execute a program they don't have the permission to change or even look at. Allows for programs to run with elevated permissions required to write results in certain system directories (or connect to certain databases) that the client does not have permission to use arbitrarily.

Also introduces an innovative mail client, which lets you send and receive messages (with arbitrary attachments) as a group or an individual. Messages can refer to points in other conversations, such that 'private messages' can be addressed from within a chatroom.


- setguidAPI
- courier

## <a href="0.9.0"></a>
## 0.9.0

0.9.0 introduces a GUI for managing identities and groups, and a GUI for viewing server activity in real time and rendering analytics on over the past week, month, etc.

Any identity on the server added to the 'keymaker' group will be able to use this interface to create new identities for themselves or to invite new people to the server.

The interface for seeing who has read a certain file will also capture the context it was read within, so you can see what conversation/context is hitting each file the most, and you can make sure that your file has only been accessed by people you expected to access it.

- GUI-Keymaker
- GUI-Bookkeeper

------
## <a href="1.0.0"></a>
## 1.0.0: Turnkey

Release 1.0.0 will provide a turnkey timeshare system ready to spin up on a Raspberry Pi or other local machine or as easily on a fresh cloud server. The major upgrade here is including a complete Makefile, probably a Dockerfile since that's all the rage, and more importantly good notes on how to deploy your SSL certificates, made as automatic as robotically possible.

## <a href="1.1.0"></a>
## 1.1.0

Planned interface upgrades for more configurable workspaces:
- FibonacciPlex
- Tableplex

## <a href="1.5.0"></a>
## 1.5.0

I would really like to extend a lot of components to add voice control. Making the interface useful handsfree (or sight-free) will be a huge boon and a place of much creativity.


------
## <a href="2.0.0"></a>
## 2.0.0: Block and Tackle

2.0.0 will see the introduction of my idea of a data flow program editor. I have a dream of rendering any program, whether it's a bash built-in, a python script you're prototyping, or an API you've paid to access, as nodes (the block) on a graph (that's the tackle.) Building sophisticated programs from simple parts, with each program able to report its status, memory usage, response time, etc.

Inspiration will be taken from Pure Data, RhinoCAD's Grasshoppe, and the Antimony project ("tool from a parallel universe in which CAD software evolved from Lisp machines rather than drafting tables"). Data can be read from spreadsheets, network ports, or even an Arduino serial port into various transforms, filters, and logic gates.

Once you've created a 'block and tackle' dataflow, you can mount the whole thing as an API endpoint giving others access to run their own data through the machine (whether you charge a fee for this access is up to you, and somewhere between v2 and v3 I plan to add payment functionality.)

## <a href="3.0.0"></a>
## 3.0.0: Gumball Machine

The Gumball Machine is the ultimate server configuration and deployment tool. It provides an interface for pointing domain names at IP addresses (internal or external) and a configuration file for booting an application -- the kicker is that you can unmount the application and export the entire state of the server (user files, customizations, etc) as a gzipped tarball (which I'm renaming gumball) ready to be uncomressed and rebooted on a Gumball machine hosted by a different provider, whether that's in the cloud, or down the street.

This will allow sysadmins and vhosts the world over to compete in a marketplace of web applications where the cost of changing ownership approaches 0. If you're unhappy with management, you can take your gumball and go play somewhere else. If a Big 3 cloud provider deletes your account and doesn't answer the phone, you can buy your own machine and pick up where you left off.

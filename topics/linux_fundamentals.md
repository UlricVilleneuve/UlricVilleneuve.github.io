---
layout: topics
page-title: Linux fundamentals
---
To build this site, run this command from the root of the project:
{% include copy-code-blocks.html text='>>' language='bash' code='bundle exec jekyll serve' %}

Then browse to [http://localhost:4000](http://localhost:4000)

---

## Some commands 

| cmd  | description             | example            |
|------|-------------------------|--------------------|
| ls   | listing                 | `ls -al`             |
| cd   | change directory        | `cd dir/subdir`      |
| cat  | concatenate             | `cat foo.txt`        |
| pwd  | print working directory | `pwd`                |
| find | find                    | `find -name *.txt`   |
| grep | g/re/p                  | `grep word file.txt` |
| touch | create a new file      | `touch file.txt`     |
| mkdir | create a new directory | `mkdir directory`    |
| cp    | Copy a file or folder  | `cp foo.txt bar/foo.txt` |
| mv    | Move a file or folder  | `mv foo.txt bar/foo.txt` |
| rm	| Remove a file or folder | `rm file.txt`           |
| file  | Determine the type of a file | `file file.txt` |
| man   | manual                 | `man command`        |
| su    | switch user            | `su user2`           |
| chmod | change permissions     | `chmod xyz file.txt` |

and some operators 

| oper         | description                                                   | example            |
|--------------|---------------------------------------------------------------|--------------------|
| &            | run command in background                                     | `cmd &` OR `cmd1 & cmd2` |
| &&           | run 2nd command only if 1st exited successfully               | `cmd1 && cmd2` |
| &#124;&#124; |run 2nd command only if 1st exited unsuccessfully              | `cmd1 || cmd2` |
| ;            | like & but do 2nd cmd no matter the outcome of 1st            | `cmd1 ; cmd2` |
| !            | Negate the return status of a command                         | `!cmd` |
| &#124;       | Pipe operator. Pass the output of 1st cmd as input to 2nd cmd | `cmd1 | cmd2` |
| &#124;&      | Pipe, but passes standard output and std error (bash and zsh) | `cmd1 |& cmd2` |
| &lt;         | Execute command on the content of smth                        | `cmd < input.txt` |
| &lt;&gt;     | Same as above, but file is open in read+write                 | `cmd <> file.txt` |
| &gt;         | redirect standard output                                      | `cmd > out.txt` |
| 2&gt;        | redirect standard output                                      | `cmd 2> out.txt` |
| &gt;&#124;   | redirect output, will overwrite target, even if shell config to refuse it | `cmd >| out.txt` |
| &gt;&gt;     | append redirected output                                      | `cmd >> out.txt` |
| &lt;&lt;     |for multi line inputs                                          | ... |

---

## Permissions

When using `ls -al`, you'll get something like this: 
```
tryhackme@linux2:~$ ls -lh
-rw-r--r-- 1 cmnatic cmnatic 0 Feb 19 10:37 file1
-rw-r--r-- 8 cmnatic cmnatic 0 Feb 19 10:37 file2
```

The permissions information is in the first column. 

The first character indicates if the listed element is a file or a directory. 

The following triplets of characters indicate if the owner (first triplet), or the owner-group (2nd triplet), or anyone (3rd triplet) can Read, Write or Execute the file/directory.

The owner is in the 3rd column, the owner-group is in the 4th column.
### Changing permissions

You can change the permissions of a file/directory with the `chmod` command:

```
> chmod 666 file.txt
``` 

The first argument is the permission. It is composed of 3 digits. See [this page](https://www.guru99.com/file-permissions.html) for digits to permission. There's 1 digit for owner, group, others. 

The second argument is the file/directory affected. 

In this case, the file `file.txt` will have its permissions set to `read + write` for the owner, the owner-group and everyone else. 

---

## Common directories

| Directory | Description |
| `/etc`      | Stores system files that are used by your operating system. |
| `/var`      | Stores data that is frequently accessed or written by services or applications running on the system. |
| `/var/log`  | Stores logs. |
| `/root`     | Home for the "root" system user. |
| `/tmp`      | Stores data that is only needed to be accessed once or twice. Cleared on restart. |

---

## Files of interest

| File           | Description |
| `/etc/sudoers` | Contains a list of the users and groups that have permission to run sudo, or a set of cmds as the root user |
| `/etc/passwd`  | Contains users, with their id, groups, associated shell path |
| `/etc/shadow`  | Contains the users password, goes in pair with `/etc/passwd` |

---

## Transfering files

To transfer files over SSH, we can use the `scp` (Secure Copy!) command. To send a file to a remote server, it looks like this:

```
scp sent_file.txt user@ip_address_of_remote:/path/to/received_file.txt
```

Note: don't forget the ':' after the ip address!! 

We can also use `scp` to receive a file from a remote server. To do that, swap the 2 arguments from the previous command. 

### Serving file from your host

First, you turn the machine (by default only the current directory, I think) into a web server with:

```
python3 -m http.server
```

Then, you can download the file using `wget` or `curl`. For example with:

```
wget http://127.0.0.1:8000/file
```

Note: `8000` is the port number. I think this is the default, but in any case, HTTPServer will tell you what it is. 

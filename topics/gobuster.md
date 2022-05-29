---
layout: topics
page-title: Directory scanning with gobuster
---

{% include copy-code-blocks.html text='Lists available links: ' language='bash' code='gobuster dir -u http://10.10.9.121:80 -w /usr/share/wordlists/dirb/big.txt' %}

{% include copy-code-blocks.html text='to specify extensions: ' language='bash' code='-x php' %}

---
layout: topics
page-title: Recon with nmap
---

{% include copy-code-blocks.html text='Port scan only: ' language='bash' code='nmap -Pn <ip>' %}
{% include copy-code-blocks.html text='-F for fast: ' language='bash' code='nmap -F <ip>' %}
{% include copy-code-blocks.html text='service version: ' language='bash' code='nmap -sV <ip>' %}
{% include copy-code-blocks.html text='Enables OS detection, version detection, script scanning, and traceroute: ' language='bash' code='nmap 192.168.1.1 -A' %}
{% include copy-code-blocks.html text='Fast (can use T0-slow to T5-fast): ' language='bash' code='-T5' %}

---
layout: topics
page-title: WFUZZ
example: wfuzz -c -z file,mywordlist.txt -d “username=FUZZ&password=FUZZ” -u http://shibes.thm/login.php
---

{% include copy-code-blocks.html text='Try all combinations, replacing FUZZ with content from wordlist: ' language='bash' code=page.example %}
[//]: # (Add an example for when you want to use multiple wordlists -> zip, chain, product (see https://wfuzz.readthedocs.io/en/latest/user/advanced.html))

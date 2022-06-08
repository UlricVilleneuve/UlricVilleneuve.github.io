---
layout: topics
page-title: Python
spawn-shell-code: python -c 'import pty; pty.spawn("/bin/sh")'
spawn-web-server: python3 -m http.server 8080
GET-request: r = requests.get('https://api.github.com/events')
---

{% include copy-code-blocks.html text='Spawn a shell: ' language='bash' code=page.spawn-shell-code %}
{% include copy-code-blocks.html text='Run web server: ' language='bash' code=page.spawn-web-server %}
{% include copy-code-blocks.html text='GET request (r.text for response text): ' language='bash' code=page.GET-request %}

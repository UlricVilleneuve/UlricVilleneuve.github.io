---
layout: topics
page-title: Samba
connect: smbclient //$VULNERABLE_IP/share_name
---

{% include copy-code-blocks.html text='Connect to SMB share (samba is a smb server in unix): ' language='bash' code=page.connect %}
"-U Anonymous" and No password works if no authentication is set
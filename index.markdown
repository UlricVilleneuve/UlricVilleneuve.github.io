---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default-w-nav
page-title: CyberSecurity Notes
---
### Filter <input type="text" id="search_text" onkeyup="search()" placeholder="Search for topics.." title="Search"/>

## Topics
{% for topic in site.data.topics.topics %}
* [{{ topic.title }}]({{ topic.url }})
{% endfor %}{: .topic_list}

<script>
function search() {
    var input, filter, li, txtValue;
    input = $('#search_text');
    filter = input.val().toUpperCase();
    li = $('ul.topic_list li');
	li.each(function( index ) {
		txtValue = $( this ).text();
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            $( this ).css("display", "");
        } else {
			$( this ).css("display", "none");
        }
	});
}
</script>
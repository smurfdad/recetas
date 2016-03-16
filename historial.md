---
title: Historico de Publicaciones
layout: page
---
{% for post in site.posts %}
  <div class="row">
    {% capture nfecha %}{{ post.date | date_to_string }}{% endcapture %}
    {% if fecha != nfecha %}
        <div class="col-xs-2">{{ post.date | date_to_string }}</div>
        <div class="col-xs-10">
        {% capture fecha %}{{ post.date | date_to_string}}{% endcapture %}
    {% else %}
        <div class="col-xs-10 col-xs-offset-2">
    {% endif %}
    <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></div>
  </div>
{% endfor %}
---
title: Historico de Publicaciones
layout: page
---
{% for post in site.posts %}
  <div class="row">
    <div class="col-xs-2">{{ post.date | date_to_string }}</div>
    <div class="col-xs-10"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></div>
  </div>
{% endfor %}
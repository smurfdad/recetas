---
title: Historico de Publicaciones
layout: page
---
{% for post in site.posts %}
  <div class="row">
    <div class="col-md-2">{{ post.date | date_to_string }}</div>
    <div class="col-md-10">
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      <small>{{ post.excerpt }}</small>
    </div>
  </div>
{% endfor %}
---
title: Histórico de Publicaciones
layout: default
permalink: /historial/index.html
---
<div class="timeline"><dl>
{% for post in site.posts %}
  {% capture nfecha %}{{ post.date |  date: "%B %Y" }}{% endcapture %}
  {% if fecha != nfecha %}
    <dt>{{ nfecha }}</dt>
  {% endif %}
  <dd class="{% cycle 'pos-right', 'pos-left' %} clearfix">
      <div class="circ"></div>
      <div class="time">{{ post.date | date: "%d" }}</div>
      <div class="events">
        <div class="events-body">
          <h4 class="events-heading"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
        </div>
      </div>
  </dd>
  {% capture fecha %}{{ post.date | date: "%B %Y" }}{% endcapture %}     
{% endfor %}

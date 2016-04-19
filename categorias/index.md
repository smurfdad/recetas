---
title: Categorias
layout: page
---
<ul class="list-unstyled">
  {% assign sorted_categories = (site.data.categorias | sort: 'name') %}
  {% for categoria in sorted_categories %}
  <li>
    <a href="/categorias/{{ categoria.uri }}">
      {% capture cuenta %}{{site.categories[categoria.name] | size}}{% endcapture%}
      {{ categoria.name }}
       <span class="badge pull-right">{{cuenta}}</span>
    </a>
  </li>
  {% endfor %}
</ul>
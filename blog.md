---
layout: default
title: Blog
permalink: /blog/
weight: 4
body-class: blog
---

<div class="blog-post-container">
	{% for post in site.posts reversed %}
	  <div class="blog-post">
	    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
	    <p>{{ post.summary }}</p>
	  </div>
	{% endfor %}
</div>
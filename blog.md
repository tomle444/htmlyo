---
layout: default
title: Blog
permalink: /blog/
weight: 4
body-class: cms blog
---
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
  </header>
<div class="blog-post-container">
	{% for post in site.posts  %}
	  <div class="blog-post">
	  	<div class="inner">
	    	<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	    	<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
	    	<p>{{ post.summary }}</p>
	    </div>
	  </div>
	{% endfor %}
</div>
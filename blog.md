---
layout: default
title: Blog
permalink: /blog/
weight: 4
enabled: 1
body-class: cms blog
---
  
<h1 class="page-heading">{{ page.title }}</h1>

<div class="blog-post-container">
	{% for post in site.posts  %}
	  <div class="blog-post">
	  	<div class="inner">
	    	<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
	    	<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
	    	<p>{{ post.summary }}</p>
	    	<a class="button read-more" href="{{ post.url | prepend: site.baseurl }}">Read More</a>   
	    </div>
	  </div>
	{% endfor %}
</div>
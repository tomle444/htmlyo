---
layout: page
title: Work
permalink: /work/
weight: 1
enabled: 0
body-class: cms cms-work
---

These are the most recent projects HTMLYO has been proud to be a part of. They show off different aspects of Front End Development ranging from custom design mockups to HTML/CSS design and development.

~ Yo!



<div class="work-container">
    {% for work in site.work %}
      <div class="work">        
        <a class="work-link" href="{{ work.url | prepend: site.baseurl }}">
          <div class="work-overlay">
            <div class="work-title" href="{{ work.url | prepend: site.baseurl }}">{{ work.title }}</div>
          </div>  
          <img src="{{work.thumb | prepend: site.baseurl }}" />
                  
        </a>        
      </div>
    {% endfor %}
</div>
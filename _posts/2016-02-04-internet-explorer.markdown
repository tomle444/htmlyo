---
layout: post
title:  "Internet Explorer 8, 9, & 10: The End is Near"
date:   2016-02-03 13:17:34
categories: jekyll
body-class: cms blog
summary: Microsoft has announced that they will be ending support for Internet Explorer 8, 9 & 10. What does this all mean for the common web developer? Rejoice. 
thumb: 
resource: true
---
<p>The most common thorn in a web developer's side is finally going away, so to speak. Microsoft has officially announced that Internet Explorer 8, 9, and 10 will no longer be supported by Microsoft Support. What does this mean? They are basically telling the public that you should no longer be using these Internet Explorer versions and you should be upgrading to the latest version of Internet Explorer 11 (<a href="https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support" target="_blank">link</a>).</p>

<p>Microsoft had a similar announcement when they announced that they would no longer provide support for Windows XP in April of 2014 (<a href="http://windows.microsoft.com/en-us/windows/end-support-help" target="_blank">link</a>). Windows XP is no longer on Microsoft Support's radar of updates. Use at your own risk.</p>

<p>Users can still choose to use these unsupported applications but these users cannot expect any new updates or patches. This is important in this day and age because there is so much concern for security and privacy over the internet. Internet Explorer without any new security updates can potentially be a risky action.</p>

<p><strong>Why should web developers rejoice?</strong><br />
As a web developer working in the past decade or so, the concern for cross-browser compatibility has been part of the job. Every developer has their favorite browser to develop in for a variety of reasons. Google Chrome and Mozilla Firefox are two of the most popular web browsers to use because of their compatibility with web standards. Internet Explorer has had it's own version of how to interpret web code. So much so that it has been common practice to add conditional code to render out individual CSS files for each version of IE.</p>

{% highlight html %}
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="../../css/ie8.css" />  
<![endif]-->

... ugh
{% endhighlight %}

<p><strong>Browser Statistics</strong> (<a href="http://www.w3schools.com/browsers/browsers_stats.asp" target="_blank">W3Schools.com</a>)</p>

<table width="100%">
	<tr>
		<th>2015</th>
		<th>Chrome</th>
		<th class="ie-col">IE</th>
		<th>Firefox</th>
		<th>Safari</th>
		<th>Opera</th>
	</tr>
	<tr>
		<td>December</td>
		<td>68%</td>
		<td class="ie-col">6.3%</td>
		<td>19.1%</td>
		<td>3.7%</td>
		<td>1.5%</td>
	</tr>
	<tr>
		<td>November</td>
		<td>67.4%</td>
		<td class="ie-col">6.8%</td>
		<td>19.2%</td>
		<td>3.9%</td>
		<td>1.5%</td>
	</tr>
	<tr>
		<td>October</td>
		<td>66.5%</td>
		<td class="ie-col">6.9%</td>
		<td>20%</td>
		<td>3.8%</td>
		<td>1.4%</td>
	</tr>
	<tr>
		<td>September</td>
		<td>65.9%</td>
		<td class="ie-col">7.2%</td>
		<td>20.6%</td>
		<td>3.6%</td>
		<td>1.4%</td>
	</tr>
	<tr>
		<td>August</td>
		<td>64%</td>
		<td class="ie-col">6.6%</td>
		<td>21.2%</td>
		<td>4.5%</td>
		<td>2.2%</td>
	</tr>
</table>

<p><strong>Previous Years</strong></p>

<table width="100%">
	<tr>
		<th>Year</th>
		<th>Chrome</th>
		<th class="ie-col">IE</th>
		<th>Firefox</th>
		<th>Safari</th>
		<th>Opera</th>
	</tr>
	<tr>
		<td>2014</td>
		<td>61.6%</td>
		<td class="ie-col">8%</td>
		<td>23.6%</td>
		<td>3.7%</td>
		<td>1.6%</td>
	</tr>
	<tr>
		<td>2013</td>
		<td>55.8%</td>
		<td class="ie-col">9%</td>
		<td>26.8%</td>
		<td>3.8%</td>
		<td>1.9%</td>
	</tr>
	<tr>
		<td>2012</td>
		<td>46.9%</td>
		<td class="ie-col">14.7%</td>
		<td>31.1%</td>
		<td>4.2%</td>
		<td>2.1%</td>
	</tr>
	<tr>
		<td>2011</td>
		<td>34.6%</td>
		<td class="ie-col">20.2%</td>
		<td>37.7%</td>
		<td>4.2%</td>
		<td>2.5%</td>
	</tr>
	<tr>
		<td>2010</td>
		<td>22.4%</td>
		<td class="ie-col">27.5%</td>
		<td>43.5%</td>
		<td>3.8%</td>
		<td>2.2%</td>
	</tr>
</table>

<p>You can see that IE still has a significant usage among web users, although the amount of people using IE has dropped significantly since 2010. This trend is a sign that IE needs to get with the times if they want to compete with newer and more modern web browsers.</p>
<p> ~ Yo! </p>



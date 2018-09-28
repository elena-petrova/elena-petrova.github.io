---
layout: blogpost
title: CURE direct mail design time lapse
subhead: SUCH SIMPLE. SO EASE. WOW.
categories: jekyll code seo
featured: code
---

<div class="video media">
  <iframe src="http://player.vimeo.com/video/24478858" width="500" height="281" frameborder="0"></iframe>
</div>

<p>So here's the process of my design for CURE International's (<a href="http://vimeo.com/cure">vimeo.com/​cure</a>) upcoming direct mail.</p>

<p>It's an 11 x 17 poster intended to illustrate how our donors are part of the larger "CURE family" of patients, families, doctors, staff and communities where our facilites are located.</p>

<p>I was almost entirely built out in Photoshop CS5. Images mostly taken by Bryce Alan Flurie (<a href="http://vimeo.com/​brycealanflurie">vimeo.com/​brycealanflurie</a>) and some from staff in the field.</p>

<p>Music track is "Cherry Twist" by The Crystal Method, and you can <a href="http://itunes.apple.com/​us/​album/​cherry-twist/​id364033?i=364015">find it on iTunes here</a>.</p>

<p>Video was created with an OSX screenshot utility app called InstantShot! and Quicktime 7.</p>

<p class="disclaimer">I <a href="https://www.facebook.com/joelglovier/posts/10101931050277118" target="_blank">recently shared</a> an article on Facebook which garnered some discussion. Here's some further thoughts.</p>

{% highlight html %}
<p>
  <span class="super">$</span>
  100
</p>

<style>
.super {
    font-size:80%; /* or designate an appropriate px or em value here */
    position:relative;
    top:-.5em; /* alternatively, you could use a positive bottom value */
}
</style>
{% endhighlight %}

{% highlight html %}
{% raw %}
---
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for post in site.posts %}
    <url>
        <loc>{{ site.url }}{{ post.url | remove: 'index.html' }}</loc>
    </url>
    {% endfor %}

    {% for page in site.pages %}
    {% if page.layout != nil %}
    {% if page.layout != 'redirect' %}
    <url>
        <loc>{{ site.url }}{{ page.url | remove: 'index.html' }}</loc>
    </url>
    {% endif %}
    {% endif %}
    {% endfor %}
</urlset>
{% endraw %}
{% endhighlight %}

When I changed the value of <code>all</code> to <code>color</code>, the site stopped crashing in Safari.
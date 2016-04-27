---
layout: page
title: Blog
permalink: /Blog/
published: true
---
<style>
.posts{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
	.post{
		width: 100%;
		max-width: 300px;
		background: #fff;
	}
	.post img{
		height: 300px;
		width: 300px;
		object-fit: cover;
	}
	.post h1{
		font-size: 1.5em;
		padding: 10px;
	}
</style>
<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>
		<img src="{{ post.imagine }}" alt="">
      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Citește mai departe</a>
    </article>
  {% endfor %}
</div>

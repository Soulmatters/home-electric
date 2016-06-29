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
		margin:10px 15px;
	}
	.post img{
		height: 300px;
		width: 300px;
		object-fit: cover;
	}
	.post h1{
		font-size: 23px;
		padding: 20px;
	}
	.entry{
		padding: 20px;
		font-size: 16pt;
		font-weight: 300;
	}
</style>
<div class="posts">
  {% for post in site.posts %}
    <article class="post paper-shadow-bottom-z-2">

<a href="{{ site.baseurl }}{{ post.url }}"><img src="{{ post.imagine }}" alt=""></a>
      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>
		
      <div class="entry">
        {{ post.excerpt }}
      </div>

      
    </article>
  {% endfor %}
</div>

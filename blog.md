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
		max-width: 400px;
		background: #fff;
		margin:10px 15px;
		border-bottom:3px solid #2196f3;
		border-radius:4px;
	}
	.post img{
		height: 300px;
		width: 400px;
		object-fit: cover;
	}
	.post h1{
		font-size: 20px;
		padding: 20px;
	}
	.entry{
		padding: 20px;
		font-size: 14pt;
		font-weight: 300;
	}
	.post{
    font-family: 'Lato', sans-serif;
}
</style>
<div class="posts">
  {% for post in site.posts %}
    <article class="post paper-shadow-bottom-z-2">
<h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>
<a href="{{ site.baseurl }}{{ post.url }}"><img src="{{ post.imagine }}" alt=""></a>
      
		
      <div class="entry">
        {{ post.excerpt }}
      </div>

      
    </article>
  {% endfor %}
</div>

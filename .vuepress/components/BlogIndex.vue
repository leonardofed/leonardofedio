<template>
<div class="post">
	<div v-for="post in posts">
		<h2>
			<router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
		</h2>
		
		<p>{{ post.frontmatter.description }}</p>

		<!-- <p><router-link :to="post.path">Read more</router-link></p> -->
		<br>
	</div>
</div>
</template>

<script>
export default {
	computed: {
		posts() {
			return this.$site.pages
				.filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
				.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
		}
	}
}
</script>

<style>
.post a {
	color: #0099ff;
	background-color: #0099ff1c;
	border-bottom-style: dotted;
	border-bottom-width: 1px;
	padding: 5px 1px;
	text-decoration: none !important;
	font-style: normal !important;
	line-height: 1.7
}
.post h2 {
	font-size: 28px;
	padding-bottom: .3rem;
	  
}
</style>



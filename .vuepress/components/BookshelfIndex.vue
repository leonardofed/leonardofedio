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
				.filter(x => x.path.startsWith('/bookshelf/') && !x.frontmatter.bookshelf)
				.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
		}
	}
}
</script>

<style>

</style>



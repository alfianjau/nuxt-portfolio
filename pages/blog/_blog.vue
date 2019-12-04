<template>
  <article>
    <h1>{{blogPost.title}}</h1>
    <!-- <div>{{blogPost.body}}</div> -->
    <div v-html="$md.render(blogPost.body)" />
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
      };
  },
};
</script>

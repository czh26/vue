<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>这是我的第一个Vue页面</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  color: #ffffff;
}
</style>

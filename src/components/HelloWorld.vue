<template>
  <div class="hello">123</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.hello {
  width: 100%;
  height: 150px;
  background: red;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

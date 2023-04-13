<template lang="pug">
footer
  p c 2021 Copyright By 
  router-link(:to='{ name: "hello" }') Jex Yeh
  img(v-for='n in 4', alt="Vue logo", src="../assets/logo.png")
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  .underline{
    text-decoration: underline;
  }
  img{
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
}
</style>

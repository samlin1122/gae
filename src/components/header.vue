<template lang="pug">
header
  router-link.logo(:to="{ name: 'home' }")
    img
  .item-wrapper
    p work
    p about
    p contact
  p(@click='menuShow = true') menu
  MENU(v-if='menuShow', @close='menuShow = false')
</template>

<script>
import MENU from "./menu.vue";

export default {
  name: "Header",
  components: { MENU },
  emits: {
    close() {
      this.menuShow = false;
      console.log(123);
      return true;
    },
  },
  data() {
    return {
      menuShow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 50px;
    height: 50px;
    background-color: red;
  }
  .item-wrapper {
    display: flex;
    align-content: center;
    justify-content: space-between;
    p {
      padding: 0 40px;
    }
  }
}
</style>

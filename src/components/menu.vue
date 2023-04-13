<template lang="pug">
#menu
  .close(@click='$emit("close")') close
  .item(v-for='item in data') {{ item.name }}
  .social-wrapper
    img(v-for='item in socialList', alt="Vue logo", :src="item.img")

</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      data: [
        { name: "Work", url: "" },
        { name: "About", url: "" },
        { name: "Contact", url: "" },
      ],
      socialList: [
        { img: this.getImageUrl('logo'), url: "" },
        { img: this.getImageUrl('logo'), url: "" },
        { img: this.getImageUrl('logo'), url: "" },
        { img: this.getImageUrl('logo'), url: "" },
      ],
    };
  },
  created() {
    document.querySelector("html").style.overflowY = "hidden";
  },
  beforeUnmount() {
    document.querySelector("html").style.overflowY = "unset";
  },
};
</script>

<style lang="scss" scoped>
#menu {
  position: fixed;
  width: 100vw;
  top: 0;
  bottom: 0;
  background-color: black;
  z-index: 1;
  text-align: end;
  .close,
  .item {
    cursor: pointer;
  }
  .item {
    color: white;
  }
  .social-wrapper img {
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }
}
</style>

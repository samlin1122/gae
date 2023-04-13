<template lang="pug">
#collection
  .item
    img.background-image(alt="Vue logo" src="../assets/logo.png")
    //- .background-image
    .content
      p 個人網頁
      p UI/UX
      p Desktop | Mobile
  .portfolio
    .item
      img.background-image(alt="Vue logo" src="../assets/logo.png")
      .content
        p 台灣盃深度賽
        p UI/UX | Branding |Product
        p Desktop | Mobile
    .item
      img.background-image(alt="Vue logo" src="../assets/logo.png")
      .content
        p 服飾配件
        p Branding | Product
        p Desktop | Mobile
</template>

<script>
export default {
  name: "collection",
};
</script>

<style lang="scss" scoped>
#collection {
  width: 100%;
  .item {
    width: 100%;
    max-width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    &:hover {
      .content {
        display: flex;
      }
    }
    .background-image {
      transition: all 0.3s;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .content {
      backdrop-filter: blur(8px);
      transition: all 0.3s;
      width: 100%;
      height: 100%;
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      display: none;
      p {
        color: white;
      }
    }
  }
  & > .item .background-image {
    background-color: #9f9d99;
  }
  .portfolio {
    width: 100%;
    display: flex;
    align-items: center;
    .item {
      width: 50%;
      &:first-child .background-image {
        background-color: #71869d;
      }
      &:last-child .background-image {
        background-color: #60614c;
      }
    }
  }
}
</style>

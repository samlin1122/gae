<template lang="pug">
#banner(v-if='selectType')
  .types
    p(v-for='type in types', :class='{ "bold" : selectType === type}', @click=' selectType = type ') {{ type.name }}

  .contents(:class='{ "row-reverse" : selectType.key === "AA" }')
    img(alt="Vue logo" src="../assets/logo.png")
    .description
      p Hi There,
      p.bold I AM Jex
      p {{ selectType.name }}
  .dot-wrapper
    .dot(v-for='type in types', :class='{ "is-active" : selectType === type}', @click=' selectType = type ')

</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      types: [
        { name: "UI/UX Designer", key: "UU" },
        { name: "Apparel & Accessories Designer", key: "AA" },
        { name: "Freediving instructor", key: "Free" },
      ],
      selectType: null,
    };
  },
  mounted() {
    this.selectType = this.types[0];
  },
};
</script>

<style lang="scss" scoped>
#banner {
  width: 100%;
  height: 500px;
  background-color: #efefef;
  position: relative;
  display: flex;
  .types {
    width: 20%;
    position: absolute;
    left: -50px;
    top: 130px;
    text-align: end;
    transform: rotate(-90deg);
    width: fit-content;
    p {
      white-space: nowrap;
    }
  }
  .contents {
    max-width: 80%;
    width: 100%;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &.row-reverse {
      flex-direction: row-reverse;
    }
    img {
      width: 500px;
      height: 100%;
    }
    .description {
      margin: auto 0;
    }
  }
  .dot-wrapper {
    position: absolute;
    bottom: 30px;
    width: 60px;
    left: calc(50% - 30px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .dot {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #a6a6a6;
      margin: 0 5px;
      cursor: pointer;
      &.is-active {
        background-color: #333333;
      }
    }
  }
}
</style>

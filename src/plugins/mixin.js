export default {
  methods: {
    getImageUrl (name) {
      return new URL(`../assets/${name}.png`, import.meta.url).href
    }
  }
}
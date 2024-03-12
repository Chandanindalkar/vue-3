const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { id: 1, title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
        { id: 2, title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
        { id: 3, title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
    toggleFavBooks(id) {
      this.books[id].isFav = !this.books[id].isFav
    },
  }
})

app.mount('#app')
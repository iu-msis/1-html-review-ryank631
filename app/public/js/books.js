const Books = {
    data() {
      return {
        books: [],
        selectedBook: null,
        bookForm: {}
        }
    },
    computed: {},
    methods: {
        fetchBookData() {
            fetch('api/books/index.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
    selectBook(b) {
        if (b == this.selectedBook) {
            return;
        }
        this.selectedBook = b;
        this.books = [];
        this.fetchBookData(this.selectedBook);
    },
    postNewBook(evt) {
        // this.bookForm.title = this.selectedBook.title;
        // console.log("Posting!", this.bookForm);
        alert("Created!");

        fetch('api/books/create.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then( response => response.json())
        .then( json => {
            console.log("Returned from post:", json);
            this.books = json;
            this.bookForm = {};
        });
    }
  },
    created() {
        this.fetchBookData();
     
    }
}
  
Vue.createApp(Books).mount('#booksApp');
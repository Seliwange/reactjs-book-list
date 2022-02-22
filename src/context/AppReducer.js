export default (state, action) => {
    switch(action.type){
        case "ADD_BOOK":
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        case "DELETE_BOOK":
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            };
        case "EDIT_BOOK":
            const updateBook = action.payload;
            const updateBooks = state.books.map(book => {
                if(book.id === updateBook.id){
                    return updateBook;
                }
                return book;
            });
            return {
                ...state,
                books: updateBooks
            };
        default:
            return state;
    }
}
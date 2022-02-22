import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    books: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addBook(book){
        dispatch({
            type: "ADD_BOOK",
            payload: book
        })
    }

    function deleteBook(id){
        dispatch({
            type: "DELETE_BOOK",
            payload: id
        })
    }

    function editBook(book){
        dispatch({
            type: "EDIT_BOOK",
            payload: book
        })
    }

    return (
        <GlobalContext.Provider value={{
            books: state.books,
            addBook,
            deleteBook,
            editBook
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


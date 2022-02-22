import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate, useLocation } from 'react-router';
import {Link} from 'react-router-dom';
import {
    Form,
    FormGroup,
    FormFeedback,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditBook = () => {
    const [selectedBook, setSelectedBook] = useState({
        id: "",
        bookTitle: "",
        author: "",
        category: "",
        number: ""
    });

    const {books, editBook} = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();
    const currentBookId = location.pathname.replace(/\D/g, "");

    useEffect(() => {
        const bookId = currentBookId;
        const selectBook = books.find(book => book.id === Number(bookId));
        setSelectedBook(selectBook);
    }, [currentBookId, books]);

    const onSubmit = (e) => {
        e.preventDefault();
        editBook(setSelectedBook);
        navigate("/reactjs-book-list/", {replace: true});
    };
    
    const handleOnChange = (bookKey, value) => {
        setSelectedBook({...selectedBook, [bookKey]: value});
    };

    return (
        <div style={{maxWidth: "30rem", margin: "1rem auto"}}>
            <Form className="was-validated container" onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Book title: </Label>
                    <Input 
                        type="text" 
                        id="book_title"
                        name="book_title" 
                        required 
                        value={selectedBook.bookTitle}
                        onChange={(e) => handleOnChange("bookTitle", e.target.value)}
                    />
                    <FormFeedback valid>
                        Looks good!
                    </FormFeedback>
                    <FormFeedback invalid="true">
                        Please write the title
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>Author name: </Label>
                    <Input 
                        type="text" 
                        id="author_name"
                        name="author_name" 
                        required 
                        value={selectedBook.author}
                        onChange={(e) => handleOnChange("author", e.target.value)}
                    />
                    <FormFeedback valid>
                        Looks good!
                    </FormFeedback>
                    <FormFeedback invalid="true">
                        Please write the author
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>Category: </Label>
                    <Input 
                        type="select"
                        id="category" 
                        name="category"
                        required
                        value={selectedBook.category}
                        onChange={(e) => handleOnChange("category", e.target.value)}
                    >
                        <option value=""></option>
                        <option value="History">History</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Business">Business</option>
                    </Input>
                    <FormFeedback valid>
                        Looks good!
                    </FormFeedback>
                    <FormFeedback invalid="true">
                        Please choose the category
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label>International Standard Book Number (ISBN): </Label>
                    <Input 
                        type="number" 
                        id="number"
                        name="number" 
                        min="1000"
                        max="100000"
                        required
                        value={selectedBook.number}
                        onChange={(e) => handleOnChange("number", e.target.value)}
                    />
                    <FormFeedback valid>
                        Looks good!
                    </FormFeedback>
                    <FormFeedback invalid="true">
                        Please write the ISBN
                    </FormFeedback>
                </FormGroup>
                <Button type="submit">Edit a Book</Button>
                <Link to="/reactjs-book-list/" className="btn btn-danger ms-2">Cancel</Link>
            </Form>
        </div>
    );
}

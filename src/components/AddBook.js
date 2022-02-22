import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Heading } from './Heading';
import { useNavigate } from 'react-router';
import {
    Form,
    FormGroup,
    FormFeedback,
    Label,
    Input,
    Button
} from 'reactstrap';

export const AddBook = () => {
    const [bookTitle, setBookTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("History");
    const [number, setNumber] = useState("");

    const {addBook} = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const createId = Math.floor(Math.random() * 10000) + 1;
        const newBook = {
            id: createId,
            bookTitle,
            author,
            category,
            number
        };
        addBook(newBook);
        navigate("/reactjs-book-list/");
    } 

    return (
        <div style={{maxWidth: "30rem", margin: "0 auto"}}>
            <Heading 
                pageTitle="Add a Book" 
                link="/reactjs-book-list/"
                linkName="GoTo Book List" 
            />
            <Form className="was-validated container" onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="book_title">Book title: </Label>
                    <Input 
                        type="text" 
                        id="book_title"
                        name="book_title" 
                        required 
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />
                    <FormFeedback valid>
                        Looks good!
                    </FormFeedback>
                    <FormFeedback invalid="true">
                        Please write the title
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="author_name">Author name: </Label>
                    <Input 
                        type="text" 
                        id="author_name"
                        name="author_name" 
                        required 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <FormFeedback valid>
                        Looks good!
                    </FormFeedback>
                    <FormFeedback invalid="true">
                        Please write the author
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category: </Label>
                    <Input 
                        type="select"
                        id="category" 
                        name="category"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value=""></option>
                        <option value="history">History</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="business">Business</option>
                    </Input>
                    <FormFeedback valid>
                        Looks good!
                    </FormFeedback>
                    <FormFeedback invalid="true">
                        Please choose the category
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="number">International Standard Book Number (ISBN): </Label>
                    <Input 
                        type="number" 
                        id="number"
                        name="number" 
                        min="1000"
                        max="100000"
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <FormFeedback valid>
                        Looks good!
                    </FormFeedback>
                    <FormFeedback invalid="true">
                        Please write the ISBN
                    </FormFeedback>
                </FormGroup>
                <Button type="submit">Add a Book</Button>
            </Form>
        </div>
    );
}

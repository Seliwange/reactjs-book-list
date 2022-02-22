import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    Table,
    Button
} from 'reactstrap';
import { Heading } from './Heading';
import {RiDeleteBin6Line, RiEdit2Line} from 'react-icons/ri';

export const Dashboard = () => {
    const {books, editBook, deleteBook} = useContext(GlobalContext);

    return (
        <div>
            <Heading 
                pageTitle="Book List" 
                link="/reactjs-book-list/addbook"
                linkName="Add a Book" 
            />
            <Table className="container" responsive striped size="sm">
                <thead>
                    <tr>
                        <th>Book title</th>
                        <th>Author Name</th>
                        <th>Category</th>
                        <th>ISBN</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(books.length > 0) ? (
                        books.map(book => (
                            <tr key={book.id}>
                                <td>{book.bookTitle}</td>
                                <td>{book.author}</td>
                                <td>{book.category}</td>
                                <td>{book.number}</td>
                                <td>
                                    <Link 
                                        className="btn btn-warning me-1 mb-1"
                                        to={`/reactjs-book-list/edit/${book.id}`}
                                        title="Edit"
                                        onClick={() => editBook(book.id)}
                                    >
                                        <RiEdit2Line />
                                    </Link>
                                    <Button 
                                        className="mb-1"
                                        color="danger"
                                        title="Delete"
                                        onClick={() => deleteBook(book.id)}
                                    >
                                        <RiDeleteBin6Line/>
                                    </Button>
                                </td>
                            </tr>
                        ))
                        ) : (
                        <tr>
                            <td className="text-center fs-3" colSpan="5">No data</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

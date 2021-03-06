import React, {Component} from 'react';
import './book-list.css';
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc";

class BookList extends Component {

    componentDidMount() {
        // 1. receive data
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);
        // 2. dispatch action to store

    }

    render() {
        const {books} = this.props;
        return (
            <ul>
                {books.map(book => <li key={book.id}><BookListItem book={book}/></li>)}
            </ul>
        );
    }
}

const mapStateToProps = ({books}) => {
    return {books}
};

export default withBookstoreService()(connect(mapStateToProps)(BookList));
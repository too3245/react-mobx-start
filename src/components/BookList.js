import React,{Component} from "react";
import {List,ListItem,Container} from '@material-ui/core';
import BookListItem from "./BookListItem";

class BookList extends Component{
    render(){
        const { books } = this.props;
        const bookItems = books.map(book =>{
            return(
                <ListItem>
                    <BookListItem book={book}/>
                </ListItem>
            )
        });
        return(
            <Container maxwidth='sm'>
                <List>
                    {bookItems}
                </List>
            </Container>
        )
    }
}

export default BookList;
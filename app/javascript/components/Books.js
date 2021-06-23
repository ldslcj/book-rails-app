import React from 'react';
import Book from './Book'

const Books = (props) => {
    const {bookz, updateBook, deleteBook} = props

    const renderComponents = () => {
        if (bookz.length === 0){
            return <p>no books</p>
        }
        return bookz.map ( book => {
            return <Book key = {bookz.id} updateBook = {updateBook} deleteBook = {deleteBook} {...book}  />
        })
    }
    return (
        <div>
            <h1>Books.js component</h1>
            {renderComponents()}
        </div>
    )
}

export default Books
import axios from 'axios'
import React, { useState } from 'react'
import BookForm from './BookForm'

<BookForm />

const Book = (props) => {
    const [showForm, setShowForm] = useState(false)
    const {id, name, author, updateBook, deleteBook} = props

    const deleteHandler = async (id) => {
        let res = await axios.delete(`/books/${id}`)
        console.log(res.data.id)
        deleteBook(id)
    }

    return(
        <div style={{border:'3px solid', margin:'20px'}}>
            <h1>{name}</h1>
            <p>Author: {author}</p>
            <button onClick={()=>setShowForm(!showForm)}>Edit</button>
            {showForm && <BookForm
                        updateBook = {updateBook}
                        id = {id}
                        name = {name}
                        author = {author}
                        /> }
            <button onClick={()=>deleteHandler(id)}>Delete</button>
        </div>
    )
}

export default Book
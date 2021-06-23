import React, {useDebugValue, useState} from 'react'
import axios from 'axios'

const BookForm = (props) => {
    const { addBook, id ,updateBook } = props
    const [name, setName] = useState(props.name ? props.name: '')
    const [author, setAuthor] = useState(props.author ? props.author: '')
    const [errorMessage, setErrorMessage] = useState(props.errorMessage ? props.errorMessage :'')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage(null)
        const book = {name, author}
            try {
                if(id) {
                    let response = await axios.put(`/books/${id}`, book)
                    updateBook(response.data)
                } else{
                    let response = await axios.post('/books', book)
                    addBook(response.data)
                }
                setName('')
                setAuthor('')
            } catch (err) {
                console.log(err.response.data)
                setErrorMessage(err.response.data.join(','))
            }

    }
    return (
        <div>
            <h1>{id ? "Edit" : "New"}</h1>
            {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
            <form onSubmit = {handleSubmit}>
                <p>title</p>
                <input value = {name} onChange = {((e) => setName(e.target.value))} />
                <p>author</p>
                <input value = {author} onChange = {((e) => setAuthor(e.target.value))} />
                <button>{id ? "Update" : "Add"}</button>
            </form>
        </div>

    )
    }

export default BookForm
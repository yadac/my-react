import React from 'react'
import books from '../models/book'

export default function ListTemplate({ render }) {
    return (
        <dl>
            {books.map(book => (
                <React.Fragment key={book.isbn}>
                    {render(book)}
                </React.Fragment>
            ))}
        </dl>
    )
}

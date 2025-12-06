import React from "react"
import books from "../models/book"

export default function Booklist() {
    return (
        <dl>
            {
                books.map(elem => (
                    <React.Fragment key={elem.isbn}>
                        <dt>
                            <a
                                href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
                                target='blank'>
                                {elem.title}({elem.price}円)
                            </a>
                        </dt>
                        <dd>{elem.summary}</dd>
                    </React.Fragment>
                ))
            }
        </dl>
    )
}

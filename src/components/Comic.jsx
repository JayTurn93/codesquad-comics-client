import { useState, useEffect } from "react";
import styles from "../App.module.css"
import { useParams } from "react-router-dom"


function Comic() {
  const { _id} = useParams();
  const [book, setBook] = useState

  useEffect(() =>{
      fetch(`https://codesquad-comics-server-m49l.onrender.com/api/books/${_id}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        setBook(data.data.book)
      })
      .catch(console.error)
    }, [setBook, _id])

  return (
    <div>
          <main class={styles.twotone}>
       <div class={styles.nocontainer}>
        <div class={styles.card}>
          <h2>{book.title}</h2>
          <img src={book.imageUrl} alt="" />
          </div>
          <div class={styles.cardinfo}>
            <div>
            <span class={styles.comicname}>Title:</span> <span class={styles.titlestyle}>
              {book.title}</span> <br />
            <span class={styles.comicname}>Author:</span> {book.author} <br />
            <span class={styles.comicname}>Publisher:</span> {book.publisher} <br />
            <span class={styles.comicname}>Genre:</span>{book.genre} <br />
            <span class={styles.comicname}>Number of Pages:</span>{book.pages}<br />
            <span class={styles.comicname}>Rating:</span>{book.rating}<br />
            <span class={styles.comicname}>Synopsis:</span>{book.synopsis}. <br />
            </div> 
          </div>
       </div>
    </main>
    </div>
  )
}

export default Comic;
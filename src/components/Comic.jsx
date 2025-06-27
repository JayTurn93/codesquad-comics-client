import styles from "../App.module.css"


function Comic() {
  return (
    <div>
          <main class={styles.twotone}>
       <div class={styles.nocontainer}>
        <div class={styles.card}>
          <h2>WATCHMEN</h2>
          <img src="./public/images/watchmen.jpg" alt="" />
          </div>
          <div class={styles.cardinfo}>
            <div>
            <span class={styles.comicname}>Title:</span> <span class={styles.titlestyle}>
              Watchmen</span> <br />
            <span class={styles.comicname}>Author:</span> Alan Moore <br />
            <span class={styles.comicname}>Publisher:</span> DC Comics <br />
            <span class={styles.comicname}>Genre:</span> Superhero <br />
            <span class={styles.comicname}>Number of Pages:</span> 416<br />
            <span class={styles.comicname}>Rating:</span> 5<br />
            <span class={styles.comicname}>Synopsis:</span>This Hugo Award-winning graphic novel chronicles the fall from grace of a group of super-heroes plagued by all-too-human failings. Along the way, the concept of the super-hero is dissected as the heroes are stalked by an unknown. <br /><br />One of the most influential graphic novels of all time and a perennial best-seller, Watchmen has been studied on college campuses across the nation and is considered a gateway title, leading readers to other graphic novels such as V for Vendetta, Batman: The Dark Knight Returns, and The Sandman series. <br />
            </div> 
          </div>
       </div>
    </main>
    </div>
  )
}

export default Comic;
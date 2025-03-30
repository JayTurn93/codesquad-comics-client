function Create() {
    return (
      <div>
        <main className="twotone">
            <section className="container">
                <h1>CREATE NEW COMIC</h1>
                <div className="cform">
                <div className="createcenter">
                    <label htmlFor="title">Title:</label>
                        <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"/>
                </div>
                <div className="createcenter">
                        <label htmlFor="author">Author:</label>
                        <input
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Author"/>
                </div>
                <div className="createcenter">
                    <label htmlFor="publisher">Publisher:</label>
                    <select name="publishers" id="publisher-select">
                        <option value="selection" defaultValue disabled>Select</option>
                        <option value="BOOM! Box">BOOM! Box</option>
                        <option value="DC Comics">DC Comics</option>
                        <option value="Harry N. Abrams">Harry N. Abrams</option>
                        <option value="Icon Books">Icon Books</option>
                        <option value="Image Comics">Image Comics</option>
                        <option value="Marvel">Marvel</option>
                        <option value="Simon & Schuster">Simon & Schuster</option>
                        <option value="Top Shelf Productions">Top Shelf Productions</option>
                        <option value="VIZ Media LLC">VIZ Media LLC</option></select>
                </div>
                <div className="createcenter">
                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        placeholder="Genre"/>
                </div> 
                <div className="createcenter">
                    <label htmlFor="pages">Number of Pages:</label>
                    <input
                        type="text"
                        name="pages"
                        id="pages"
                        placeholder="Number of Pages"/>
                </div>  
                <div className="createcenter">
                    <label htmlFor="rating">Rating:</label>
                    <select name="rating" id="rating">
                        <option value="" disabled defaultValue hidden>Number 0 to 5</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>  
                <div className="createcenter">
                    <label>Synopsis:</label>
                    <textarea
                        name="synop"
                        id="synop"
                        placeholder="Synopsis">
                    </textarea>
                </div>
                </div>
                <div className="createcenter">
                    <button className="submitbutton">Submit</button>
                </div>  
            </section>
        </main>
      </div>
    )
  }

export default Create; 
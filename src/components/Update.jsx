function Update() {
    return (
      <div>
        <main className="twotone">
            <div className="container">
                <div>
                    <h1>UPDATE COMIC</h1>
                    <div className="createcenter">
                        <label htmlFor="title">Title:</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        value="title value stored in database"/>
                    </div>
                    <div className="createcenter">
                        <label htmlFor="author">Author: </label>
                        <input
                        type="text"
                        id="author"
                        name="author"
                        value="author value stored in database"/>
                    </div>
                    <div className="createcenter">
                        <label htmlFor="publisher">Publisher: </label>
                        <select name="publishers" id="publisher-select">
                        <option value="BOOM! Box">BOOM! Box</option>
                        <option value="DC Comics">DC Comics</option>
                        <option value="Harry N. Abrams">Harry N. Abrams</option>
                        <option value="Icon Books">Icon Books</option>
                        <option value="Image Comics">Image Comics</option>
                        <option value="Marvel">Marvel</option>
                        <option value="Simon & Schuster">Simon & Schuster</option>
                        <option value="Top Shelf Productions">Top Shelf Productions</option>
                        <option value="VIZ Media LLC">VIZ Media LLC</option>
                        <option value="storedpub" selected>
                        publisher value stored in database</option>
                        </select>
                    </div>
                    <div className="createcenter">
                        <label htmlFor="Genre">Genre: </label>
                        <input
                        type="text"
                        id="genre"
                        name="genre"
                        value="genre data stored in database" />
                    </div>
                    <div className="createcenter">
                        <label htmlFor="pages">Number of Pages: </label>
                        <input type="text" id="pages" name="pages" value="pages value stored in database" />
                    </div>
                    <div className="createcenter">
                        <label htmlFor="rating">Rating: </label>
                        <input name="rating" id="rating" value="rating value stored in database" ></input>
                    </div>
                    <div className="createcenter">
                        <label htmlFor="synop">Synopsis: </label>
                        <textarea name="synop" id="synop" rows="2" cols="25">
                        synopsis value stored in database</textarea>
                    </div>
                    <div className="createcenter">
                        <button className="submitbutton">Submit</button>
                    </div>
                </div>
            </div>
        </main>
      </div>
    )
  }

export default Update; 
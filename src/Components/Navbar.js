import React, {useState} from 'react';

const NavBar = ({handleSearch})=> {
    const [movie, setMovie] = useState({
        Title: "",
        ImageMovies: "",
        Descreption: "",
        PosterURL: "",
        rating:""
    });
    const[title,setTitle] = useState([]);
    const[rating,setRating] = useState();
return(
    <div className="nav">
    <h1> MoviesList</h1>
    <div className="block">
    <input type="text" placeholder="Search By Title" name="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
    <input type="text" placeholder="Search By Rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)}></input>
    <button onClick={()=> handleSearch(title,rating)}>Search movies</button>
    </div>
 </div>
)

}

export default NavBar;
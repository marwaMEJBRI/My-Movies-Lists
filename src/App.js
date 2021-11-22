import './App.css';
 import MoviesList from  './Components/MoviesList';
 import MovieCard from './Components/MovieCard';
 import Filter from './Components/Filter';
 import Navbar from './Components/Navbar';
 import React, {useState} from 'react';

function App() {
  const[movies,setMovies] = useState([
    { id: 1, 
    Title: "The Princess Switch",
    Description :"When a priceless Christmas relic is stolen, royal look-alikes Margaret and Stacy turn to audacious doppelgänger Fiona — and her dashing ex — for help.",
    PosterURL : "https://www.netflix.com/tn-en/title/81262270",
    rating : "5",
    ImageMovies : "https://m.media-amazon.com/images/M/MV5BNTRhYzQ1MTEtYjRhZS00NmJkLWE5NzMtNWQ2YzlmMzlmNDI5XkEyXkFqcGdeQXVyNjEwMDM4NTQ@._V1_FMjpg_UX1000_.jpg"
    },

    { id: 2, 
      Title: "Il est trop bien",
      Description :"Une influenceuse experte en relooking parie qu'elle peut transformer un camarade de classe largué en roi du bal dans ce remake du classique.",
      PosterURL : "https://www.netflix.com/tn-fr/title/81446038",
      rating : "2",
      ImageMovies : "https://fr.web.img6.acsta.net/pictures/21/08/13/11/06/3580320.jpg"
      },

      { id: 3, 
        Title: "tick, tick...BOOM!",
        Description :"On the brink of turning 30, a promising theater composer navigates love, friendship and the pressure to create something great before time runs out.",
        PosterURL : "https://www.netflix.com/tn-en/title/81149184",
        rating : "4",
        ImageMovies : "https://fr.web.img4.acsta.net/pictures/21/10/26/16/44/0874332.jpg"
        }
  ]);
        const [movie, setMovie] = useState({
          Title: "",
          ImageMovies: "",
          Descreption: "",
          PosterURL: "",
          Rating:""
        });

      const addMovie = (movieAdd) => {
        setMovies([...movies, movieAdd]);
      };

      const handleSearch= (Title,rating) =>{
        const mv = movies.filter((item) => (item.Title === Title) || (item.rating === rating)) 
        setMovies(mv)
      }

      const handleChange = (e) =>{
        setMovie({...movie, [e.target.name]: e.target.value})
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
        addMovie({...movie})
      };
  return (
    <div className="App">
      <Navbar addMovie={addMovie} handleSearch={handleSearch} />
      <MoviesList  movies={movies}/>
      <div className="addMovies">
      <input type="text" placeholder="Title" name="Title"  onChange={ handleChange}></input>
      <input type="text" placeholder="Description" name="Description" onChange={ handleChange} ></input>
      <input type="text" placeholder="URL" name="PosterURL" onChange={ handleChange}></input>
      <input type="text" placeholder="Image's URL" name="ImageMovies" onChange={ handleChange}></input>
      <input type="text" placeholder="Rating" name="rating" onChange={handleChange}></input>
      <button type="submit" onClick={handleSubmit}>Submit</button>
     </div> 
    </div>
  );
}

export default App;

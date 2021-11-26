import './App.css';
 import MoviesList from  './Components/MoviesList';
 import MovieCard from './Components/MovieCard';
 import Filter from './Components/Filter';
 import Navbar from './Components/Navbar';
 import Description from './Components/Description';
 import BandeAnnonce from './Components/BandeAnnonce';
 import React, {useState} from 'react';
import {Route,Routes} from 'react-router-dom'
function App() {
  const[movies,setMovies] = useState([
    { id: Math.random(), 
    Title: "The Princess Switch",
    Description :"When a priceless Christmas relic is stolen, royal look-alikes Margaret and Stacy turn to audacious doppelgänger Fiona — and her dashing ex — for help.",
    PosterURL : "https://www.netflix.com/tn-en/title/81262270",
    rating : "5",
    ImageMovies : "https://m.media-amazon.com/images/M/MV5BNTRhYzQ1MTEtYjRhZS00NmJkLWE5NzMtNWQ2YzlmMzlmNDI5XkEyXkFqcGdeQXVyNjEwMDM4NTQ@._V1_FMjpg_UX1000_.jpg",
    Annonces: "https://www.youtube.com/embed/zop3QRGCwxE"
  },

    { id:  Math.random(), 
      Title: "Il est trop bien",
      Description :"Une influenceuse experte en relooking parie qu'elle peut transformer un camarade de classe largué en roi du bal dans ce remake du classique.",
      PosterURL : "https://www.netflix.com/tn-fr/title/81446038",
      rating : "2",
      ImageMovies : "https://fr.web.img6.acsta.net/pictures/21/08/13/11/06/3580320.jpg",
      Annonces : "https://www.youtube.com/embed/JVqHfUkTCtA"
      },

      { id:  Math.random(), 
        Title: "tick, tick...BOOM!",
        Description :"On the brink of turning 30, a promising theater composer navigates love, friendship and the pressure to create something great before time runs out.",
        PosterURL : "https://www.netflix.com/tn-en/title/81149184",
        rating : "4",
        ImageMovies : "https://fr.web.img4.acsta.net/pictures/21/10/26/16/44/0874332.jpg",
        Annonces : "https://www.youtube.com/embed/YJserno8tyU"
        },

        { id:  Math.random(), 
          Title: "Rise of the Black Swan",
          Description :"Un agent des forces spéciales, en voyage entre Londres et Paris avec sa petite amie, passe à l'action lorsque des mercenaires armés attaquent le train qui les transporte.",
          PosterURL : "https://www.netflix.com/tn-fr/title/81410784",
          rating : "3",
          ImageMovies : "https://fr.web.img5.acsta.net/pictures/21/02/23/11/55/5426424.jpg",
          Annonces : "https://www.youtube.com/embed/hRuUB6RKExQ"

          },

          { id:  Math.random(), 
            Title: "Army of Thieves",
            Description :"In this prequel to 'Army of the Dead', a mysterious woman recruits bank teller Dieter to help her crew crack three legendary safes across Europe.",
            PosterURL : "https://www.netflix.com/tn-en/title/81185548",
            rating : "3",
            ImageMovies : "https://www.filmmusicsite.com/images/covers/large/95072.jpg",
            Annonces : "https://www.youtube.com/embed/r1II_Ppi54w"

            },

            { id:  Math.random(), 
              Title: "A Week Away",
              Description :"Dans cette comédie musicale exaltante, un ado perturbé se résigne à participer à une colonie de vacances où il trouvera l'amour, des amis et sa place dans la vie.",
              PosterURL : "https://www.netflix.com/tn-fr/title/81183451",
              rating : "4",
              ImageMovies : "https://fr.web.img6.acsta.net/c_310_420/pictures/21/02/23/08/05/1824339.jpg",
              Annonces : "https://www.youtube.com/embed/jEbtIr8bIcw"
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
        const mv = movies.filter((item) => (item.Title.includes(Title) ) && (item.rating >= rating)) 
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
        <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies}/>}>
        <Route path='' element={<BandeAnnonce movies={movies}/>}/>
        </Route>
        <Route path='/' element={<><MoviesList  movies={movies}/> <MovieCard handleChange={handleChange} handleSubmit={handleSubmit}/> </>}></Route>
      </Routes>
      
         
    </div>
  );
}

export default App;

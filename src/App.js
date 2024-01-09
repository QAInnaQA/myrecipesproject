import { useEffect, useState } from 'react';
import './App.css';
import video from "./Video.mp4"
import MyRecipesComponents from './MyRecipesComponents';

function App() {

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("bread");


  const APP_ENDPOINT = 'https://api.edamam.com/api/recipes/v2';
  const APP_ID = '8ab7a4c3';
  const APP_KEY = 'f14bb474657c53b972835d902e6c962a'

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`${APP_ENDPOINT}?type=public&q=${wordSubmitted}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">

    <div className='container'> 
      <video autoPlay muted loop>
      <source src={video} type='Video/mp4'/>
      </video>
      <h1>FIND A SIMPLE RECIPE</h1>
    </div> 

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}></input>
        </form>

        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/external-search-user-interface-kmg-design-outline-color-kmg-design.png" width="32" height="32" alt='search'/>
        </button>
      </div>

      {myRecipes.map((element, index) => (
      <MyRecipesComponents key={index}
      label={element.recipe.label}
      image={element.recipe.image} 
      ingredients={element.recipe.ingredientLines}
      totalWeight={element.recipe.totalWeight}/>
    ))}
    </div>
  );
}

export default App;

import React, {useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {
  
  const APP_ID = "41773699";
  const APP_KEY = "749c96e44040fef32031f49baf346354" ;	

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chocolate")
    
  useEffect(() => {
    getRecipes();
  },[query]);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
   }
  
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("")//to remove text from search box after clicking submit
  } 

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className = "App">
       <form className = "search-form" onSubmit = {getSearch}>
         <input className = "search-bar" type = "text" value={search} onChange={updateSearch}/>
         <button className = "search-button" type = "submit">Submit</button>
       </form>
      <div className="recipes">
         {recipes.map(recipe => (
         <Recipe key={recipe.recipe.label}
         title={recipe.recipe.label} calories={recipe.recipe.calories} 
         image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
       ))}
      </div>
    </div>
  )
}
export default App;

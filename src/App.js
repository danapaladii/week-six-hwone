import { useState } from "react";
import { data } from './data';
import './App.css';


function App() {

  const [dishes, setDishes] = useState(data);

  const removeDish = (id) => {
    let newDishes = dishes.filter(name => name.id !==id);
    setDishes(newDishes)
  }


  return (
    <div>
      <div className="container">
        <h1>List of {dishes.length} Dishes for the Festive Table</h1>
      </div>

      {dishes.map((element => {
        const {id, name, image} = element;

        return(
          <div key={id}>
            <div className="container">
              <h2>{id} - {name}</h2>
            </div>

            <div className="container">
              <img src={image} width="250px" alt="food" />
            </div>

            <div className="container">
              <button onClick={() => removeDish(id)}>Remove</button>
            </div>

          </div>
        )
      }))}

      <div className="container">
        <button onClick={() => setDishes([])}>Delete All</button>
      </div>
      
    </div> 
  );
}

export default App;

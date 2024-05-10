import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import axios from "axios";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys,setToys]=useState([])
useEffect(() =>{
 axios.get ("http://localhost:3001/toys")
 .then((response)=> setToys(response.data));


});

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function addaToy(newToy){
    setToys([...toys,newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addaToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;

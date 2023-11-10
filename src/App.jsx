import { useState } from "react";

import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css'
import image from './assets/react-2.svg'
import Greeting from "./Greeting.jsx";



function App() {
  const [persons, setPersons] = useState([
    {id:1, name:"Urmi", title:"Student", age:10},
  {id:2, name:"Rony", title:"Student", age:14},
  {id:3, name:"Imam", title:"Student", age:12},
  {id:4, name:"Rotna", title:"Student", age:20},
  {id:5, name:"Elora", title:"Student", age:24},
  {id:6, name:"Sara", title:"Student", age:82},
  {id:7, name:"Imon", title:"Student", age:30},
  {id:8, name:"Alif", title:"Student", age:34},
  {id:9, name:"Urum", title:"Student", age:42},
  {id:10, name:"John", title:"Student", age:22},
]);
const eventHandler = (name) => {
  console.log(name);
}
const removeCard = (id) => {
  setPersons((prevPersons) => prevPersons.filter((person) => person.id !== id));
};


  return (
      <> 
     
      <Greeting user='Mohsin'/>
         <Header logo="Mohsin Rony"/>
         <img src={image} alt="react" width={50}/>
         <h2>Users({persons.length})</h2>
         <main>
        
         
     {persons.map((person) => (<Card key={person.id} {...person} click={() => eventHandler(person.name)} removeCard={removeCard} 
     />))}
     
</main>
     <Footer copy="Mohsin Rony 2023"/>
      </>
      
  )
}

export default App;

/* To make the removeCard function work, I had to use 'prevPersons', to update state based on the previous state.  */
/* I have used filter method to identify and then remove specific Card(a person) from the 'persons' array when the 'Remove' button is clicked.  */
const Card = ({name, title, age, id, removeCard}) => {
  const handleRemoveClick = () => {
    removeCard(id);
  };
 
 
    return (
      <div className="container">
      <div style={age > 40 ? {background:"lightblue"}: {background:"orange"}} className="card">
     
      <h2>Name: {name}</h2>
      <p>Title: {title}</p>
      <p className={age > 40 ? "light-age" : "pink-age"}>Age: {age}</p>
      <p>ID: {id}</p>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
    </div> 
    
    )
     
  };

  export default Card;
  
    //add 'remove' event;
/* I have added removeCard and handleRemoveClick functions to make it work */
/* I had to add id in the Card to show the id number */
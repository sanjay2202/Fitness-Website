import React, { useState } from "react";
import TodoList from "./TodoList";
const App = () => {
   const [inputList, setInputList] = useState("");

   const [Items, setItems] = useState([]);

   const itemEvents = (event) => {
    setInputList(event.target.value);
   };
   const listOfItems = () =>{
     setItems((oldItems) => {
       return[...oldItems, inputList]
     })
     setInputList("")
   };

   const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrayElements, index) => {
        return index !== id;
      })
    })
  };

   return(
      <div className="main_div">
        <header class="header">
          <div class="left">
            <a href="http://localhost:3003/"><div class="img" /></a>
        

        </div>
        <div class="mid">Nutrition & Fitness</div>
        
        <div class="right">
            <ul class="navbar">
                
                <li><a href="http://localhost:3003/" >Log In</a></li>
                <li><a href="http://localhost:3003/signup">Sign Up</a></li>
                <li><a href="./App.js" class="active" >ToDo List</a></li>

                
                
                
                
              </ul>
          </div>
        </header>
        <hr/>
        <div className="center_div">
          <br />
          <h1 className="t1">Todo List</h1>
          <br />
          <input type="text" placeholder="Add Item." onChange={itemEvents} value={inputList}></input> &nbsp;
          <button className="b1" onClick={listOfItems}> + </button>
          <ol>
            {/* <li className="text2"> {inputList} </li> */}
            {Items.map( (itemvalue, index) => {
              return <TodoList key={index} id={index} onSelect={deleteItem} text  = {itemvalue}/>
            })}
          </ol>
        </div>
        <div class="container5">
          <hr/>
          <h11 class="motiv2">Contact Information:</h11><br/><br/>
          <label class="motiv1">Email: </label> 
          <a href="" class="contactlink">nutrition&fitness@gmail.com</a><br/><br/>
          <label class="motiv1">Contact info: </label>  
          <a href="" class="contactlink">080-4444-5566 /  9771419610</a>
        </div>
      </div>
   )
};

 export default App;
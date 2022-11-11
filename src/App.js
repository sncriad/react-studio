import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [tp, setIndex] = useState(0);
  const [tracker, incAt] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  function handleNextClick(val) {
    setIndex(tp + val);
  }
  function handleInc(ind) {
    var acopy = tracker;
    console.log(acopy);
    acopy[ind] = acopy[ind] + 1;
    console.log(acopy);
    incAt(acopy);
  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div class="div-1">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <div>
            <button onClick={() => {handleNextClick(item.price); handleInc(index)}}>
              {BakeryItem(item, index, item.image)}
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        <p> PRICE:{tp} </p>
        {bakeryData.map((item, index) => (
          <div>  
          {item.name + " " + tracker[index]}
          <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

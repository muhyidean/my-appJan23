
import { useState } from 'react';
import './App.css';

import Products from './containers/Products/Products';

function App() {

  const [count, setCount] = useState(10);

  const [flag, setFlag] = useState(true);

  const [state, setState] = useState({
    name: "dean",
    price: "900"
  })

  const somethingHandler = (num) => {
    console.log("something from APP: " + num)
  }

  const countHandler = () => {
    setCount(count + 1);
  }

  const flagHandler = () => {
    setFlag(!flag);
  }


  return (
    <div >
      <h1>Welcome to WAA</h1>

      <div>
        <label>{state.name}</label>
        <label>{state.price}</label>
        <div>
          <input type="text"
            label={'name'}
            name={'name'}
            onChange={event => setState({ ...state, name: event.target.value })}
            value={state.name}
          />
        </div>
      </div>

      <label> {count} </label>
      <button onClick={countHandler} >add counter</button>
      {flag ? <Products somethingHandler={somethingHandler} /> : null}
      <button onClick={flagHandler}> {flag ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

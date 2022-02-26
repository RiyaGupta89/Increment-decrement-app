import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {incNumber,decNumber} from './actions/index'

function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Increment decrement app</h1>
      <div>
        <button onClick={()=>dispatch(decNumber())} >-</button>
        <input type="text" value={myState} />
        <button onClick={()=>dispatch(incNumber())} >+</button>
      </div>
    </div>
  );
}

export default App;

import Counter from './counter';
import Batsman from './Batsman';
import './App.css'

function App() {
  function handleClick(){
    alert('i am clicked')
  }
  const handleAdd5 =(num)=>{
    const newNum=num+5;
    alert(newNum)
  }

  return (
    <>
      
      <h1>Vite + React</h1>

      <button onClick={handleClick}>click me</button>
      <button onClick={()=>alert('ooooh mg')}>click me</button>
      <button onClick={()=> handleAdd5(8)}>click me</button>

       <Batsman></Batsman>
      <Counter></Counter>
     
      
    </>
  )
}

export default App

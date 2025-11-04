import Counter from './counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import './App.css';
import { Suspense } from 'react';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json());

const fetchFriends= async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


function App() {
  const friendsPromise= fetchFriends();
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
      <Suspense fallback={<h3>Friends are comming...</h3>}>
          <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      
      <Suspense fallback={<h3>Loading...</h3>}>

        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <button onClick={handleClick}>click me</button>
      <button onClick={()=>alert('ooooh mg')}>click me</button>
      <button onClick={()=> handleAdd5(8)}>click me</button>
      
       <Batsman></Batsman>
      <Counter></Counter>
     
      
    </>
  )
}

export default App

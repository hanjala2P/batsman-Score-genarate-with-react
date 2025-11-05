import Counter from './counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import './App.css';
import { Suspense } from 'react';
import Clear from './Cear';
import Posts from './Posts';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json());

const fetchFriends= async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}
const fetchPost= async()=>{
 const res= await fetch("https://jsonplaceholder.typicode.com/posts");
 return res.json();
}


function App() {

  const postPromise=fetchPost();

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
    <Clear></Clear>
      
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

      <Suspense fallback>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>
     
      
    </>
  )
}

export default App

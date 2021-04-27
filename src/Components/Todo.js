import React,{useState, useEffect} from 'react'
import './Todo.css'
import{db}from '../firebase'
import{useHistory}from "react-router-dom"
import { Button } from '@material-ui/core'
import Colock from './Colock'

let unsubscribe =()=>{}
function Todo({user}) {
    const history= useHistory()
    const[text, setText]= useState('');
    const [myTodos, setMyTodos]= useState([]);

    useEffect(()=>{
        if(user){
            const docRef = db.collection('todos').doc(user.uid)
           unsubscribe=  docRef.onSnapshot(docSnap=>{
                if(docSnap.exists){
                    console.log(docSnap.data().todos)
                    setMyTodos(docSnap.data().todos)
                }
                else{
                    console.log("no doc exists")
                }
            })
        }
        else{
            history.push('/login')
        }
       return()=>{
           unsubscribe()

       }
    },[])
    
    // const[text, setText]= useState('');
    const addTodo=()=>{
        db.collection('todos').doc(user.uid).set({
            todos:[...myTodos, text]
        })
        setText("")
    }
    const deleteTodo=(deleteTodo)=>{
        const docRef = db.collection('todos').doc(user.uid)
        docRef.get().then(docSnap=>{
           const result = docSnap.data().todos.filter(todo => todo !== deleteTodo)
            docRef.update({
                todos:result
            })
        })

    }
    return (
        <div className="main center container" style={{maxWidth:"500px"}}>
       <Colock/>
      <h3>Add todos</h3>
     
      <div className="input-field col s6">
           <input type="text" placeholder="Enter Todo" value={text} onChange={(e)=>setText(e.target.value)} />
            <Button  onClick={()=>{addTodo()}}> ADD</Button>
               {/* <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> */}
       </div>
       <ul className="collection">
       {myTodos.map(todo=>{
           return <li className="collection-item" key={todo}>{todo}  <i className="material-icons  right " style={{cursor:'pointer'}} onClick={()=>{deleteTodo(todo)}}>delete</i> </li>
       })}
            
         
    </ul>
        </div>
    )
}

export default Todo

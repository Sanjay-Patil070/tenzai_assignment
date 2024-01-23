import React,{useState}from 'react'
import Icon from '@mui/material/Icon';

import { green } from '@mui/material/colors';

import { Container, TextField} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux'
import { addToDo,deleteToDo,removeToDo } from './actions/Action';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



const ToDo =()=>{

    const [inputData,setInputdata] = useState('');
    const list=useSelector((state)=>state.ToDoReducers.list);
    const dispatch=useDispatch();
   
      return (
        <>
           
           
            <Container>
            <div>To Do List</div>
            <TextField id="filled-basic" label="Add List" variant="filled" 
            value={inputData} 
            onChange={(event)=>setInputdata(event.target.value)}
            />
            <Icon sx={{ color: green[500] }} onClick={()=>dispatch(addToDo(inputData),setInputdata(''))} >add_circle</Icon> 
            {
                list.map((elem)=>{
                return(
                    <div key={elem.id}>
                    <h3>{elem.data}<DeleteIcon onClick={()=>dispatch(deleteToDo(elem.id),setInputdata(''))} /></h3>
                    
                </div>
                )
                
           
            })
        }

            <div>
            <Button variant="contained" onClick={()=>dispatch(removeToDo())}>remove list</Button>

            </div>
            </Container>
            
            
        </>
      )
    }
  

  export default ToDo;
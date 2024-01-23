

// class Action extends React.Component {
//     render() {
//       return (
//         <>

//         </>
//       )
//     }
//   }

//   export default Action

export const addToDo=(data)=>{
    return {
        type:"Add_ToDo",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteToDo=(id)=>{
    return {
        type:"Delete_ToDo",
        id
    }
}

export const removeToDo=()=>{
    return {
        type:"Remove_ToDo"
    }
}



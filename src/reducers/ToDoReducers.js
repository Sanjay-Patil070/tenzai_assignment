//import React from "react";

const initialData = {
  list: [],
};

//const [list,setList]=useState('')

const ToDoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "Add_ToDo": {
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    }
    case "Delete_ToDo": {
        const newList=state.list.filter((elem)=>elem.id!==action.id)
        return {
          ...state,
          list :newList

          
            
          
        };
      }
      case "Remove_ToDo": return {
            ...state,
            list :[]
      }

    default:
      return state;
  }

  //   switch (action.type) {
  //     case "Add_ToDo":
  //

  //       return {
  //
  //   }
};

export default ToDoReducers;

import React from "react";
import { useNavigate } from "react-router";

export default function Todo(props){

    const navigate = useNavigate();

    const onClicked = (id) =>{
        console.log(id);
        navigate("/detailToDo/"+id);
    }

    return(
        <div onClick={()=>{onClicked(props.id)}}>
            <h3>{props.title}</h3>
        </div>
    )
}
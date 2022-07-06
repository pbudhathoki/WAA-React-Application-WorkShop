import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function DetailTodo(props) {
    

    const params = useParams();
    const [todoState,setTodoState]= useState({});

    const fetchTodo = async ()=>{
            console.log("details axios function called:"+ params.id);
            const result = await axios.get('http://localhost:8080/todos/'+ params.id);
            setTodoState(result.data);
    }


    useEffect(()=>{fetchTodo();

    },[params.id]);

    return (
            <div>
                    <h2>Title:{todoState.title}</h2>
                    <h2>Description:{todoState.description}</h2>                                      
                    
            </div>

    )
}
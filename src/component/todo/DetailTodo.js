import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function DetailTodo(props) {

    const params = useParams();

    const [todoState, setTodoState] = useState({});

    const fetchTodo = async ()=>{
        console.log(params.id);
        const result = await axios.get('http://localhost:8080/todos/'+ params.id);
        setTodoState(result.data);
    }


    useEffect(()=>{

    },[params.id]);


    return (
        <div>
            <h4>{todoState.title}</h4>
            <h4>{todoState.description}</h4>
        </div>
    )
}
import React from "react";
import { Route, Routes } from "react-router";
import Todo from "../todo/Todo";
import Todos from "../todo/Todos";
import User from "../user/User";
import DetailTodo from "../todo/DetailTodo";
export default function MyRoutes(){

    return (
        <div>
            <Routes>
                <Route
                    path="/todos"
                    element={<Todos />}
                />
                <Route
                    path="/users"
                    element={<User />}
                />
                <Route
                 path="/detailToDo" 
                 element={<DetailTodo />}
                />
            </Routes>
        </div>
    )
}
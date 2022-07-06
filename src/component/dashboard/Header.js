import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div>
            <ul>
                <li>
                    <Link to='/todos'> Todo's</Link>
                </li>
                <li>
                    <Link to='/users'> Users</Link>
                </li>
            </ul>
            

        </div>

    )
}
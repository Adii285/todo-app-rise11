import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return ( 
        <div  className=' flex-grow'>
            <nav>
                <ul style={{backgroundColor:'#1B1B1B', color:'white'}} className='flex gap-3 justify-between p-3 bg-slate-400 rounded-lg shadow-2xl'>
                    <li >
                        <NavLink  to="/">All Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/active">Active</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed">Completed</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;
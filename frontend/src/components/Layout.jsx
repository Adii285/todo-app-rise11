import React from 'react';
import TaskIndicator from './TaskIndicator';
import CreateTask from './createTask/CreateTask';
import { Outlet } from 'react-router-dom';
function Layout() {
    return (
        <div >
            <div  className='flex flex-col md:flex-row md:justify-between'>
                <CreateTask />
                <div style={{backgroundColor:'#D0F4F0'}} className='task-container w-auto mx-5 md:w-1/3 mt-3'>
                    <div style={{backgroundColor:'#D0F4F0'}} className='outlet'>
                        <Outlet />
                    </div>
                    <div style={{backgroundColor:'#D0F4F0'}} className='indicator'>
                        <TaskIndicator />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Layout;
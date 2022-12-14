import React from 'react';
import {TaskType} from './App';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

export const Todolist = (props:TodolistPropsType ) => {
    return (
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input key={props.tasks[0].id} type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                    <li><input key={props.tasks[1].id}type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                    <li><input key={props.tasks[2].id} type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    );
};

//export default Todolist;



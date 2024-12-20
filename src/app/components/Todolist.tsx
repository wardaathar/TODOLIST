
"use client"
import React, { useState } from 'react';

const Todolist: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    return (
       <div>
            <header className="bg-slate-800 text-white">
                <div className="max-w-4xl mx-auto text-center ">
                    <h1 className="text-6 font-bold fonts-serif"> Todolist By Wardah Athar</h1>
                    <p className="fonts-serif mt-5">
                        {""} Organize Your Work With Our Next Js Todolist App.
                    </p>
                </div>
             </header>
            

            <div className='bg-white '> 
                <main className="flex-grow flex items-center justify-center">
                <div className="max-w-md mx-auto  text-black p-4 bg-slate-500 rounded-lg shadow-md">
                    <div className="mb-4">
                        <div className='flex'>
                            <h1 className='font-serif'>Todo List</h1>
                            
                            <input
                                type="text"
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                                placeholder="Add a new todo"
                            />


                            <button className='hover:bg-slate-600 bg-blue-800 rounded text-white' onClick={addTodo}>Add</button>
                            <ul>
                                {todos.map((todo, index) => (
                                    <li key={index}>{todo}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                  <div/>
                </div>
                </main>
            </div>
            </div>


            );
};

            export default Todolist;
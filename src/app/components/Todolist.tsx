
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
            

             <div className="bg-white min-h-screen">
  <main className="flex-grow flex items-center justify-center">
    <div className="max-w-md mx-auto text-black p-6 bg-slate-500 rounded-lg shadow-md">
      <div className="mb-4">
        <h1 className="font-serif text-center text-2xl mb-4">Todo List</h1>
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="flex-grow p-2 rounded border border-gray-300"
          />
          <button
            className="hover:bg-slate-600 bg-blue-800 text-white px-4 py-2 rounded"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul className="mt-4 list-disc pl-5">
          {todos.map((todo, index) => (
            <li key={index} className="text-white">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
</div>

            </div>
        


            );
};

            export default Todolist;
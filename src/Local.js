import React, { useState } from 'react';

const Local = () => {
   const [name, setName] = useState('');

   const handle = () => {
      localStorage.setItem('Name', name );
   };
   const remove = () => {
      localStorage.removeItem('Name');
   };
   return (
      <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div>
   );
};
export default Local;
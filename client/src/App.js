import React from 'react';
import './App.css';

    function App() {
      fetch('http://localhost:5000/api/courses')
      .then((response) => response.json())
       .then((data) => console.log(data));
       return (
     <div>Header</div>
       );
     }


export default App;


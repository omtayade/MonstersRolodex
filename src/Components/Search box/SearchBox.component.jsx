import React from 'react';
import './SearchBox.styles.css';

export const SearchBox =({placeholder,handleChange}) =>(
    <input type ='search'
    className='search'
     placeholder={placeholder} 
     onChange= {handleChange}>

     </input>
);
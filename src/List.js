import React from 'react';

function List(props){
  return(
    <ul>

      {
        //Untuk looping
        props.items.map((item, index)=>
        <li key={index}>{item}</li>
        )
      }
    </ul>
  )
}

export default List;

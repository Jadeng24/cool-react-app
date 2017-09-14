import React, { Component } from 'react';


function Completed(props) {

    return (
       <div className='Completed'>
        <ul>
            {
                props.completedList.map((item, i, arr) => {
                    return (
                        <li key={i}>{item}</li>
                    )
                })
            }
        </ul>
      </div> 
    )
}

export default Completed;
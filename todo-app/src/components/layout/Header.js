import React from 'react';

function Header(){
    return (
        <header style= {header}> 
            <h1> TodoList </h1>
        </header>
    )
}

const header= {
    background:'grey',
    color:'white',
    textAlign:'center',
    padding:'5px'

}
export default Header
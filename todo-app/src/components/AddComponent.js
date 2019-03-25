import React, { Component } from 'react';

class AddComponent extends Component {
    render() {
        return (
            <form style={{display:'flex'}}>
                <input
                type="text"
                name="title"
                placeholder="Add Todo ..."
                style={{flex:'10',padding:'5px'}}
                />
                <input
                type="submit"
                name="title"
                className="btn"
                value="submit"
                style={{flex:'2'}}
                />

           </form>
        );
    }
}

export default AddComponent;
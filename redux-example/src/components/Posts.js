import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Actions/PostAction';
import PropTypes from 'prop-types';

class Posts extends Component {
   
    componentWillMount(){
        this.props.fetchPost();
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost); //unshift() will push the item objects into items...or post to posts in the first row...
        }
    }

    render() {

        const postItems = this.props.posts.map(post=>(
           <div key= {post.id}> 
                <h3> {post.title} </h3>
                <p>{post.body}</p>
           </div> 
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
             </div>
        );
    }
}

//PropTypes
Posts.PropTypes = {
    fetchPost : PropTypes.func.isRequired, // fetchPost is a property and type is function
    posts :  PropTypes.array.isRequired, //posts is a property in this componets and type is array
    newPost : PropTypes.object
}

// we can get the state from redux store and maps as a props in the component
//it takes "state" as a parameter
const MapStateToProps = state => ({
    posts: state.posts.items,//"state.posts is named as a object in 'RootReducer' "
    newPost:state.posts.item
});

export default connect(MapStateToProps,{fetchPost}) (Posts);
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { throwStatement } from '@babel/types'
import { deletePost } from '../actions/postActions'
class Post extends Component {
    handleClick = (e) =>{
        e.preventDefault();
        let id = this.props.match.params.post_id
        this.props.deletePost(id)
        this.props.history.push('/blog')
    }
    render() {
     
         const post = this.props.post ? (
             <div className="post card">
               <div className="card-content">
               <h4 className="card-title">{this.props.post.title}</h4>
                 <p className=''>{this.props.post.body}</p>
                <div className="" onClick={throwStatement.handle}>
                    <button className='btn ' onClick={ this.handleClick } >Delete</button>
                </div>
               </div>
             </div>
           ) : (
             <div className="center">Loading...</div>
         )
        return (
            <div className='container'>
              {post}
            </div>
        )
    }
}
const mapStateProps = (state,ownProps)=>{
    let id = ownProps.match.params.post_id
    
    return {
        post : state.posts.find( post => post.id === id ) 
    }
}

const mapDispatchProps = (dispatch) =>{
    return {
        deletePost : (id) =>{ dispatch( deletePost(id) ) }
    }
}
export default connect(mapStateProps,mapDispatchProps)(Post)
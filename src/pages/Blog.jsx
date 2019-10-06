import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Star from '../assets/star.png'
import { connect } from 'react-redux'
class Blog extends Component {

  render() {
    const { posts } = this.props
    console.log(posts)
    const postList = posts.length ? (
      posts.map(post=>{
        return (
          <div className="post  card" key={post.id}>
            <img className='star' src={Star} alt="Star"/>
            <div className="card-content">
              <Link to={'/post/'+ post.id} >
                <span className=" card-title">
                    post Title
                </span>
              </Link>
              <p>{ post.body }</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Posts yet</div>
    );
    return (
      <div className='container mt-5'>
        {postList}
      </div>
    )
  }
 }

 const mapStateToProps = (state) =>{
  return {
    posts : state.posts
  }
 }
 export default connect(mapStateToProps)(Blog)
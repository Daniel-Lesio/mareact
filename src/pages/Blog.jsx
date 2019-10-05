import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Star from '../assets/star.png'
export default class Blog extends Component {
state = {
  posts : []
}
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
        this.setState({
          posts : res.data.slice(0,10)
        })
      })
  }
  render() {
    const {posts} = this.state
    const postList = posts.length ? (
      posts.map(post=>{
        return (
          <div className="post  card" key={post.id}>
            <img className='star' src={Star} alt="Star image"/>
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

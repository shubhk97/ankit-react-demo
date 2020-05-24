import React, { Component } from 'react';
import Main from '../layouts/Main';
import store from 'store';

class Index extends Component{
  constructor(props){
    super(props)

    const posts = store.get('post',[]);
    this.state = {
      posts: posts
    }
  }

  render(){
    return (
      <Main>
        <label style={{
          fontWeight: 'bold',
          fontSize: '30px'
        }}>All Post</label>
        {
          this.state.posts.map((eachPost, key) => {
            return (
              <div key={key} style={{
                margin: '10px',
                padding: '10px',
                borderStyle: 'solid'
              }}>
                <label
                  style={{
                    fontSize: '20px'
                  }}>{eachPost.postTitle}</label>

                  <p>{eachPost.postContent}</p>
              </div>
            )
          })
        }
      </Main>
    )
  }
}

export default Index;
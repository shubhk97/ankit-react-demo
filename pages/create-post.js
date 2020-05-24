import React, { Component } from 'react'
import Main from '../layouts/Main';
import store from 'store'
import Router from 'next/router';

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postTitle: "",
            postContent: ""
        }
    }

    render() {
        return (
            <Main>
                <label
                    style={{
                        fontWeight: 'bold',
                        fontSize: '30px'
                    }}>Create Post</label>
                <div>
                    <input
                        style={{
                            width: '100%',
                            
                        }}
                        onChange={(event) => {
                            this.setState({postTitle: event.target.value})
                        }}
                        id="post-title"></input>
                    <textarea
                        style={{
                            width: '100%',
                            marginTop: '10px'
                        }}
                        onChange={(event) => {
                            this.setState({postContent: event.target.value})
                        }}
                        id="post-content"></textarea>
                        <button
                            onClick={(event) => {
                                const post = store.get('post',[]);
                                const myCurrentPost = {
                                    postTitle: this.state.postTitle,
                                    postContent: this.state.postContent
                                }
                                post.push(myCurrentPost)

                                // post.push({
                                //     postTitle: this.state.postTitle,
                                //     postContent: this.state.postContent
                                // })
                                store.set('post',post);
                                console.log('Post Created');
                                Router.push('/')
                            }}>Create</button>
                </div>
            </Main>
        );
    }
}

export default CreatePost;
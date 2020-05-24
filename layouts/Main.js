import React, { Component } from 'react';
import Router from 'next/router';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    onHomeClick(event) {
        Router.push('/');
    }

    render() {
        return (
            <div>
                <div style={{
                    width: '100%',
                    backgroundColor: 'purple',
                    display: 'flex'
                }}>

                    <label
                        style={{
                            color: 'white',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={this.onHomeClick}
                    >Home</label>

                    <label
                        style={{
                            color: 'white',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                        onClick={(event) => {
                            Router.push('/create-post')
                        }}
                        >Create Post</label>
                </div>
                <div style={{
                    padding: '10px'
                }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
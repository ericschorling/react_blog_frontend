import React from 'react'

export default class BlogEntry extends React.Component {
    state ={
        user: '',
        post:''
    }
    _handleChange = (text) =>{
        this.setState({
            post: text
        })
    }
    _handlePostClick = async () =>{
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: 'eschor', blog: this.state.post })
        };
        await fetch('http://127.0.0.1:3333', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        console.log('id',this.state.postId)
    }
    render (){
        return (
            <form>
                <input value={this.state.post} onChange={event=>this._handleChange(event.target.value)} type="textbox"></input>
                <button type="button" onClick={this._handlePostClick}>Post</button>
            </form>
        )
    }
}
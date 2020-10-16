import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

const CommentForm = (props) => {
    const [theComment, setComment] = useState('')
    const [postId, setPostId] = useState('')
    const {post_id} = useParams()
    const _handleClick = async () =>{
         // Simple POST request with a JSON body using fetch
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ blog_id: post_id, comment: theComment })
        };
        await fetch('http://127.0.0.1:3333/comment', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
        console.log('id',postId)
    }
    const _handleChange = (comment) =>{
        setComment(comment)
    }
    return (
        <form>
            <input type="text" value={theComment} onChange={event =>_handleChange(event.target.value)}></input>
            <button type="button" onClick={_handleClick}>Comment</button>
        </form>
    )
}

export default CommentForm
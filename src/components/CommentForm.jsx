import React, {useState, useEvent, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const CommentForm = (props) => {
    const [theComment, setComment] = useState('')
    const [postId, setPostId] = useState('')
    const {post_id} = useParams()
    const _handleClick = async (e) =>{
        console.log('clicked' )
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ blog_id: post_id, comment: theComment })
        };
        const response = await fetch('http://127.0.0.1:3333/comment', requestOptions)
        const data = await response.json()
        setComment('')
        console.log('clicked' ,data)
        console.log('id',postId)
        (async function (){
        const responseTwo =  fetch (`http://127.0.0.1:3333/comment/${post_id}`)
        const commentsTwo =  responseTwo.json()
            props.getComments(commentsTwo)
            setComment('')
            console.log(commentsTwo)
        })();
         
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
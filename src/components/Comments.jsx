import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Comments =(props) =>{
    const {post_id} = useParams()
    const [comments, getComments] = useState([])
    
    useEffect(()=>  {
        const getInfo = async () =>{
            const response = await fetch (`http://127.0.0.1:3333/comment/${post_id}`)
            const comments = await response.json()
            getComments(comments)
    };getInfo();},[getComments, post_id]);
    console.log(comments)
    return (
        <div>
            <p>Stuff</p>
            <ul style={{listStyle:'none'}}>
                {comments.map((comment, index)=>{
                    return <li key={index}>{comment.comment}</li>
                }
                )}
            </ul>
        </div>
    )
}

export default Comments
import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

const PostPage = (props)=>{
    const {post_id} = useParams()
    const [post, getPost] = useState({})
    useEffect(()=>  {
        const getInfo = async () =>{
            const response = await fetch (`http://127.0.0.1:3333/post/${post_id}`)
            const post = await response.json()
            getPost(post)
    };getInfo();},[getPost, post_id]);
    // console.log(post[0])
    // const getInfo = async () =>{
    //     const response = await fetch (`http://127.0.0.1:3333/post/${post_id}`)
    //     const post = await response.json()
    //     getPost(post)
    // }
    // getInfo()
    console.log(post)
    return (
        <>
            <div>
                <p></p>
                <p></p>
            </div>
            {/* <div>
                <h1>Post</h1>
                <h1>{post.user_id}</h1>
                <p>{post.blog}</p>
            </div> */}
            {/* <div>
                {post.comments.map((comment, index)=>{
                    return <li key={index}>{comment.comment}</li>
                })}
            </div> */}
        </>
    )
}

export default PostPage
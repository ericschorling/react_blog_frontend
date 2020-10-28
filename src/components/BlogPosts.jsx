import React from 'react'
import {Route, Link} from 'react-router-dom'
import PostPage from './PostPage'
import BlogEntry from './BlogEntry'
import CommentForm from './CommentForm'

export default class BlogPosts extends React.Component {
    state ={
        posts: [],
        user: '',
        postId: ''
    }

    async componentDidMount () {
        const response = await fetch('http://127.0.0.1:3333')
        const blogs = await response.json()
        this.setState({
            posts: blogs
        })
    }
    
    render () { 
        const { posts } = this.state
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/blogentry">Add Blog</Link>
                <Route exact path="/">
                    {posts.map((post, index)=>{
                        return <li key={index}><Link to={`/post/${post.id}`}>{post.user_id} : {post.blog}</Link></li>
                    })}
                </Route>
                <Route path="/blogentry" >
                    <BlogEntry />
                </Route>
                <Route path="/post/:post_id">
                    <PostPage />
                </Route>
            </>
        )
    }
}
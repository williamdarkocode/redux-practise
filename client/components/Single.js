import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
    render() {
        const postID = this.props.params.postid;
        const i = this.props.posts.findIndex((post) => 
        post.code === this.props.params.postid);
        
        const post = this.props.posts[i];
        console.log("index: " + i);
        console.log(post);

        const postComments = this.props.comments[postID] || [];
        // index of post
        // actual post
        return(
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
            </div>
        );
    }
}
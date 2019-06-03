import React from 'react';


export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.renderComments = this.renderComments.bind(this);
    }

    renderComments(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" 
                    onClick={this.props.removeComment.bind(null, this.props.params.postid, i)}>&times;
                    </button>
                </p>
            </div>
        )
    }

    handleSubmit (e) {
        e.preventDefault(); // used to prevent defualt aciton that would otherwise occur if prevent wasnt added
        // console.log("submitting form...");
        // console.log(this.refs);
        //es6 destructuring
        const { postid } = this.props.params;
        // const postId = this.props.params.postid;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        // console.log(postId, comment, author);
        this.props.addComment(postid, author, comment);
        this.refs.commentForm.reset();
    }

    render() {

        return (
         <div className="comments">
             {this.props.postComments.map(this.renderComments)}
             {/* remember to .bind(this) to be able to this.refs */}
             <form ref="commentForm" className='comment-form' onSubmit={this.handleSubmit.bind(this)}> 
                 <input type="text" ref="author" placeholder="author"/>
                 <input type="text" ref="comment" placeholder="comment"/>
                 <input type="submit" hidden={true}/>
             </form>
         </div>   
        )
    }
}

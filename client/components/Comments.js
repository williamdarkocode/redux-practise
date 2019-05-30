import React from 'react';


export default class Comments extends React.Component {
    renderComments(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault(); // used to prevent defualt aciton that would otherwise occur if prevent wasnt added
        console.log("submitting form...");
    }

    render() {

        return (
         <div className="comments">
             {this.props.postComments.map(this.renderComments)}
             <form ref="commentForm" className='comment-form' onSubmit={this.handleSubmit}>
                 <input type="text" ref="author" placeholder="author"/>
                 <input type="text" ref="comment" placeholder="comment"/>
                 <input type="submit" hidden={true}/>
             </form>
         </div>   
        )
    }
}

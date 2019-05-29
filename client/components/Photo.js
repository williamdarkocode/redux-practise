import React from 'React';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';


const Photo = React.createClass({
    render() {
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${this.props.post.id}`}>
                        <img src={this.props.post.display_src} alt={this.props.post.caption} className="grid-photo" />
                    </Link>

                    <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={this.props.post.likes} 
                        className="likes-heart">
                        {this.props.post.likes}
                        </span>
                    </CSSTransitionGroup>
                </div>

                <figcaption>
                    <p>{this.props.post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes">&hearts;</button>
                        <Link to={`/view/${this.props.post.code}`}> 
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {this.props.comments[this.props.post.code]}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
})

export default Photo;
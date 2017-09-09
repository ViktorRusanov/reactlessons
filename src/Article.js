import React, { Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            isShowComments: false
        };
    }
    render() {
        const { article } = this.props;
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody()}

                {this.getComments()}
            </div>
        );
    }
    getBody() {
        if (!this.state.isOpen) return null;
        return (
            <div>
                <p>{this.props.article.text}</p>
                <button onClick={this.handleClickOnBtn}>{this.getBtnText()}</button>
            </div>
        )
    }
    getBtnText() {
        if(!this.state.isShowComments) return "Show comments"
        return "Hide comments"
    }
    getComments() {
        if(!this.state.isShowComments) return null
        return <CommentList comments={this.props.article.comments} />
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    handleClickOnBtn = () => {
        this.setState({
            isShowComments: !this.state.isShowComments
        })
    }
}

export default Article;
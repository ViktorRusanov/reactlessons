import React, { Component } from 'react';

export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        isOpen: true,
        openArticleId: null
    };
    toggleOpen = (openArticleId) => () => this.setState({ openArticleId, isOpen: !this.state.isOpen });
    render() {
        return <OriginalComponent {...this.props}
                                  openArticleId={this.state.openArticleId}
                                  toggleOpen={this.toggleOpen}
                                  isOpen={this.state.isOpen} />
    }
}

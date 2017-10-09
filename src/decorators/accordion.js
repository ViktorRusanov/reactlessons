import React, { Component } from 'react';

export default (OriginalComponent) => class AccordionDecorator extends Component {
    state = {
        openItemId: null
    };
    render() {
        return <OriginalComponent {...this.props}
                                  openItemId={this.state.openItemId}
                                  toggleOpenItem={this.toggleOpenItem} />
    }
    toggleOpenItem = openItemId => () => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        });
    }
}

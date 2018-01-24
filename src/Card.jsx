import React, { Component } from 'react';


class Card extends Component{
    render() {
        return <div>{this.props.children}</div>;
    }
};

export default Card;
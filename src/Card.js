import React, { Component } from 'react';



class Card extends Component{

    constructor(props) {
        super(props);


        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.props.onClick(this.props.num);
    }



    render() {
        return (

                <tr>{this.props.children}</tr>

        )
    }
};

export default Card;
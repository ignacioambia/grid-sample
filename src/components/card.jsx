import React, { Component } from "react";

class Card extends Component {
    state = {
        extraClass : ""
    };

    changeShape = ()=>{

        let extraClass  = '';

        switch(this.state.extraClass){

            case '':
                extraClass = 'horizontal';
            break;

            case 'horizontal':
                extraClass = 'vertical';
            break;

            case 'vertical':
                extraClass = 'big';
            break;

            case 'big':
                extraClass = '';
            break;

        }

        this.setState({extraClass});
    }

    render() {
        const {index} = this.props;
        const {extraClass} = this.state;
        return <div onClick={this.changeShape} className={"grid-item "+ extraClass}>{index}</div>;
    }
}

export default Card;

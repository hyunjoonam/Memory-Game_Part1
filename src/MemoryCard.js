import React, { Component } from 'react';
import './MemoryCard.css';

// import { withRouter }


class MemoryCard extends Component {
    // constructor(){
    //     super();
    //     this.state = { isFlipped: false };
    // }
    
    // clickHandler = () => {
    //     this.setState(
    //     { isFlipped: !this.state.isFlipped }
    //     );
    // }

// takeMeToFoo() {
//         this.propr.history.push('/foo');
// }

    render() {
        let memoryCardInnerClass = "MemoryCardInner";
        if (this.props.isFlipped) {
            memoryCardInnerClass += ' flipped';
        }
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
            {/*  ex))) <div className="MemoryCard" onClick={this.takeMEToFoo.bind(this)}> */}
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" />
                    </div>
                    <div className="MemoryCardFront">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;

// ex))) export default withRouter(MemoryCard);

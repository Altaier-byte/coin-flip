import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from './helpers'

class CoinContainer extends Component{
    
    static defaultProps = {
       coins:[ 
        {side: 'heads', imgSrc: "https://s3.amazonaws.com/ngccoin-production/world-coin-price-guide/87909f.jpg" },
        {side: 'tails', imgSrc: "https://s3.amazonaws.com/ngccoin-production/world-coin-price-guide/87909b.jpg" }
    ]
    }


    constructor(props){
        super(props)
        this.state ={
            curCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
         this.handleClick = this.handleClick.bind(this) 

    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st =>{
            return {
                curCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails +(newCoin.side === "tails" ? 1 : 0)
            }
        });

    }

    handleClick(e){
        this.flipCoin();
    }

    render(){
        return(
            <div className="CoinContainer">
                <h2> Let's Flip A Coin!!!</h2>
               
                {this.state.curCoin && <Coin info={this.state.curCoin} />}
                <button onClick={this.handleClick}>Flip A Coin</button>
                <p> Out of {this.state.nFlips}, There have been 
                {this.state.nHeads} {' '} heads and {this.state.nTails} tails 😉. 
                </p>
            </div>
        )
    }
}

export default CoinContainer;
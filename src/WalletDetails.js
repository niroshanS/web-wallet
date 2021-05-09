import React from 'react'
import { ethers } from 'ethers';


export default class WalletDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wallet: this.props.wallet,
            balance: 0
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            async () => await this.getBalance(),
            10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    async getBalance() {
        console.log("getting balance");
        const balance = await this.state.wallet.getBalance();
        this.setState({ balance: ethers.utils.formatUnits(balance, 18) })
    }


    render() {
        return (
            <div>
                Your address is {this.state.wallet.address} and your balance is {this.state.balance} ETH
            </div>
        )
    }
}
import React from 'react'
import { Wallet } from '@ethersproject/wallet';
import { ethers, providers } from 'ethers';
import WalletDetails from './WalletDetails';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address: undefined,
      wallet: undefined
    }
  }

  async createWallet() {
    if (typeof this.state.wallet !== 'undefined') {
      return;
    }
    var wallet = Wallet.createRandom();
    this.setState({ wallet: wallet.connect(new providers.JsonRpcProvider()) })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Your Web Wallet
        </header>
        {typeof this.state.wallet == 'undefined' && <button onClick={() => this.createWallet()}>Click here to create your wallet</button>}
        {typeof this.state.wallet !== 'undefined' && <WalletDetails wallet={this.state.wallet}/>}
      </div>
    );
  }
}

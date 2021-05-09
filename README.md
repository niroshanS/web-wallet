# 🚧👷🏽‍♀️Under construction👷🏽‍♀️🚧

# Web based social recovery wallet
An attempt at a web based social recovery wallet. This is still very much a WIP

## How to run
Check out the project and run

 `npm install`

Then in a separate terminal navigate to the project dir and run

`npx hardhat node`

Then in the original terminal run

`npm start`

## How to create a wallet
Once the app starts all you need to do is hit the create button to create a wallet. This will create an [HD wallet](https://github.com/ethereumbook/ethereumbook/blob/develop/05wallets.asciidoc#hd_wallets) with a random 12 word mnemonic. The keys are not really stored in any secure manner so this is something to be mindful of. 

From here if you have something like Metamask pointing to your local network then you can import an account via a private key from the terminal that ran the `hardhat node` command. Then you can send ETH to the address shown and you should see the balance update in a few seconds!




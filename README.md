# Proof of Existence Dapp
Proof of Existence Dapp for Consensys Developer Program 2018-19

This dapp allows users with a web3 enabled browser (or web3 injecting plugin like Metamask) to upload a time-stamped image/video to prove existence of some information. Files are uploaded to IPFS, and are therefore public.

Users can add a file, input tags separated by commas, and on clicking Upload, a link to their uploaded proof is displayed in the User History section.

The dapp detects users account address, and fetches previously uploaded proofs along with their tags.

Instructions to run the dapp:

1. Clone the repo by using `git clone https://github.com/krtk6160/finalProject.git`.
2. Install dependencies by using `npm install`.
3. Run ganache-cli by using `ganache-cli`. [If not installed, run `npm install ganache-cli`]
4. Run `truffle migrate` and replace line number 63 of the index.html file with the address of the contract.
5. Run `npm run dev` in the root directory of the project (named finalProject), it will automatically open a browser window to `http://localhost:3000`.
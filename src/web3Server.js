import Web3 from "web3";
let  web3;
if(typeof web3 !== 'undefined') {
   web3 = new Web3(web3.currentProvider)
}else{
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

const getWeb3 = () =>
    new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            if(window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable();
                    resolve(web3);
                } catch (err) {
                    reject(err);
                }
            } else if (window.web3) {
                const web3 = window.web3;
                console.log("Injected web3 detected.");
                resolve(web3)
            } else {
                const provider = new Web3.providers.HttpProvider(
                    'http://127.0.0.1:8545'
                );
                const web3 = new Web3(provider);
                console.log("No web3 instace injected, using Infura/Local web3.");
                resolve(web3);
            }
        })
    })

const getWallets = () => 
    new Promise((resolve, reject) => {
        web3.eth.getAccounts((err, res) => {
            if (!err) return resolve(res)
            reject(err)
        })
    })

export { getWallets, getWeb3 }
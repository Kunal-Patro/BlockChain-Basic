class Block{
    constructor(){
        this.index = 0;
        this.previousHash = '';  // Hash of previous block
        this.hash = '';         // Hash of current block i.e. hash(previousHash + data)
        this.nonce = 0;
        this.transactions = [];
    }
}
module.exports = Block;

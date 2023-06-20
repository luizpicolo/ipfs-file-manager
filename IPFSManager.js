import { create } from 'ipfs';

export default class IPFSManager {
  async initIPFS() {
    this.node = await create();
    console.log('IPFS node is ready');
  }

  async closeIPFS() {
    if (this.node) {
      await this.node.stop();
      console.log('IPFS node connection closed');
    }
  }
}
import { create } from 'ipfs';
import { readFile } from 'fs/promises';

class IPFSFileManager {
  constructor() {
    this.node = null;
  }

  async initIPFS() {
    this.node = await create();
    console.log('IPFS node is ready');
  }

  async addFileToIPFS(filePath) {
    try {
      await this.initIPFS();
      const fileData = await this.readFile(filePath);
      const results = await this.node.add({ content: fileData });
      const cid = results.cid.toString();
      console.log('File added to IPFS with CID:', cid);
    } catch (error) {
      console.error('Failed to add the file to IPFS', error);
    } finally {
      this.closeIPFS();
    }
  }

  async readFile(filePath) {
    try {
      return await readFile(filePath);
    } catch (error) {
      throw new Error(`Failed to read the file: ${error}`);
    }
  }

  async closeIPFS() {
    if (this.node) {
      await this.node.stop();
      console.log('IPFS node connection closed');
    }
  }
}

const filePath = './image.jpg';
const ipfsFileManager = new IPFSFileManager();
ipfsFileManager.addFileToIPFS(filePath);

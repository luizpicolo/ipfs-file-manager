import { create } from 'ipfs';
import { readFile } from 'fs/promises';

class IPFSFileManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.node = null;
  }

  async initIPFS() {
    this.node = await create();
    console.log('IPFS node is ready');
  }

  async readFile() {
    try {
      const data = await readFile(this.filePath);
      return data;
    } catch (error) {
      throw new Error(`Failed to read the file: ${error}`);
    }
  }

  async addFileToIPFS() {
    try {
      await this.initIPFS();
      const fileData = await this.readFile();
      const results = await this.node.add({ content: fileData });
      const cid = results.cid.toString();
      this.closeIPFS();
      console.log('File added to IPFS with CID:', cid);
    } catch (error) {
      console.error('Failed to add the file to IPFS', error);
    }
  }

  async closeIPFS() {
    if (this.node) {
      await this.node.stop();
      console.log('IPFS node connection closed');
    }
  }
}

const filePath = './file.txt';
const ipfsFileManager = new IPFSFileManager(filePath);
ipfsFileManager.addFileToIPFS();

import { create } from 'ipfs';
import { readFile as _readFile } from 'fs';

class IPFSFileManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.node = null;
  }

  async initIPFS() {
    this.node = await create();
    console.log('IPFS node is ready');
  }

  readFile() {
    return new Promise((resolve, reject) => {
      _readFile(this.filePath, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
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
//ipfsFileManager.closeIPFS();

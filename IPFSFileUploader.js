import { readFile } from 'fs/promises';
import IPFSManager from './IPFSManager.js';

export default class IPFSFileUploader extends IPFSManager {
  constructor() {
    super();
    this.node = null;
  }

  async uploadFileToIPFS(filePath) {
    try {
      await this.initIPFS();
      const fileData = await this.readFile(filePath);
      const results = await this.node.add({ content: fileData });
      const cid = results.cid.toString();
      console.log('File uploaded to IPFS with CID:', cid);
    } catch (error) {
      console.error('Failed to upload the file to IPFS', error);
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
}
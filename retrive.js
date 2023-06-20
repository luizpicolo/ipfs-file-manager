import { create } from 'ipfs';
import { writeFile } from 'fs/promises';

class IPFSFileManager {
  constructor() {
    this.node = null;
  }

  async initIPFS() {
    this.node = await create();
    console.log('IPFS node is ready');
  }

  async retrieveFileFromIPFS(cid, filepath) {
    try {
      await this.initIPFS();

      const chunks = [];
      for await (const chunk of this.node.cat(this.cid)) {
        chunks.push(chunk);
      }
      const fileData = Buffer.concat(chunks);

      // Save the file data to a local file
      const filePath = `./retrievedFile.pdf`;
      await this.saveFileToLocal(filePath, fileData);

      this.closeIPFS();
      console.log('File retrieved from IPFS and saved as:', filePath);
    } catch (error) {
      console.error('Failed to retrieve the file from IPFS', error);
    }
  }

  async saveFileToLocal(filePath, fileData) {
    try {
      await writeFile(filePath, fileData);
    } catch (error) {
      console.error('Failed to save the file locally', error);
      throw error;
    }
  }

  async closeIPFS() {
    if (this.node) {
      await this.node.stop();
      console.log('IPFS node connection closed');
    }
  }
}

const cid = 'QmQgGxzWnzjCfouxRiozBiEG3wcsuJGWjtHjv3wurVbJ9s'; // Replace with the CID of the file you want to retrieve
const ipfsFileManager = new IPFSFileManager(cid);
ipfsFileManager.retrieveFileFromIPFS();

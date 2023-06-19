import { create } from 'ipfs';
import { writeFileSync } from 'fs';

class IPFSFileManager {
  constructor(cid) {
    this.cid = cid;
    this.node = null;
  }

  async initIPFS() {
    this.node = await create();
    console.log('IPFS node is ready');
  }

  async retrieveFileFromIPFS() {
    try {
      await this.initIPFS();
      const chunks = [];
      for await (const chunk of this.node.cat(this.cid)) {
        chunks.push(chunk);
      }
      const fileData = Buffer.concat(chunks);

      // Save the file data to a local file
      const filePath = `./retrievedFile.txt`;
      writeFileSync(filePath, fileData);

      console.log('File retrieved from IPFS and saved as:', filePath);
    } catch (error) {
      console.error('Failed to retrieve the file from IPFS', error);
    }
  }
}

const cid = 'QmQzHxipWRHw8xmR8nwbiYasxQzKMh7rdwYwDxpyuoS9jX'; // Replace with the CID of the file you want to retrieve
const ipfsFileManager = new IPFSFileManager(cid);
ipfsFileManager.retrieveFileFromIPFS();

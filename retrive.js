import { create } from 'ipfs';
import { writeFile } from 'fs/promises';
import { fileTypeFromBuffer } from 'file-type';

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
      for await (const chunk of this.node.cat(cid)) {
        chunks.push(chunk);
      }
      const fileData = Buffer.concat(chunks);

      // Determine the file extension based on the MIME type
      const { mime } = await this.getfileTypeFromFile(fileData);
      const fileExtension = this.getFileExtension(mime);

      // Save the file data to a local file with the appropriate extension
      const filePath = `${filepath}.${fileExtension}`;
      await this.saveFileToLocal(filePath, fileData);

      console.log('File retrieved from IPFS and saved as:', filePath);
    } catch (error) {
      console.error('Failed to retrieve the file from IPFS', error);
    } finally {
      this.closeIPFS();
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

  async getfileTypeFromFile(fileData) {
    try {
      return fileTypeFromBuffer(fileData);
    } catch (error) {
      console.error('Failed to determine the file type', error);
      throw error;
    }
  }

  getFileExtension(mimeType) {
    // Map commonly used MIME types to file extensions
    const extensionMap = {
      'application/pdf': 'pdf',
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'text/plain': 'txt',
      // Add more MIME types and extensions as needed
    };

    // Return the corresponding extension if available, otherwise fallback to 'dat'
    return extensionMap[mimeType] || 'dat';
  }

  async closeIPFS() {
    if (this.node) {
      await this.node.stop();
      console.log('IPFS node connection closed');
    }
  }
}

const cid = 'QmZ6h18zefo1DEEN5QC3WberbAFAkhvKmhEF6eJou6TC3h'; // Replace with the CID of the file you want to retrieve
const filepath = './retrievedFile'; // Specify the file path without the extension
const ipfsFileManager = new IPFSFileManager();
ipfsFileManager.retrieveFileFromIPFS(cid, filepath);

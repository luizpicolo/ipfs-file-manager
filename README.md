# IPFS File Manager

This repository contains JavaScript code to interact with IPFS (InterPlanetary File System). It provides functionalities to add and retrieve files from IPFS.

## Installation

Before running the code, make sure you have Node.js installed in your development environment. You can download it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

To install the necessary dependencies, navigate to the project directory and run the following command:

```bash
npm install
```

This will install the required packages specified in the `package.json` file.

## Usage

### Adding a File to IPFS

To add a file to IPFS, use the following code:

```javascript
import IPFSFileUploader from './IPFSFileUploader.js';

const ipfsUploader = new IPFSFileUploader();

const filePath = './file.txt'; // Replace with the path of the file you want to add to IPFS
ipfsUploader.uploadFileToIPFS(filePath);
```

Make sure to replace `filePath` with the path of the file you want to add to IPFS.

### Retrieving a File from IPFS

To retrieve a file from IPFS, use the following code:

```javascript
import IPFSFileRetriever from './IPFSFileRetriever.js';

const ipfsRetriever = new IPFSFileRetriever();

const cid = 'QmQgGxzWnzjCfouxRiozBiEG3wcsuJGWjtHjv3wurVbJ9s'; // Replace with the CID of the file you want to retrieve
const filepath = './retrievedFile'; // Specify the file path without the extension
ipfsRetriever.retrieveFileFromIPFS(cid, filepath);
```

Make sure to replace `cid` with the CID of the file you want to retrieve from IPFS.

## Notes

- The code depends on the IPFS package for Node.js. It will be installed automatically when you run `npm install`.
- The code uses the `fs/promises` module for file operations, which is available in Node.js version 14.0.0 and above.
- Additional dependencies such as `file-type` may be required for file type determination. They will also be installed automatically.

Feel free to explore and modify the code according to your needs.
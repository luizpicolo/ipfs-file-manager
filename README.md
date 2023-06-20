# IPFS File Manager

This repository contains JavaScript code to interact with IPFS (InterPlanetary File System). It provides functionalities to add and retrieve files from IPFS.

## Adding a File to IPFS

To add a file to IPFS, use the following code:

```javascript
import { create } from 'ipfs';
import { writeFile } from 'fs/promises';

class IPFSFileManager {
  // ...
}

const ipfsFileManager = new IPFSFileManager();

const filePath = './file.txt';
ipfsFileManager.addFileToIPFS(filePath);
```

Make sure to replace `filePath` with the path of the file you want to add to IPFS.

## Retrieving a File from IPFS

To retrieve a file from IPFS, use the following code:

```javascript
import { create } from 'ipfs';
import { writeFile } from 'fs/promises';
import { fileTypeFromBuffer } from 'file-type';

class IPFSFileManager {
  // ...
}

const ipfsFileManager = new IPFSFileManager();

const cid = 'QmQgGxzWnzjCfouxRiozBiEG3wcsuJGWjtHjv3wurVbJ9s'; // Replace with the CID of the file you want to retrieve
const filepath = './retrievedFile'; // Specify the file path without the extension
ipfsFileManager.retrieveFileFromIPFS(cid, filepath);
```

Make sure to replace `cid` with the CID of the file you want to retrieve from IPFS.

## Notes

- Make sure you have Node.js installed in your development environment.
- Install the necessary dependencies before running the code. You can use npm or yarn to install the dependencies specified in the `package.json` file.

Feel free to explore and modify the code according to your needs.
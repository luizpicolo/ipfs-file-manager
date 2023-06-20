import IPFSFileUploader from './IPFSFileUploader.js';
import IPFSFileRetriever from './IPFSFileRetriever.js';

// const filePath = './file.dat';
// const ipfsFileUploader = new IPFSFileUploader();
// const cid = ipfsFileUploader.uploadFileToIPFS(filePath);

// console.log(cid)

const cid = "QmP5DGmXZBrnvL2mgEUTwtccbupfKhTbwDjFMtmWAj7CLN";
const ipfsFileRetriever = new IPFSFileRetriever();
ipfsFileRetriever.retrieveFileFromIPFS(cid, './data');


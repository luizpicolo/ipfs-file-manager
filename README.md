# IPFS File Manager

Este repositório contém código JavaScript para interagir com o IPFS (InterPlanetary File System). Ele oferece funcionalidades para adicionar e recuperar arquivos do IPFS.

## Adicionar um arquivo ao IPFS

Para adicionar um arquivo ao IPFS, utilize o seguinte código:

```javascript
import { create } from 'ipfs';
import { readFile as _readFile } from 'fs';

class IPFSFileManager {
  // ...
}

const filePath = './file.txt';
const ipfsFileManager = new IPFSFileManager(filePath);
ipfsFileManager.addFileToIPFS();
```

Certifique-se de substituir `filePath` pelo caminho do arquivo que você deseja adicionar ao IPFS.

## Recuperar um arquivo do IPFS

Para recuperar um arquivo do IPFS, utilize o seguinte código:

```javascript
import { create } from 'ipfs';
import { writeFileSync } from 'fs';

class IPFSFileManager {
  // ...
}

const cid = 'QmQgGxzWnzjCfouxRiozBiEG3wcsuJGWjtHjv3wurVbJ9s'; // Substitua pelo CID do arquivo que você deseja recuperar
const ipfsFileManager = new IPFSFileManager(cid);
ipfsFileManager.retrieveFileFromIPFS();
```

Certifique-se de substituir `cid` pelo CID do arquivo que você deseja recuperar do IPFS.

## Observações

- Certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento.
- Instale as dependências necessárias antes de executar o código. Você pode usar o npm ou o yarn para instalar as dependências especificadas no arquivo `package.json`.

Sinta-se à vontade para explorar e modificar o código de acordo com suas necessidades.
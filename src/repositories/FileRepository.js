class FileRepository {
  constructor(fs){
    this.fs = fs;
  }

  readFile(filePath){
    return this.fs.readFileSync(filePath, 'utf8');
  }

  formatTxtFile(string){
    return string.split('\n').map(line => line.trim());
  }

  saveFile(filePath, content){
    this.fs.writeFileSync(filePath, content, 'utf8');
  }
}

module.exports = {
  FileRepository 
}
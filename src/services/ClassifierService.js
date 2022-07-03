class ClassifierService {
  constructor(fileRepository, seedKeywordsPath, keywordListPath, classifiedKeywordsPath) {
    this.fileRepository = fileRepository;
    this.seedKeywordsPath = seedKeywordsPath;
    this.keywordListPath = keywordListPath;
    this.classifiedKeywordsPath = classifiedKeywordsPath;
  }

  execute() {
    const seedKeywords = this.fileRepository.formatTxtFile(
      this.fileRepository.readFile(this.seedKeywordsPath)
    );
    const keywordList = this.fileRepository.formatTxtFile(
      this.fileRepository.readFile(this.keywordListPath)
    );
    const classifiedKeywords = this._classify(seedKeywords, keywordList);
    this.fileRepository.saveFile(this.classifiedKeywordsPath, classifiedKeywords.join('\n'));

    return;
  }

  _classify(seedKeywords, keywordList) {
    const seedKeywordsSortedByLength = this._removeDuplicateElements(this._sortByLength(seedKeywords));

    return keywordList.map(keyword => {
      let keywordClassified = false;

      return seedKeywordsSortedByLength.map(seedKeyword => {
        if(` ${keyword} `.includes(` ${seedKeyword} `) && !keywordClassified) {
          keywordClassified = true;

          return `${seedKeyword},${keyword}`;
        }
      })
    })
    .flat()
    .filter(Boolean);
  }

  _sortByLength(seedKeywords) {
    return seedKeywords.sort((a, b) => {
      
      return b.length - a.length;
    })
  }

  _removeDuplicateElements(array) {
    return array.filter((element, index) => {
      return array.indexOf(element) === index;
    });
  }

}

module.exports = {
  ClassifierService
}
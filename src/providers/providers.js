const fs = require('fs');

const { ClassifierCommand } = require('../commands/ClassifierCommand');
const { ClassifierService } = require('../services/ClassifierService');
const { FileRepository } = require('../repositories/FileRepository');

const keywordListPath = './src/data/input/keywordList.txt';
const seedKeywordsPath = './src/data/input/seedKeywords.txt';
const classifiedKeywordsPath = './src/data/output/classifiedKeywords.csv';

const classifierCommand = new ClassifierCommand(
  new ClassifierService(
    new FileRepository(fs),
    seedKeywordsPath,
    keywordListPath,
    classifiedKeywordsPath
  )
);

module.exports = {
  classifierCommand
}
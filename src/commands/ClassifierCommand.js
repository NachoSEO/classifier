class ClassifierCommand {
  constructor(classifierService) {
    this.classifierService = classifierService;
  }

  execute() {
    return this.classifierService.execute();
  }
  
}

module.exports = {
  ClassifierCommand
}
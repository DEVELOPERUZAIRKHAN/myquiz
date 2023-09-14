function Question (question,options,correct){

    this.question = question;
    this.options = options;
    this.correct = correct;

}

Question.prototype.isCorrect=(selectedOption)=>{
   return selectedOption===this.correct;
}

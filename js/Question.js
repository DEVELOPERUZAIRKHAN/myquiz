function Question (question,options,correct){

    this.question = question;
    this.options = options;
    this.correct = correct;

}

Question.prototype.isCorrect=function(selectedOption){
   return selectedOption===this.correct;
}

export default Question;
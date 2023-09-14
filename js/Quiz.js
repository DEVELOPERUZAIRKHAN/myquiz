function Quiz(questions){
    this.questions= questions;
    this.currentIndex=0;
    this.score= 0;
}

Quiz.prototype.changeIndex=function(){
this.currentIndex++;
}

Quiz.prototype.evaluate=function(selected){
  if(this.questions[this.currentIndex].isCorrect(selected)){
    this.score++;
}
this.changeIndex()
}

Quiz.prototype.ended=function(){
   return this.currentIndex===this.questions.length;
}

Quiz.prototype.restart=function(){
    this.currentIndex = 0;
    this.score=0;
}
Quiz.prototype.currentQuestion=function(){
    console.log(this?.questions)
    return this.questions[this.currentIndex]
}
export default Quiz;
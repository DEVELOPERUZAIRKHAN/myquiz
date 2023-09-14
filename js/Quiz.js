function Quiz(questions){
    this.questions= questions;
    this.currentIndex=0;
    this.score= 0;
}

Quiz.prototype.changeIndex= ()=>{
this.currentIndex++;
}

Quiz.prototype.evaluate=(selected)=>{
  if(this.questions[currentIndex].isCorrect(selected)){
    this.score++;
}

}

Quiz.prototype.ended=()=>{
   return this.currentIndex===this.questions.length;
}



export default Quiz
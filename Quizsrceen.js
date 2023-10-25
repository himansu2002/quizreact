import React, { useState } from 'react';
import QuestionList from "./data/questions.json";
import Question from "./data/Question.js";
import Quizresult from "./quizresult.js";

function Quizscreen({retry}){
    const [currentquestionindex, setCurrentquestionindex] = useState(0);
    const [markedanswers, setMarkedanswers] = useState(new Array(QuestionList.length));
    const isquestionend = currentquestionindex === QuestionList.length;

    function calculatedResult(){

        let correct = 0;
        QuestionList.forEach((question,index)=>{
            if(question.correctoptionIndex == markedanswers[index]){
                correct++;
            }
            });
            return({
                total: QuestionList.length,
                correct:correct,
                percentage:Math.trunc((correct / QuestionList)*100)
            });
    }

    return(  
<div className="Quiz-screen" >
    {
        isquestionend ?
         (<Quizresult
            result={calculatedResult()}retry={retry}/>):
        (<Question
          question={QuestionList[currentquestionindex]}
          totalquestions={QuestionList.length}
          currentquestion={currentquestionindex+1}
          setAnswer={(index)=>{
            setMarkedanswers((arr)=>{
                let newArr = [...arr];
                newArr[currentquestionindex]= index;
                return newArr;
            });
            setCurrentquestionindex(currentquestionindex+1);
          }}
          />        
    )
    }

</div>

      );
}
export default Quizscreen;
import { useState } from 'react';
import Form from './Form';
import FormResults from './FormResults';





export default function GenerateTool() {

  // const [results,setResults] = useState<string[]>([]);

  // let resultsToDisplay: { [questionName: string]: string[]} = {};

  const [resultsToDisplay,setResultsToDisplay] = useState<{[questionName: string]: string[]}>({});




  const isQuestionInObject = (questionName: string, resultsToDisplay:{[questionName: string]: string[]}):boolean=> {
    console.log(`Checking if ${questionName} is in the object `, resultsToDisplay);
    console.log(`resultsToDisplay.hasOwnProperty(questionName) `, resultsToDisplay.hasOwnProperty(questionName));
    return resultsToDisplay.hasOwnProperty(questionName);
  }

  const addNewCheckboxValue = (questionName: string, value: string, resultsToDisplay:{[questionName: string]: string[]}) =>{
    
    if(isQuestionInObject(questionName,resultsToDisplay )){
      console.log("Question exist");
      const newResultsToDisplay = resultsToDisplay;
      const oldValues: string[] = newResultsToDisplay[questionName] as string[];
      oldValues.push(value);
      const newValues: string[] = oldValues.slice();
      newResultsToDisplay[questionName] = newValues;
      return newResultsToDisplay;
    } else {
      console.log("Question does NOT exist");
      return addNewQuestion(questionName, value, resultsToDisplay);
    }
    
  }

  //add new question with intial value 

  const addNewQuestion = (questionName: string, initialValue: string, resultsToDisplay:{[questionName: string]: string[]}) =>{

    const newResultsToDisplay = resultsToDisplay;
    newResultsToDisplay[questionName]=[initialValue];
    return newResultsToDisplay;
  }


  //removeCheckboxValue function 

  const removeCheckboxValue = (questionName: string, valueToRemove: string, resultsToDisplay:{[questionName: string]: string[]}) =>{

    if(isQuestionInObject(questionName,resultsToDisplay ) === false){
      throw new Error('Question does no exist');
    }
    const newResultsToDisplay = resultsToDisplay;
    
    const oldValues: string[] = newResultsToDisplay[questionName] as string[];
    const newValues: string[] = oldValues.filter((value)=>value!==valueToRemove);
    newResultsToDisplay[questionName] = newValues;
    return newResultsToDisplay;
  }

  //addNewRadioValue functions 

  const addNewRadioValue = (questionName: string, value: string, resultsToDisplay:{[questionName: string]: string[]}) =>{
    // if(typeof resultsToDisplay === "undefined"){
    //   throw new Error('resultsToDisplay is undefined');
    // }
    const newResultsToDisplay = resultsToDisplay;
    newResultsToDisplay[questionName] = [value];
    return newResultsToDisplay;
  }
  



  

  const handleChange = (changeEvent: React.SyntheticEvent) => {
    const target = changeEvent.target as HTMLInputElement;

    if (target.type === 'radio') {
        console.log("radio fired");
        setResultsToDisplay(addNewRadioValue(target.name.toString(), target.value.toString(), resultsToDisplay));

    }
    if (target.type === 'checkbox') {
        console.log("checkbox fired");
        if (target.checked){
            console.log("Checked")
            setResultsToDisplay(addNewCheckboxValue(target.name.toString(), target.value.toString(), resultsToDisplay)); 
        }
        if (!target.checked){
          setResultsToDisplay(removeCheckboxValue(target.name.toString(), target.value.toString(), resultsToDisplay));
        }
    }
    console.log("resultsToDisplay is ",resultsToDisplay);
  }
  return (
    <div  className="flex">
        <Form handleChange = {handleChange} />
        <FormResults/>
    </div>
  );
}
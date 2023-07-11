// import Head from "next/head";
// import Link from "next/link";
// import { api } from "~/utils/api";

import { useState } from 'react';
import Form from '../components/Form';

// const [results,setResults] = useState(
        // {
        //     formName : {
            //     questionName: ["string"],
                // questionName: ["string","string"],
        //     }
        // }
    //     {question:"",values:[]},
            // {question:"",values:[]},
            // {question:"",values:[]},
    // );



export default function Home() {

  let resultsToDisplay: { [questionName: string]: string[]} = {};

  resultsToDisplay[ "Any associated pins and needles or numbness?"] = ["Toes"];
  resultsToDisplay[ "Question two?"] = ["morning"];

  console.log(resultsToDisplay);



  const isQuestionInObject = (questionName: string, resultsToDisplay:{[questionName: string]: string[]}):boolean=> {
    return resultsToDisplay[questionName]!==undefined;
  }

  console.log(isQuestionInObject("Any associated pins and needles or numbness?",resultsToDisplay));

  const addNewCheckboxValue = (questionName: string, value: string, resultsToDisplay:{[questionName: string]: string[]}) =>{
    
    if(typeof resultsToDisplay === "undefined"){
      throw new Error('resultsToDisplay is undefined');
    }
    const newResultsToDisplay = resultsToDisplay;
    const oldValues: string[] = newResultsToDisplay[questionName] as string[];
    oldValues.push(value);
    const newValues: string[] = oldValues;
    newResultsToDisplay[questionName] = newValues;
    return newResultsToDisplay;
  }

  resultsToDisplay = addNewCheckboxValue( "Any associated pins and needles or numbness?", "value 2", resultsToDisplay);
  resultsToDisplay = addNewCheckboxValue( "Any associated pins and needles or numbness?", "value 3", resultsToDisplay);
  console.log(resultsToDisplay);

  //add new question with intial value 

  const addNewQuestion = (questionName: string, initialValue: string, resultsToDisplay:{[questionName: string]: string[]}) =>{
    resultsToDisplay[questionName]=[initialValue];
    return resultsToDisplay;
  }

  resultsToDisplay = addNewQuestion( "question for new question??", "test1 value", resultsToDisplay);
  console.log(resultsToDisplay);


  //removeCheckboxValue function 

  //addNewRadioValue functions 



  // //Create a funtion to add value for a questiosn that isn't present 
  // const addNewObject = (questionNameToAdd: string, valueToAdd: string, objectArray: Input[]) =>{
  //   const newObject: Input = {
  //     questionName: questionNameToAdd,
  //     values: [valueToAdd],
  //   };
  //   objectArray.push(newObject);
  //   return objectArray;
  // }

  // console.log(addNewObject( "Is the radiating pain constant or intermittent?","Testing add value funtion",objectResult));
  // console.log(addNewObject( "Question three ?","Testing add value funtion",objectResult));
  // console.log(objectResult);
  
  
  //Create funtion which removes a value from a question

  // const removeValueFromObject = (questionNameToAdd: string, valueToRemove: string, objectArray: Input[]) =>{

  //   const newObject: Input[] = objectArray;
  // }






   // const [objectResult,setObjectResult] = useState<Input[]>([input,input2]);





  const [results,setResults] = useState<string[]>([]);

  // 
  const handleChange = (changeEvent: React.SyntheticEvent) => {
    // formName = target.name

    const target = changeEvent.target as HTMLInputElement ;
    // const target = changeEvent;

    // console.log(`handle change for ${target}`);
    if (target.type === 'radio') {
        console.log("radio fired");
        console.log(target);
    }
    if (target.type === 'checkbox') {
        console.log("checkbox fired");
        if (target.checked){
            console.log("Checked")
            const updatedArray: string[] = results;
            updatedArray.push(target.value.toString());
            // console.log(`upadted array == ${updatedArray}`)
            
            const sliceArray: string[] = updatedArray.slice();
            setResults(sliceArray);
            // console.log(`results are == ${results}`);
        }
        if (!target.checked){
            // console.log("NOT Checked") ;
            const filteredArray = results.filter(item=>{
                // console.log(`itwm is ${typeof item}`);
                // console.log(`target.value.toString() is ${ typeof target.value.toString()}`);
                // console.log(`Are these two equal? ${ item !== target.value}`);
                return item !== target.value.toString();
                // Not working 
            });
            // console.log(`Updated array is ${filteredArray}`);
            setResults(filteredArray);
            // console.log(`Results is now == ${filteredArray}`);
            console.log(results);
        }
    }
  }
  return (
    <>
    <Form handleChange = {handleChange}/>
    <h2>{results}</h2>

    </>
  );
}

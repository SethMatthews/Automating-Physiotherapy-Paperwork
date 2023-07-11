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

  resultsToDisplay = addNewCheckboxValue( "Any associated pins and needles or numbness?", "value to remove", resultsToDisplay);
  console.log(addNewCheckboxValue( "Any associated pins and needles or numbness?", "value to remove", resultsToDisplay));
  console.log("Above here");
  resultsToDisplay = addNewCheckboxValue( "Any associated pins and needles or numbness?", "value 3", resultsToDisplay);
  console.log(resultsToDisplay);

  //add new question with intial value 

  const addNewQuestion = (questionName: string, initialValue: string, resultsToDisplay:{[questionName: string]: string[]}) =>{
    if(typeof resultsToDisplay === "undefined"){
      throw new Error('resultsToDisplay is undefined');
    }
    const newResultsToDisplay = resultsToDisplay;
    newResultsToDisplay[questionName]=[initialValue];
    return newResultsToDisplay;
  }

  resultsToDisplay = addNewQuestion( "question for new question??", "test1 value", resultsToDisplay);
  console.log(resultsToDisplay);


  //removeCheckboxValue function 

  const removeCheckboxValue = (questionName: string, valueToRemove: string, resultsToDisplay:{[questionName: string]: string[]}) =>{

    if(typeof resultsToDisplay === "undefined"){
      throw new Error('resultsToDisplay is undefined');
    }
    const newResultsToDisplay = resultsToDisplay;
    
    const oldValues: string[] = newResultsToDisplay[questionName] as string[];
    const newValues: string[] = oldValues.filter((value)=>value!==valueToRemove);
    newResultsToDisplay[questionName] = newValues;
    return newResultsToDisplay;
  }

  console.log(removeCheckboxValue("Any associated pins and needles or numbness?","value to remove",resultsToDisplay));
  console.log(removeCheckboxValue("Any associated pins and needles or numbness?","Toes",resultsToDisplay));

  //addNewRadioValue functions 

  const addNewRadioValue = (questionName: string, value: string, resultsToDisplay:{[questionName: string]: string[]}) =>{
    if(typeof resultsToDisplay === "undefined"){
      throw new Error('resultsToDisplay is undefined');
    }
    const newResultsToDisplay = resultsToDisplay;
    newResultsToDisplay[questionName] = [value];
    return newResultsToDisplay;
  }
  



  const [results,setResults] = useState<string[]>([]);

  const handleChange = (changeEvent: React.SyntheticEvent) => {
    const target = changeEvent.target as HTMLInputElement;

    if (target.type === 'radio') {
        console.log("radio fired");
        resultsToDisplay = addNewRadioValue(target.name.toString(), target.value.toString(), resultsToDisplay);
        console.log(resultsToDisplay);

    }
    if (target.type === 'checkbox') {
        console.log("checkbox fired");
        if (target.checked){
            console.log("Checked")
            const updatedArray: string[] = results;
            updatedArray.push(target.value.toString());            
            const sliceArray: string[] = updatedArray.slice();
            setResults(sliceArray);
        }
        if (!target.checked){
            const filteredArray = results.filter(item=>{
                return item !== target.value.toString();
            });
            setResults(filteredArray);
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

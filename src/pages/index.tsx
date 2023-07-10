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

  const resultsToDisplay: { [questionName: string]: string[]} = {};

  resultsToDisplay[ "Any associated pins and needles or numbness?"] = ["Toes"];

  console.log(resultsToDisplay);



  const isQuestionInObject = (questionName: string, resultsToDisplay:{[questionName: string]: string[]}):boolean=> {
    return resultsToDisplay[questionName]!==undefined;
  }

  console.log(isQuestionInObject("Any associated pins and needles or numbness?",resultsToDisplay));

  // const addNewValue = (questionName: string, value: string, objectArray: Input[]) =>{
  //   objectArray.map((object)=>{
  //     if (object.questionName === questionName){
  //       const oldValues: string[] = object.values;
  //       oldValues.push(value);
  //       return oldValues;
  //     }
  //   });
  // }


  // const objectResult: Input[] = [input];
  // console.log("objectResult");
  // console.log(objectResult);
  // console.log(`isQuestionInObjectArray("Any associated pins and needles or numbness?") == }`)
  // console.log(isQuestionInObjectArray("Any associated pins and needles or numbness?",objectResult));
  // console.log("addNewValue");
  // console.log(addNewValue( "Any associated pins and needles or numbness?","Posterior glute",objectResult));
  // console.log(addNewValue( "Any associated pins and needles or numbness?","Testing add value funtion",objectResult));

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

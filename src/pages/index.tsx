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

  interface Input {
    questionName: string;
    values: string[];
  }

  const input: Input = {
    questionName: "Any associated pins and needles or numbness?",
    values: ["Toes"],
  };

  const input2: Input = {
    questionName: "Any associated pins and needles or numbness?",
    values: ["Posterior glute"],
  };

  const isQuestionInObjectArray = (question: string, objectArray: Input[]): boolean => {
    let isPresent = false;
    objectArray.map((object)=>{
      if (object.questionName === question){
        console.log("it is true");
        isPresent = true;
      }
    });
    return isPresent;
  }


  const objectResult: Input[] = [input, input2];
  console.log(objectResult);
  console.log(`isQuestionInObjectArray("Any associated pins and needles or numbness?") == }`)
  console.log(isQuestionInObjectArray("Any associated pins and needles or numbness?",objectResult));





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

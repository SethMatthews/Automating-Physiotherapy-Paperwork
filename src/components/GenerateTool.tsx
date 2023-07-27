import { useState } from 'react';
import Form from './Form';





export default function GenerateTool() {

  const [resultsToDisplay,setResultsToDisplay] = useState<{[questionName: string]: string[]}>({});


  const isQuestionInObject = (questionName: string, resultsToDisplay:{[questionName: string]: string[]}):boolean=> {
    return resultsToDisplay.hasOwnProperty(questionName);
  }

  const addNewCheckboxValue = (questionName: string, value: string, resultsToDisplay:{[questionName: string]: string[]}) =>{
    
    if(isQuestionInObject(questionName,resultsToDisplay )){
      const newResultsToDisplay = resultsToDisplay;
      const oldValues: string[] = newResultsToDisplay[questionName] as string[];
      oldValues.push(value);
      const newValues: string[] = oldValues.slice();
      newResultsToDisplay[questionName] = newValues;
      return newResultsToDisplay;
    } else {
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

  const addNewRadioValue = (questionName: string, value: string, resultsToDisplay:{[questionName: string]: string[]})=>{
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
        const newObject = {...addNewRadioValue(target.name.toString(), target.value.toString(), resultsToDisplay)};
        setResultsToDisplay(newObject);
        

    }
    if (target.type === 'checkbox') {
        console.log("checkbox fired");
        if (target.checked){
            console.log("Checked")
            const newObject = {...addNewCheckboxValue(target.name.toString(), target.value.toString(), resultsToDisplay)};
            setResultsToDisplay(newObject); 
        }
        if (!target.checked){
          const newObject = {...removeCheckboxValue(target.name.toString(), target.value.toString(), resultsToDisplay)};
          setResultsToDisplay(newObject);
        }
    }

    // console.log("changeEvent is", changeEvent);
    // console.log(target.parentElement);
    // if (target.parentElement===null){
    // }else{
    //   console.log("LOOK HERE ",target.parentElement.parentElement.children);
    //   target.parentElement.classList.toggle("bg-blue-800");
    //   console.log(target.parentElement.classList);
    // }



    // const formElement = document.querySelector("form");
    // const formElementChildren = formElement?.children;

    // if (formElementChildren!==undefined){
    //   for (const element of formElementChildren ){
    //     console.log(element);
    //     if (element.checked){

    //     }
    //   }
    // }

    const inputElements = document.querySelectorAll("input");
    for (const inputElement of inputElements ){
      if(inputElement.checked){
        inputElement?.parentElement?.classList.add("bg-blue-800");
        inputElement?.parentElement?.classList.add("text-white");
       

      }else{
        inputElement?.parentElement?.classList.remove("bg-blue-800");
        inputElement?.parentElement?.classList.remove("text-white");
      }

    }

  

    


    console.log("resultsToDisplay is ",resultsToDisplay);
  }
  return (
    <div  className="flex justify-around bg-blue-100" >
        <Form  handleChange = {handleChange} resultsToDisplay={resultsToDisplay}  />
        {/* {resultsToDisplay && Object.keys(resultsToDisplay).forEach(function(key, index))) (
          <h3 key={index}> {resultsToDisplay[key]} </h3>
        )} */}

        <div className=" text-gray-800 w-3/5 m-12 bg-white  p-10 rounded-lg ">
        7th of June 2023 <br/>
          <br/>
          Mr Seth Matthews <br/>
          10 Bosisto Street <br/>
          <b>RICHMOND 3121</b><br/>
          <br/>



          Dear Dr Bob Myers,<br/>
          <br/>
          <b>Re. Mr Seth Matthews of 10 Bosisto Street RICHMOND. DOB 04/12/1998.</b><br/> 
          <br/>
          Thank you for refering Seth to 4 Life Physiotherapy for opinion and management of lower bac pain. <br/>
          <br/>

          Subjective:
          <ul>
            {resultsToDisplay&& Object.keys(resultsToDisplay).map((question, index)=>( // try javascript array foreach
              <div className='list-disc' key={index}>
              {/* <li>{question}</li> */}
              <li>{resultsToDisplay[question]}</li>
              </div>              
            ))}
          </ul>

          {/* Objective:
          <ul className="outputSubjective2">

          </ul>

          Treatment:
          <ul className="outputSubjective3">

          </ul>

          Plan:
          <ul className="outputSubjective4">

          </ul> */}

          <br/>
          <br/>
          Yours Sincerly, <br/>
          <br/>
          Haydn Matthews <br/>
          Physiotherapist <br/>
          <br/>
          
          
        </div>
        
    </div>
  );
}
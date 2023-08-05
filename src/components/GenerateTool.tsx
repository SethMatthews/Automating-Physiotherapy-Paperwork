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

    const newResultsToDisplay = {...resultsToDisplay};
    newResultsToDisplay[questionName]=[initialValue];
    return newResultsToDisplay;
  }

  // const removeQuestion = (questionName: string, resultsToDisplay:{[questionName: string]: string[]}) =>{
  //   const newResultsToDisplay = {...resultsToDisplay};
  //   delete newResultsToDisplay[questionName];
  //   return newResultsToDisplay;
  // }



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

  const handleClick = (clickEvent: React.SyntheticEvent) => {
    const target = clickEvent.target  as HTMLElement;
    console.log("onClick is  ",target);
    console.log("ClickEvent is  ",clickEvent);
    if (target?.id ==="input"){
        console.log("TRUE INPUT");
        const childrenElements = target.children;
        const childInputElement = childrenElements[0] as HTMLInputElement ;
        // childInputElement.checked = true;
        childInputElement.click();
    }

    
  }

  const handleChange = (changeEvent: React.SyntheticEvent) => {

    console.log("EVENT IS ", changeEvent);
    const target = changeEvent.target as HTMLInputElement;

    if (target.type === "select-one"){
      console.log("DROPDOWN TRIGGERED ",changeEvent );
      console.log("DROPDOWN name ",target.name );
      console.log("DROPDOWN TRIGGERED ",target.value );
    }

    if (target.type === 'radio'||target.type === "select-one") {
      console.log("radio fired");
      const newObject = {...resultsToDisplay};

      console.log("CHECKING IF QUESTIONS NEED DELETING");
      console.log("keys to check ", Object.keys(newObject));
      console.log("key we are looking for ", target.name.toString() );
      const keysToDelete= Object.keys(newObject).filter((key)=>{
        console.log(key.includes( target.name.toString()));
        return key.includes( target.name.toString()) && key !==target.name.toString() ;
      });
      console.log("keysToDelete",keysToDelete);
      keysToDelete.map((keyToRemove)=>{
        console.log("OBJECTBEFORE",newObject );
        console.log("keyToRemove",keyToRemove);
        delete newObject[keyToRemove];
        console.log("OBJECTAFTER",newObject );
      });
      const objectWithdNewRadioValue =  {...addNewRadioValue(target.name.toString(), target.value.toString(), newObject)};
      setResultsToDisplay(objectWithdNewRadioValue);
    }

    if (target.type === 'checkbox') {
        console.log("checkbox fired");
        if (target.checked){
            console.log("Checked")
            const newObject = {...addNewCheckboxValue(target.name.toString(), target.value.toString(), resultsToDisplay)};
            setResultsToDisplay(newObject); 
        }
        if (!target.checked){
          console.log("checkbox NOT CHECKED CLCIKED");
          const optionRemovedObject = {...removeCheckboxValue(target.name.toString(), target.value.toString(), resultsToDisplay)};
          const newObject = {...optionRemovedObject};
          //need to remove nested values here for edge cases
          const rootPathToPrune = `${target.name.toString()}-${target.value.toString()}`;

          console.log("CHECKING IF QUESTIONS NEED DELETING");
          console.log("keys to check ", Object.keys(newObject));
          console.log("key we are looking for ", rootPathToPrune );
          const keysToDelete= Object.keys(newObject).filter((key)=>{
            console.log(key.includes(rootPathToPrune));
            return key.includes( rootPathToPrune);
            // return key.includes( rootPathToPrune) && key !== rootPathToPrune ;
          });
          console.log("keysToDelete",keysToDelete);
          keysToDelete.map((keyToRemove)=>{
            console.log("OBJECTBEFORE",newObject );
            console.log("keyToRemove",keyToRemove);
            delete newObject[keyToRemove];
            console.log("OBJECTAFTER",newObject );
          });

          setResultsToDisplay({...newObject});
        }
    }
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

    const selectElements = document.querySelectorAll("select");
    for (const selectElement of selectElements ){
        console.log("selectElement.selectedIndex ", selectElement.selectedIndex);
        if(selectElement.selectedIndex !== 0){
          selectElement?.parentElement?.classList.add("bg-blue-800");
          selectElement?.parentElement?.classList.add("text-white");
          selectElement?.classList.add("text-black");
        }else{
          selectElement?.parentElement?.classList.remove("bg-blue-800");
          selectElement?.parentElement?.classList.remove("text-white");
          selectElement?.classList.remove("text-black");
        }
    }

    console.log("resultsToDisplay is ",resultsToDisplay);
  }
  return (
    <div  className="flex flex-col items-center w-full px-4 md:flex-row md:justify-around md:items-start bg-blue-100 " >
        <Form  handleChange = {handleChange} handleClick = {handleClick} resultsToDisplay={resultsToDisplay}  />

        <div className=" text-gray-800 bg-white p-10 rounded-lg shadow-xl w-full md:w-3/5 m-12 md:top-0 md:sticky md:overflow-y-scroll  md:max-h-screen  ">
    
          <div className="flex justify-end ">
            <button className="p-4 rounded-2xl bg-slate-100 shadow-lg"  onClick={(event)=>{
              console.log("Click Event",event );
              const output = document.querySelector(".output-div");
              console.log(output?.textContent);

              const textOutput = output?.textContent as string;

              navigator.clipboard.writeText(textOutput)
                .then(() => {
                  alert("Copied text to keyboard");
                }).catch(()=>{
                  console.log("Error");
                });

            }}>
              Copy
            </button>
            </div>
            <div className="output-div">
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
                  <li>{question} === {resultsToDisplay[question]} </li>
                  </div>              
                ))}
              </ul>

              <br/>
              <br/>
              Yours Sincerly, <br/>
              <br/>
              Haydn Matthews <br/>
              Physiotherapist <br/>
              <br/>
            </div>

        </div>
        
    </div>
  );
}
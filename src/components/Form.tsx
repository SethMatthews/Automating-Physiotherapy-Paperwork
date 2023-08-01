import WhatIsTheNatureOfPain from "./WhatIsTheNatureOfPain";
import WhereIsThePainLocated from "./questions/ WhereIsThePainLocated/WhereIsThePainLocated";
import AggravatingFactors from "./questions/AggravatingFactors/AggravatingFactors";
import AreThereAnyNeurologicalSignsAssociated from "./questions/AreThereAnyNeurologicalSignsAssociated/AreThereAnyNeurologicalSignsAssociated";
import EasingFactors from "./questions/EasingFactors/EasingFactors";
import WhenIsThePainWorse from "./questions/WhenIsThePainWorse/WhenIsThePainWorse";

type formProps = {
    handleChange: (changeEvent: React.SyntheticEvent)=>void;
    resultsToDisplay: {[questionName: string]: string[]};

}

const Form = ({handleChange, resultsToDisplay}:formProps) => {

    const isOptionSelected = ( option: string, questionNameToCheck:string) => {
        const questionValue: string[]|undefined = resultsToDisplay[questionNameToCheck];
        if (questionValue===undefined){
            return false

        } else {
            console.log("questionValue[0] ",questionValue[0]);
            console.log("option ",option);
            return questionValue[0]===option;
        }
    }

    const isCheckboxOptionSelected = ( option: string, questionNameToCheck:string) => {
        const questionValues: string[]|undefined = resultsToDisplay[questionNameToCheck];
        if (questionValues===undefined){
            return false

        } else {
            return questionValues.includes(option);
        }
    }

    // const question1 = "How long have been experiencing pain?";


    return (  
        <div className=" text-gray-500 w-2/5 m-12  bg-white p-10 rounded-lg shadow-xl">
            <form onChange={(e)=> {
                // console.log(e.target.name);
                handleChange(e);
                }}>

                <WhatIsTheNatureOfPain parentQuestionPath={"What is the nature of pain?"} isOptionSelected={isOptionSelected} />
                <WhereIsThePainLocated  parentQuestionPath={"Where is the pain located?"} isOptionSelected={isOptionSelected}  />

                <AreThereAnyNeurologicalSignsAssociated  parentQuestionPath={"Are there any neurological signs associated?"} isOptionSelected={isOptionSelected}  />

                <AggravatingFactors parentQuestionPath="Aggravating factors?" isCheckboxOptionSelected={isCheckboxOptionSelected} />

                <EasingFactors parentQuestionPath="Easing factors?"  isCheckboxOptionSelected={isCheckboxOptionSelected} />

                <WhenIsThePainWorse parentQuestionPath="When is the pain worse?" isCheckboxOptionSelected={isCheckboxOptionSelected} />
                

            </form>
        </div>
    );
}
 
export default Form;



// import WhatIsTheNatureOfPain from "./WhatIsTheNatureOfPain";

import WhereIsThePainLocated from "./questions/ WhereIsThePainLocated/WhereIsThePainLocated";
import AggravatingFactors from "./questions/AggravatingFactors/AggravatingFactors";
import AnyRedFlags from "./questions/AnyRedFlags/AnyRedFlags";
import AreThereAnyNeurologicalSignsAssociated from "./questions/AreThereAnyNeurologicalSignsAssociated/AreThereAnyNeurologicalSignsAssociated";
import EasingFactors from "./questions/EasingFactors/EasingFactors";
import PastMedicalHistory from "./questions/PastMedicalHistory/PastMedicalHistory";
import TheIntensityOfPain from "./questions/TheIntensityOfPain/TheIntensityOfPain";
import WhatIsTheNatureOfPainNew from "./questions/WhatIsTheNatureOfPain/WhatIsTheNatureOfPainNew";
import WhenIsThePainWorse from "./questions/WhenIsThePainWorse/WhenIsThePainWorse";

type formProps = {
    handleChange: (changeEvent: React.SyntheticEvent)=>void;
    handleClick : (clickEvent: React.SyntheticEvent)=>void;
    resultsToDisplay: {[questionName: string]: string[]};

}

const Form = ({handleChange, handleClick,  resultsToDisplay}:formProps) => {

    const isOptionSelected = ( option: string, questionNameToCheck:string) => {
        const questionValue: string[]|undefined = resultsToDisplay[questionNameToCheck];
        if (questionValue===undefined){
            return false

        } else if (questionValue.length>1){
            const questionValues: string[] = resultsToDisplay[questionNameToCheck] as string[];
            return questionValues?.includes(option);

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

    


    return (  
        <div className=" text-gray-500 bg-white p-10 rounded-lg shadow-xl   md:w-2/5 m-12 w-full ">
            <form onChange={(e)=> {
                // console.log(e.target.name);
                handleChange(e);
                }}
                onClick = {handleClick}
                
                >

                <WhatIsTheNatureOfPainNew  parentQuestionPath={"What is the nature of pain?"} isOptionSelected={isOptionSelected}  />

                <TheIntensityOfPain parentQuestionPath={"What is the intensity of the pain?"} isOptionSelected={isOptionSelected} />

                {/* <WhatIsTheNatureOfPain parentQuestionPath={"What is the nature of pain?"} isOptionSelected={isOptionSelected} /> */}

                <WhereIsThePainLocated  parentQuestionPath={"Where is the pain located?"} isOptionSelected={isOptionSelected}  />

                <AreThereAnyNeurologicalSignsAssociated  parentQuestionPath={"Are there any neurological signs associated?"} isOptionSelected={isOptionSelected}  />

                <AggravatingFactors parentQuestionPath="Aggravating factors?" isCheckboxOptionSelected={isCheckboxOptionSelected} />

                <EasingFactors parentQuestionPath="Easing factors?"  isCheckboxOptionSelected={isCheckboxOptionSelected} />

                <WhenIsThePainWorse parentQuestionPath="When is the pain worse?" isCheckboxOptionSelected={isCheckboxOptionSelected} />

                <AnyRedFlags  parentQuestionPath="Any red flags?" isCheckboxOptionSelected={isCheckboxOptionSelected} />
                <PastMedicalHistory  parentQuestionPath="Past medical history" isCheckboxOptionSelected={isCheckboxOptionSelected} />
                
                

            </form>
        </div>
    );
}
 
export default Form;



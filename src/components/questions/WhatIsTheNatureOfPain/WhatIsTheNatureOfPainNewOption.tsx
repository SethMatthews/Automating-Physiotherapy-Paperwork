// WhatIsTheNatureOfPainNew

import RadioInputOption from "~/components/RadioInput";
import HowLongFor from "./HowLongFor";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhatIsTheNatureOfPainNewOption = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3"> How long have been experiencing low back pain? </h3>
                    <HowLongFor selectedOption="Days" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <HowLongFor selectedOption="Weeks" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <HowLongFor selectedOption="Months" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>

                </div>
            }
        </div>
    );
}
 
export default WhatIsTheNatureOfPainNewOption;



// HowLongFor

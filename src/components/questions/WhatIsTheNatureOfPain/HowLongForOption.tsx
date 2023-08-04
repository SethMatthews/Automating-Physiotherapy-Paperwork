// WhatIsTheNatureOfPainNew

import RadioInputOption from "~/components/RadioInput";
import HowLongFor from "./HowLongFor";
import WasThereAnIncident from "./WasThereAnIncident";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const HowLongForOption = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <WasThereAnIncident isOptionSelected={isOptionSelected} parentQuestionPath={currentQuestionPath} />
                </div>
            }
        </div>
    );
}
 
export default HowLongForOption;

// WasThereAnIncident
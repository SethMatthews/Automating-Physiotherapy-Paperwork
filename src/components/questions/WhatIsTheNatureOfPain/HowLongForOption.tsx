// WhatIsTheNatureOfPainNew

import DropdownInput from "~/components/DropdownInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const HowLongForOption = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            {/* <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/> */}
            <DropdownInput  selectedOption={selectedOption} parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />

            
        </div>
    );
}
 
export default HowLongForOption;

// WasThereAnIncident

import RadioInputOption from "~/components/RadioInput";
import HowLongFor from "./HowLongFor";
import HowLongForOption from "./HowLongForOption";
import ChronicDropdown from "./ChronicDropdown";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhatIsTheNatureOfPainNewOptionChronic = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>

    
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3"> How many years have been experiencing low back pain? </h3>
                    <ChronicDropdown parentQuestionPath={currentQuestionPath}/>
                    {/* <HowLongFor selectedOption="Years" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/> */}
                    
                </div>
            }

        </div>
    );
}
 
export default WhatIsTheNatureOfPainNewOptionChronic;

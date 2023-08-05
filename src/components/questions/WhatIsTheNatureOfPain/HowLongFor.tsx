// HowLongFor

import RadioInputOption from "~/components/RadioInput";
import HowLongForOption from "./HowLongForOption";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const HowLongFor = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3">How many {selectedOption}?</h3>
                    <HowLongForOption selectedOption={selectedOption} parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    {/* <HowLongForOption selectedOption="2" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <HowLongForOption selectedOption="3" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <HowLongForOption selectedOption="4" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <HowLongForOption selectedOption="5" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <HowLongForOption selectedOption="6" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/> */}
                </div>
            }
        </div>
    );
}
 
export default HowLongFor;


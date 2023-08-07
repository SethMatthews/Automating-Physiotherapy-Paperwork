

import RadioInputOption from "~/components/RadioInput";
import HowLongForAcuuteOnChronicOption from "./HowLongForAcuuteOnChronicOption";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const HowLongForAcuuteOnChronic = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3">How many {selectedOption}?</h3>
                    <HowLongForAcuuteOnChronicOption selectedOption={selectedOption} parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                </div>
            }
        </div>
    );
}
 
export default HowLongForAcuuteOnChronic;

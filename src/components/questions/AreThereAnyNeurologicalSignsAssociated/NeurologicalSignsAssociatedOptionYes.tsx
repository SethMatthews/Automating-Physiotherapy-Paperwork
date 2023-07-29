

import RadioInputOption from "../../RadioInput";
import NeurologicalSignsAssociatedOptionYesNumb from "./NeurologicalSignsAssociatedOptionYesNumb";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;


const NeurologicalSignsAssociatedOptionYes = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption: string, parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (
        
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    {/* <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3> */}
                    <NeurologicalSignsAssociatedOptionYesNumb selectedOption="Numbness"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <NeurologicalSignsAssociatedOptionYesNumb selectedOption="Tingling"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <NeurologicalSignsAssociatedOptionYesNumb selectedOption="Burning pain"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <NeurologicalSignsAssociatedOptionYesNumb selectedOption="Pins and needles"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />

                </div>
            }
        </div>

    );
}
 
export default NeurologicalSignsAssociatedOptionYes;



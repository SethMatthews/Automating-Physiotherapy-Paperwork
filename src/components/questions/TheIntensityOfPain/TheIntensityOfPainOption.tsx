// TheIntensityOfPain

import RadioInputOption from "~/components/RadioInput";
import DropdownInputOutOfTen from "./DropdownInputOutOfTen";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const TheIntensityOfPainOption = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3">VAS pain scale out of 10?</h3>
                    <DropdownInputOutOfTen selectedOption={selectedOption} parentQuestionPath={currentQuestionPath} />
                  
                </div>
            }
        </div>
    );
}
 
export default TheIntensityOfPainOption;

// TheIntensityOfPain

import DropdownInputOutOfTen from "./DropdownInputOutOfTen";
import CheckboxInput from "~/components/CheckboxInput";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const TheIntensityOfPainOption = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
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

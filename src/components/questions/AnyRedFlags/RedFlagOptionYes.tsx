// RedFlagOptionNo

import CheckboxInput from "~/components/CheckboxInput";
import RadioInputOption from "~/components/RadioInput";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const RedFlagOptionYes = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="History of cancer" value="History of cancer" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Unexplained weight loss" value="Unexplained weight loss" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Severe night pain" value="Severe night pain" questionName={currentQuestionPath}/>     
                    <CheckboxInput text="Bilateral pins and needles" value="Bilateral pins and needles" questionName={currentQuestionPath}/>     
                    <CheckboxInput text="Cauda Equina symptoms: bowl and bladder disturbances" value="Cauda Equina symptoms: bowl and bladder disturbances" questionName={currentQuestionPath}/>            
                </div>
            }
        </div>
    );
}
 
export default RedFlagOptionYes;

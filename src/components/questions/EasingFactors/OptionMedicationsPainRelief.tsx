// OptionMedicationsPainRelief

import CheckboxInput from "~/components/CheckboxInput";
import ShortTermPainRelief from "./ShortTermPainRelief";
import OpioidPainRelief from "./OpioidPainRelief";
import AnticonvulsantPainRelief from "./AnticonvulsantPainRelief";
import AntiDepressants from "./AntiDepressants";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const OptionMedicationsPainRelief = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <ShortTermPainRelief selectedOption="Short term" parentQuestionPath={currentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected} />
                    <OpioidPainRelief selectedOption="Opioid medication" parentQuestionPath={currentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected} />
                    <AnticonvulsantPainRelief selectedOption="Anticonvulsant medication" parentQuestionPath={currentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected} />
                    <AntiDepressants  selectedOption="Anti-depressants" parentQuestionPath={currentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected} />

                                 
                </div>
            }
        </div>
    );
}
 
export default OptionMedicationsPainRelief;
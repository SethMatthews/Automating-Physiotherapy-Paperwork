

import CheckboxInput from "~/components/CheckboxInput";
import OptionMedicationsAntiInflam from "./OptionMedicationsAntiInflam";
import OptionMedicationsPainRelief from "./OptionMedicationsPainRelief";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const OptionMedications = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <OptionMedicationsAntiInflam selectedOption="Anti-inflammatories" parentQuestionPath={currentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected}/>
                    <OptionMedicationsPainRelief selectedOption="Pain Relief" parentQuestionPath={currentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected}/>
                    <CheckboxInput text="Muscle relaxants" value="Muscle relaxants" questionName={currentQuestionPath}/>            
                </div>
            }
        </div>
    );
}
 
export default OptionMedications;

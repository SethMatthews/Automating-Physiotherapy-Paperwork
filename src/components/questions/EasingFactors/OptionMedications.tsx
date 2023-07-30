

import CheckboxInput from "~/components/CheckboxInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const OptionMedications = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="Anti-inflammatories" value="Anti-inflammatories" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Pain relief " value="Pain relief " questionName={currentQuestionPath}/>
                    <CheckboxInput text="Muscle relaxants" value="Muscle relaxants" questionName={currentQuestionPath}/>            
                </div>
            }
        </div>
    );
}
 
export default OptionMedications;

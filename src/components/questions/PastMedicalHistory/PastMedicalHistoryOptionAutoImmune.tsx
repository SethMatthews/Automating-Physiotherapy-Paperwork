// PastMedicalHistoryOptionAutoImmune

import CheckboxInput from "~/components/CheckboxInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const PastMedicalHistoryOptionAutoImmune = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="Rheumatoid arthritis" value="Rheumatoid arthritis" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Axial spondylosis" value="Axial spondylosis" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Hypothyroidism" value="Hypothyroidism" questionName={currentQuestionPath}/>     
                    <CheckboxInput text="Psoriasis" value="Psoriasis" questionName={currentQuestionPath}/>     
                    <CheckboxInput text="Gout" value="Gout" questionName={currentQuestionPath}/>            
                </div>
            }
        </div>
    );
}
 
export default PastMedicalHistoryOptionAutoImmune;
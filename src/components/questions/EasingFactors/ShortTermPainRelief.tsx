// ShortTermPainRelief

import CheckboxInput from "~/components/CheckboxInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const ShortTermPainRelief = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="Paracetamol" value="Paracetamol" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Aspirin" value="Aspirin" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Panadol osteo" value="Panadol osteo" questionName={currentQuestionPath}/>

                </div>
            }
        </div>
    );
}
 
export default ShortTermPainRelief;

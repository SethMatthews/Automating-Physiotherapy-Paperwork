// AntiDepressants

import CheckboxInput from "~/components/CheckboxInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const AntiDepressants = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="Amitriptyline" value="Amitriptyline" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Citalopram" value="Citalopram" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Duloxetine" value="Duloxetine" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Fluoxetine" value="Fluoxetine" questionName={currentQuestionPath}/>
                </div>
            }
        </div>
    );
}
 
export default AntiDepressants;
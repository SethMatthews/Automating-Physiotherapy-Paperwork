// OpioidPainRelief

import CheckboxInput from "~/components/CheckboxInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const OpioidPainRelief = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="Codeine" value="Codeine" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Oxycodone" value="Oxycodone" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Tramadol" value="Tramadol" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Tramadol" value="Tramadol" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Morphine patch" value="Morphine patch" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Fentanyl" value="Fentanyl" questionName={currentQuestionPath}/>

                </div>
            }
        </div>
    );
}
 
export default OpioidPainRelief;
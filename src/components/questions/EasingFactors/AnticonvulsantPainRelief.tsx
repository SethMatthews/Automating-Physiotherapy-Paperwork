// AnticonvulsantPainRelief

import CheckboxInput from "~/components/CheckboxInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const AnticonvulsantPainRelief = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="Pregabalin (Lyrica)" value="Pregabalin (Lyrica)" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Gabapentin (neurontin)" value="Gabapentin (neurontin)" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Phenytoin (Dilantin)" value="Phenytoin (Dilantin)" questionName={currentQuestionPath}/>
                </div>
            }
        </div>
    );
}
 
export default AnticonvulsantPainRelief;
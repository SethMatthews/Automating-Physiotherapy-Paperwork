
import TextArea from "../TextArea";
import CheckboxInput from "~/components/CheckboxInput";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const IncidentTypeOptionOtherCheckbox = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <TextArea text="Other – please specify" value={currentQuestionPath} questionName={currentQuestionPath} />

                </div>
            }
        </div>
    );
}
 
export default IncidentTypeOptionOtherCheckbox;
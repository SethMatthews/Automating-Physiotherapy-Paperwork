// IncidentTypeOptionOther

import RadioInputOption from "~/components/RadioInput";
import TextArea from "../TextArea";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const IncidentTypeOptionOther = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <TextArea text="Other – please specify" value={currentQuestionPath} questionName={currentQuestionPath} />

                </div>
            }
        </div>
    );
}
 
export default IncidentTypeOptionOther;
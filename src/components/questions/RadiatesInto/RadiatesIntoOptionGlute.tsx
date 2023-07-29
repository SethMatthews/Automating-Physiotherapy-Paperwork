import RadioInputOption from "~/components/RadioInput";
import GluteOptionConstant from "./GluteOptionConstant";
import GluteOptionIntermittent from "./GluteOptionIntermittent";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const RadiatesIntoOptionGlute = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    const selectedOption = "Glute";
    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    {/* <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3> */}
                    <GluteOptionConstant  parentQuestionPath={currentQuestionPath} />
                    <GluteOptionIntermittent  parentQuestionPath={currentQuestionPath} />

                </div>
            }
        </div>

    );
}
 
export default RadiatesIntoOptionGlute;
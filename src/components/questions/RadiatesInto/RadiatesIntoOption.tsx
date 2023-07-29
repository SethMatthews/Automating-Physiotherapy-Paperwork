import RadioInputOption from "~/components/RadioInput";
import OptionConstantIntermittent from "./OptionConstantIntermittent";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const RadiatesIntoOption = ({ painLocation, parentQuestionPath, isOptionSelected}:{painLocation: string, parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    const selectedOption = painLocation;
    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    {/* <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3> */}
                    <OptionConstantIntermittent selectedOption="Constant"  parentQuestionPath={currentQuestionPath} />
                    <OptionConstantIntermittent selectedOption="Intermittent"  parentQuestionPath={currentQuestionPath} />
                    {/* <GluteOptionIntermittent  parentQuestionPath={currentQuestionPath} /> */}

                </div>
            }
        </div>

    );
}
 
export default RadiatesIntoOption;
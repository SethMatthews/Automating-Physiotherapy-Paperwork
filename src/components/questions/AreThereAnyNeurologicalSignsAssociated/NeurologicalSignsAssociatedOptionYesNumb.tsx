// NeurologicalSignsAssociatedOptionYes



import RadioInputOption from "../../RadioInput";
import RadiatesIntoOption from "../RadiatesInto/RadiatesIntoOption";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;


const NeurologicalSignsAssociatedOptionYesNumb = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption: string, parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (
        
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    {/* <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3> */}
                    <RadiatesIntoOption painLocation="Glute"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOption painLocation="Lateral thigh "  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOption painLocation="Lateral calf"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOption painLocation="Posterior thigh"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOption painLocation="Anterior thigh"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOption painLocation="Into the foot"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />

                </div>
            }
        </div>

    );
}
 
export default NeurologicalSignsAssociatedOptionYesNumb;
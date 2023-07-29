import LeftSideOfLowBackOptionThePainIsLocalToTheLowBack from "./LeftSideOfLowBackOptionThePainIsLocalToTheLowBack";
import RadioInputOption from "../../RadioInput";
import OptionRadiatesLeftRightBilaterally from "../RadiatesInto/OptionRadiatesLeftRightBilaterally";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;


const WhereIsThePainLocatedOptionBilaterally = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption: string, parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (
        
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    {/* <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3> */}

                    <LeftSideOfLowBackOptionThePainIsLocalToTheLowBack  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <OptionRadiatesLeftRightBilaterally  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />

                    {/* <RadioInputOption text="Days" value="Days" questionName={currentQuestionPath}/>
                        {isOptionSelected("Days",currentQuestionPath) && 
                        <WasThereAnIncidentThatCausedThePain selectedOption="Days" isOptionSelected={isOptionSelected} />
                        } */}


                </div>
            }
        </div>

    );
}
 
export default WhereIsThePainLocatedOptionBilaterally;
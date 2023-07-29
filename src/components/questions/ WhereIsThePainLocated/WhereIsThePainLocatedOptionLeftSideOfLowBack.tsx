import LeftSideOfLowBackOptionThePainIsLocalToTheLowBack from "./LeftSideOfLowBackOptionThePainIsLocalToTheLowBack";
import RadioInputOption from "../../RadioInput";
import WhereIsThePainLocatedOptionRadiatesInto from "../WhereIsThePainLocatedOptionRadiatesInto";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;


const WhereIsThePainLocatedOptionLeftSideOfLowBack = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption: string, parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (
        
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    {/* <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3> */}

                    <LeftSideOfLowBackOptionThePainIsLocalToTheLowBack  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <WhereIsThePainLocatedOptionRadiatesInto  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />



                </div>
            }
        </div>

    );
}
 
export default WhereIsThePainLocatedOptionLeftSideOfLowBack;
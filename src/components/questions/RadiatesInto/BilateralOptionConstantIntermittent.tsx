//BilateralOptionConstantIntermittent




import RadioInputOption from "~/components/RadioInput";
import OptionConstantIntermittent from "./OptionConstantIntermittent";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const BilateralOptionConstantIntermittent = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>

            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">

                    <OptionConstantIntermittent selectedOption="Constant" parentQuestionPath={currentQuestionPath} />
                    <OptionConstantIntermittent selectedOption="Intermittent" parentQuestionPath={currentQuestionPath} />
                    



                </div>
            }
        </div>


    );
}
 
export default BilateralOptionConstantIntermittent;
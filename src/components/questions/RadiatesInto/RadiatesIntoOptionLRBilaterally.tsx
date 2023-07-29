import RadioInputOption from "~/components/RadioInput";
import BilateralOptionConstantIntermittent from "./BilateralOptionConstantIntermittent";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const RadiatesIntoOptionLRBilaterally = ({ painLocation, parentQuestionPath, isOptionSelected}:{painLocation: string, parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    const selectedOption = painLocation;
    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">

                    <BilateralOptionConstantIntermittent selectedOption="Left" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <BilateralOptionConstantIntermittent selectedOption="Right" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}  />
                    <BilateralOptionConstantIntermittent selectedOption="Bilateral" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}  />



                   

                    {/* <OptionConstantIntermittent selectedOption="Constant"  parentQuestionPath={currentQuestionPath} />
                    <OptionConstantIntermittent selectedOption="Intermittent"  parentQuestionPath={currentQuestionPath} /> */}


                </div>
            }
        </div>

    );
}
 
export default RadiatesIntoOptionLRBilaterally;
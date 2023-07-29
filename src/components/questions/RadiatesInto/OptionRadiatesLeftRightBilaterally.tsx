//OptionRadiatesLeftRightBilaterally


import RadioInputOption from "~/components/RadioInput";
import RadiatesIntoOptionLRBilaterally from "./RadiatesIntoOptionLRBilaterally";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;


const OptionRadiatesLeftRightBilaterally = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {

    const selectedOption = "The pain radiates into";
    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3">The pain radiates into?</h3>

                    <RadiatesIntoOptionLRBilaterally painLocation="Glute"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOptionLRBilaterally painLocation="Lateral thigh "  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOptionLRBilaterally painLocation="Lateral calf"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOptionLRBilaterally painLocation="Posterior thigh"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOptionLRBilaterally painLocation="Anterior thigh"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />
                    <RadiatesIntoOptionLRBilaterally painLocation="Into the foot"  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />

                </div>
            }
        </div>

    );
}
 
export default OptionRadiatesLeftRightBilaterally;
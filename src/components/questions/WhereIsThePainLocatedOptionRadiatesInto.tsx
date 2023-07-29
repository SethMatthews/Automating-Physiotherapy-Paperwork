import RadioInputOption from "../RadioInput";
import RadiatesIntoOptionGlute from "./RadiatesInto/RadiatesIntoOptionGlute";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;


const WhereIsThePainLocatedOptionRadiatesInto = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {

    const selectedOption = "The pain radiates into";
    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3">The pain radiates into?</h3>

                    <RadiatesIntoOptionGlute  parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected} />

                </div>
            }
        </div>

    );
}
 
export default WhereIsThePainLocatedOptionRadiatesInto;
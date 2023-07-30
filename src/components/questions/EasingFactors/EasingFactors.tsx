// EasingFactors

import AggravatingFactorsOptions from "../AggravatingFactors/AggravatingFactorsOptions";
import OptionMedications from "./OptionMedications";




type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const EasingFactors = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-3 mb-3">{parentQuestionPath}</h3>

            <AggravatingFactorsOptions selectedOption="Heat" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Rest" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Stretching" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Movement" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Massage cream" parentQuestionPath={parentQuestionPath}  />
            <OptionMedications selectedOption="Medications" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}   />

            {/* <OptionConstantIntermittent selectedOption="Yes" parentQuestionPath={parentQuestionPath}  isOptionSelected={isOptionSelected} /> */}
        </div>
    );
}
 
export default EasingFactors;
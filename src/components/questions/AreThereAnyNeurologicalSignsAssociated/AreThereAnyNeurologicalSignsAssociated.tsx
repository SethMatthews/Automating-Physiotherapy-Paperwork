//AreThereAnyNeurologicalSignsAssociated

import NeurologicalSignsAssociatedOptionNo from "./NeurologicalSignsAssociatedOptionNo";
import NeurologicalSignsAssociatedOptionYes from "./NeurologicalSignsAssociatedOptionYes";




type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const AreThereAnyNeurologicalSignsAssociated = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-9 text-lg font-semibold mb-3">{parentQuestionPath}</h3>

            <NeurologicalSignsAssociatedOptionNo selectedOption="No" parentQuestionPath={parentQuestionPath}  />
            <NeurologicalSignsAssociatedOptionYes selectedOption="Yes" parentQuestionPath={parentQuestionPath}  isOptionSelected={isOptionSelected} />
        </div>
    );
}
 
export default AreThereAnyNeurologicalSignsAssociated;

import NeurologicalSignsAssociatedOptionNo from "../AreThereAnyNeurologicalSignsAssociated/NeurologicalSignsAssociatedOptionNo";
import PainWorseOptionMorning from "./PainWorseOptionMorning";
import PainWorseOptionNight from "./PainWorseOptionNight";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhenIsThePainWorse = ({parentQuestionPath, isCheckboxOptionSelected}:{parentQuestionPath: string, isCheckboxOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-9 text-lg font-semibold mb-3">{parentQuestionPath}</h3>
            <PainWorseOptionMorning selectedOption="Mornings" parentQuestionPath={parentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected}   />
            <NeurologicalSignsAssociatedOptionNo selectedOption="Throughout the day" parentQuestionPath={parentQuestionPath}  />
            <PainWorseOptionNight  selectedOption="Night time" parentQuestionPath={parentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected} />
        </div>
    );
}
export default WhenIsThePainWorse;
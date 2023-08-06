
import AggravatingFactorsOptions from "../AggravatingFactors/AggravatingFactorsOptions";
import PastMedicalHistoryOptionAutoImmune from "./PastMedicalHistoryOptionAutoImmune";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const PastMedicalHistory = ({parentQuestionPath, isCheckboxOptionSelected}:{parentQuestionPath: string, isCheckboxOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-9 text-lg font-semibold mb-3">{parentQuestionPath}</h3>
            <PastMedicalHistoryOptionAutoImmune selectedOption="Auto-immune conditions" parentQuestionPath={parentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected}   />
            <AggravatingFactorsOptions selectedOption="Diabetes mellitus" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Hypertension" parentQuestionPath={parentQuestionPath}  />
            
        </div>
    );
}
 
export default PastMedicalHistory;
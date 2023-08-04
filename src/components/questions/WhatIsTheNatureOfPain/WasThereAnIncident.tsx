// WasThereAnIncident


import WasThereAnIncidentOptionNo from "./WasThereAnIncidentOptionNo";
import WasThereAnIncidentOptionYes from "./WasThereAnIncidentOptionYes";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WasThereAnIncident = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-3 mb-3">Was there an incident that caused the pain?</h3>
            <WasThereAnIncidentOptionNo selectedOption="No" parentQuestionPath={parentQuestionPath}  />
            <WasThereAnIncidentOptionYes selectedOption="Yes" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}   />

        </div>
    );
}
 
export default WasThereAnIncident;


WasThereAnIncidentOptionYes
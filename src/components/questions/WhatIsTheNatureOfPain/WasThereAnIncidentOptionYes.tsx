// WasThereAnIncidentOptionYes


import RadioInputOption from "~/components/RadioInput";
import IncidentTypeOption from "./IncidentTypeOption";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WasThereAnIncidentOptionYes = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <IncidentTypeOption selectedOption="Gardening" parentQuestionPath={currentQuestionPath} />
                    <IncidentTypeOption selectedOption="Picking up an object" parentQuestionPath={currentQuestionPath} />
                    <IncidentTypeOption selectedOption="Housework/ cleaning" parentQuestionPath={currentQuestionPath} />
                    <IncidentTypeOption selectedOption="Moving around in bed" parentQuestionPath={currentQuestionPath} />
                    <IncidentTypeOption selectedOption="Gym work" parentQuestionPath={currentQuestionPath} />
                    <IncidentTypeOption selectedOption="Sport" parentQuestionPath={currentQuestionPath} />
                    <IncidentTypeOption selectedOption="Other – please specify" parentQuestionPath={currentQuestionPath} />

                </div>
            }
        </div>
    );
}
 
export default WasThereAnIncidentOptionYes;

// IncidentTypeOption
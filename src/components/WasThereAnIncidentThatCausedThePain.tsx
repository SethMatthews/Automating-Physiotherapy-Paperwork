import RadioInputOption from "./RadioInput";
import WhatWasTheInscident from "./WhatWasTheIncident";


const WasThereAnIncidentThatCausedThePain = ({selectedOption, isOptionSelected}:{selectedOption:string, isOptionSelected: (option: string, questionNameToCheck: string) => boolean}) => {
    return (
        <div className="ml-10">
            <h3 className="mt-3 mb-3">Was there an incident that caused the pain?</h3>
            <RadioInputOption text="Yes" value="Yes" questionName={"Was there an incident that caused the pain?"+"-sub-"+selectedOption}/>

            {isOptionSelected("Yes","Was there an incident that caused the pain?"+"-sub-"+selectedOption) && 
            <WhatWasTheInscident selectedOption="Yes"/>
            }
                
            <RadioInputOption text="No" value="No" questionName={"Was there an incident that caused the pain?"+"-sub-"+selectedOption}/>
        </div>

    );
}
 
export default WasThereAnIncidentThatCausedThePain;
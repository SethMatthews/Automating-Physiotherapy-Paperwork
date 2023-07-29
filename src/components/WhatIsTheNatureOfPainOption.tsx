import RadioInputOption from "./RadioInput";
import WasThereAnIncidentThatCausedThePain from "./WasThereAnIncidentThatCausedThePain";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhatIsTheNatureOfPainOption = ({selectedOption, isOptionSelected}:{ selectedOption: string, isOptionSelected: isOptionSelectedType}) => {
    return (
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName="What is the nature of pain?"/>
            {isOptionSelected(selectedOption,"What is the nature of pain?") && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3>
                    <RadioInputOption text="Days" value="Days" questionName={"How long have been experiencing low back pain?"+"-sub-"+selectedOption}/>
                        {isOptionSelected("Days","How long have been experiencing low back pain?"+"-sub-"+selectedOption) && 
                        <WasThereAnIncidentThatCausedThePain selectedOption="Days" isOptionSelected={isOptionSelected} />
                        }
                    <RadioInputOption text="Weeks" value="Weeks" questionName={"How long have been experiencing low back pain?"+"-sub-"+selectedOption}/>
                        {isOptionSelected("Weeks","How long have been experiencing low back pain?"+"-sub-"+selectedOption) && 
                        <WasThereAnIncidentThatCausedThePain selectedOption="Weeks" isOptionSelected={isOptionSelected} />
                        }
                    <RadioInputOption text="Months" value="Months" questionName={"How long have been experiencing low back pain?"+"-sub-"+selectedOption}/>
                        {isOptionSelected("Months","How long have been experiencing low back pain?"+"-sub-"+selectedOption) && 
                        <WasThereAnIncidentThatCausedThePain selectedOption="Months" isOptionSelected={isOptionSelected} />
                        }
                </div>
            }

        </div>
        
    );
}
 
export default WhatIsTheNatureOfPainOption;
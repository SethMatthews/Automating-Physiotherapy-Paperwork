import RadioInputOption from "./RadioInput";
import WasThereAnIncidentThatCausedThePain from "./WasThereAnIncidentThatCausedThePain";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhatIsTheNatureOfPainOptionAcute = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {

    console.log("parentQuestionPath",parentQuestionPath);

    const selectedOption = "Acute";
    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3>

                    {/* <label htmlFor="number">Experiencing low back pain for </label>
                    <select name="number" id="number">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <label htmlFor="period"></label>
                    <select name="period" id="period">
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </select> */}


                    <RadioInputOption text="Days" value="Days" questionName={currentQuestionPath}/>
                        {isOptionSelected("Days",currentQuestionPath) && 
                        <WasThereAnIncidentThatCausedThePain selectedOption="Days" isOptionSelected={isOptionSelected} />
                        }
                    <RadioInputOption text="Weeks" value="Weeks" questionName={currentQuestionPath}/>
                        {isOptionSelected("Weeks",currentQuestionPath) && 
                        <WasThereAnIncidentThatCausedThePain selectedOption="Weeks" isOptionSelected={isOptionSelected} />
                        }
                    <RadioInputOption text="Months" value="Months" questionName={currentQuestionPath}/>
                        {isOptionSelected("Months",currentQuestionPath) && 
                        <WasThereAnIncidentThatCausedThePain selectedOption="Months" isOptionSelected={isOptionSelected} />
                        }
                </div>
            }

        </div>
    );
}
 
export default WhatIsTheNatureOfPainOptionAcute;
// AggravatingFactorsOptionsGym

import CheckboxInput from "~/components/CheckboxInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const AggravatingFactorsOptionsGym = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="Squats" value="Squats" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Deadlift" value="Deadlift" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Cycling" value="Cycling" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Rowing" value="Rowing" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Core exercises" value="Core exercises" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Running" value="Running" questionName={currentQuestionPath}/>
                
                </div>
            }
        </div>
    );
}
 
export default AggravatingFactorsOptionsGym;

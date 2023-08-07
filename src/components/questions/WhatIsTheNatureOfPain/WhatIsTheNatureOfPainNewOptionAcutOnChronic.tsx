// WhatIsTheNatureOfPainNewOptionAcutOnChronic




import RadioInputOption from "~/components/RadioInput";
import HowLongForAcuuteOnChronic from "./HowLongForAcuuteOnChronic";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhatIsTheNatureOfPainNewOptionAcutOnChronic = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3"> How long have been experiencing ongoing low back pain? </h3>
                    <HowLongForAcuuteOnChronic selectedOption="Months" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <HowLongForAcuuteOnChronic selectedOption="Years" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>

                </div>
            }
        </div>
    );
}
 
export default WhatIsTheNatureOfPainNewOptionAcutOnChronic;





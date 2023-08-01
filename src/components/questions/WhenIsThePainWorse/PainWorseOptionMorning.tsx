


import RadioInputOption from "~/components/RadioInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const PainWorseOptionMorning = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3">Is there a stiffness associated with pain?</h3>
                    <RadioInputOption text="Yes" value="Yes" questionName={currentQuestionPath}/>
                    <RadioInputOption text="No" value="No " questionName={currentQuestionPath}/>
                </div>
            }
        </div>
    );
}
 
export default PainWorseOptionMorning;

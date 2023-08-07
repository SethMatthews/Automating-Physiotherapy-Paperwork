// FlaredHowLong


import RadioInputOption from "~/components/RadioInput";
import FlaredHowLongOption from "./FlaredHowLongOption";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const FlaredHowLong = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <h3 className="mt-3 mb-3"> How long have been experiencing ongoing low back pain? </h3>
                    <FlaredHowLongOption selectedOption="Days" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <FlaredHowLongOption selectedOption="Weeks" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>
                    <FlaredHowLongOption selectedOption="Months" parentQuestionPath={currentQuestionPath} isOptionSelected={isOptionSelected}/>

                </div>
            }
        </div>
    );
}
 
export default FlaredHowLong;
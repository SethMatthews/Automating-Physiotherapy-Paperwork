//OptionConstantIntermittent

import RadioInputOption from "~/components/RadioInput";

const OptionConstantIntermittent = ({selectedOption, parentQuestionPath}:{selectedOption:string , parentQuestionPath: string}) => {


    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
        </div>


    );
}
 
export default OptionConstantIntermittent;
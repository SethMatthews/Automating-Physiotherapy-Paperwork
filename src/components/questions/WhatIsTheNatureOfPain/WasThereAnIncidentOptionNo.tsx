// WasThereAnIncidentOptionNo 

import RadioInputOption from "~/components/RadioInput";

const WasThereAnIncidentOptionNo = ({selectedOption, parentQuestionPath}:{selectedOption:string , parentQuestionPath: string}) => {

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
        </div>


    );
}

export default WasThereAnIncidentOptionNo;
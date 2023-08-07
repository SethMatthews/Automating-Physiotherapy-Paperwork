// HowLongForAcuuteOnChronicOption


import DropdownInputAcuteOnChronic from "./DropdownInputAcuteOnChronic";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const HowLongForAcuuteOnChronicOption = ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    // const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            {/* <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/> */}
            <DropdownInputAcuteOnChronic  selectedOption={selectedOption} parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected} />

            
        </div>
    );
}
 
export default HowLongForAcuuteOnChronicOption;
import RadioInputOption from "../../RadioInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;


const LeftSideOfLowBackOptionThePainIsLocalToTheLowBack = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    const selectedOption = "The pain is local to the low back"; 
    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption}  questionName={parentQuestionPath} />
        </div>
    );
}
 
export default LeftSideOfLowBackOptionThePainIsLocalToTheLowBack;
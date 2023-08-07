
import HowLongFlaredUpOption from "./HowLongFlaredUpOption";



type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const HowLongFlaredUp = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    return (  
        <div className="ml-10">
            <h3 className="mt-3 mb-3"> How long has it been since it has recently flared up?</h3>
            <HowLongFlaredUpOption selectedOption="Days" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}/>
            <HowLongFlaredUpOption selectedOption="Weeks" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}/>
            <HowLongFlaredUpOption selectedOption="Months" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}/>

        </div>
    );
}
 
export default HowLongFlaredUp;

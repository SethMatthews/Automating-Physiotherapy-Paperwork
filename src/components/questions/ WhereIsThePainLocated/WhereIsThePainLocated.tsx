
import WhereIsThePainLocatedOptionLeftSideOfLowBack from "./WhereIsThePainLocatedOptionLeftSideOfLowBack";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhereIsThePainLocated = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-3 mb-3">Where is the pain located?</h3>
            <WhereIsThePainLocatedOptionLeftSideOfLowBack  parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected} />
            


        </div>

    );
}
 
export default WhereIsThePainLocated;
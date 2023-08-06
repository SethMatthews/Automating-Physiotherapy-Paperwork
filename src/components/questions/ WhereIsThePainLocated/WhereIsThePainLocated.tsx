
import WhereIsThePainLocatedOptionBilaterally from "./WhereIsThePainLocatedOptionBilaterally";
import WhereIsThePainLocatedOptionLeftSideOfLowBack from "./WhereIsThePainLocatedOptionLeftSideOfLowBack";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhereIsThePainLocated = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-9 text-lg font-semibold mb-3">Where is the pain located?</h3>
            <WhereIsThePainLocatedOptionLeftSideOfLowBack selectedOption="Left side of lower back"  parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected} />
            <WhereIsThePainLocatedOptionLeftSideOfLowBack selectedOption="Right side of low back"  parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected} />
            <WhereIsThePainLocatedOptionLeftSideOfLowBack selectedOption="More on one side that changes between side"  parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected} />

            <WhereIsThePainLocatedOptionBilaterally selectedOption="Bilaterally" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected} />

            {/* <WhereIsThePainLocatedOptionLeftSideOfLowBack selectedOption="Bilaterally"  parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected} /> */}
            

        </div>

    );
}
 
export default WhereIsThePainLocated;
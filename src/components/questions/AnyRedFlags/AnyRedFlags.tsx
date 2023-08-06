// AnyRedFlags
import RedFlagOptionNo from "./RedFlagOptionNo";
import RedFlagOptionYes from "./RedFlagOptionYes";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const AnyRedFlags = ({parentQuestionPath, isCheckboxOptionSelected}:{parentQuestionPath: string, isCheckboxOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-9 text-lg font-semibold mb-3">{parentQuestionPath}</h3>
            <RedFlagOptionNo selectedOption="No" parentQuestionPath={parentQuestionPath}  />
            <RedFlagOptionYes selectedOption="Yes" parentQuestionPath={parentQuestionPath} isCheckboxOptionSelected={isCheckboxOptionSelected}   />

        </div>
    );
}
 
export default AnyRedFlags;



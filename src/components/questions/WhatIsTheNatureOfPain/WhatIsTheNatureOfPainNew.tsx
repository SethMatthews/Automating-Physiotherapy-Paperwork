
import WhatIsTheNatureOfPainNewOption from "./WhatIsTheNatureOfPainNewOption";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhatIsTheNatureOfPainNew = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-3 mb-3">{parentQuestionPath}</h3>
            <WhatIsTheNatureOfPainNewOption selectedOption="Acute" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
            <WhatIsTheNatureOfPainNewOption selectedOption="Chronic" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
            <WhatIsTheNatureOfPainNewOption selectedOption="Acute on chronic" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
        </div>
    );
}
export default WhatIsTheNatureOfPainNew;
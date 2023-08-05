
import WhatIsTheNatureOfPainNewOption from "./WhatIsTheNatureOfPainNewOption";
import WhatIsTheNatureOfPainNewOptionAcutOnChronic from "./WhatIsTheNatureOfPainNewOptionAcutOnChronic";
import WhatIsTheNatureOfPainNewOptionChronic from "./WhatIsTheNatureOfPainNewOptionChronic";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhatIsTheNatureOfPainNew = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-3 mb-3">{parentQuestionPath}</h3>
            <WhatIsTheNatureOfPainNewOption selectedOption="Acute" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
            <WhatIsTheNatureOfPainNewOptionChronic selectedOption="Chronic" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
            <WhatIsTheNatureOfPainNewOptionAcutOnChronic selectedOption="Acute on chronic" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
        </div>
    );
}
export default WhatIsTheNatureOfPainNew;
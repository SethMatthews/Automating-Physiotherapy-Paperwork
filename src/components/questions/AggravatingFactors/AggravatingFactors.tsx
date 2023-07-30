
import AggravatingFactorsOptions from "./AggravatingFactorsOptions";
import AggravatingFactorsOptionsGym from "./AggravatingFactorsOptionsGym";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const AggravatingFactors = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-3 mb-3">{parentQuestionPath}</h3>

            <AggravatingFactorsOptions selectedOption="Bending forward" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Bending backwards" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Sitting for long periods" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Standing for long periods" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Sitting" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptions selectedOption="Putting socks and shoes on" parentQuestionPath={parentQuestionPath}  />
            <AggravatingFactorsOptionsGym  selectedOption="Gym exercises" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
            <AggravatingFactorsOptions selectedOption="Other please specific" parentQuestionPath={parentQuestionPath}  />

            

            {/* <OptionConstantIntermittent selectedOption="Yes" parentQuestionPath={parentQuestionPath}  isOptionSelected={isOptionSelected} /> */}
        </div>
    );
}
 
export default AggravatingFactors;
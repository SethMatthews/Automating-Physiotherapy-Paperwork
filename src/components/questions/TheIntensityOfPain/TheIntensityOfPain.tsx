import TheIntensityOfPainOption from "./TheIntensityOfPainOption";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const TheIntensityOfPain = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {
    
    return (  
        <div>
            <h3 className="mt-9 text-lg font-semibold mb-3">{parentQuestionPath}</h3>
            <TheIntensityOfPainOption selectedOption="Rest" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
            <TheIntensityOfPainOption selectedOption="Aggravating factors can peak pain to" parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected}  />
        </div>
    );
}
export default TheIntensityOfPain;
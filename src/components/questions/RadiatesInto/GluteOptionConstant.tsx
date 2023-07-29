import RadioInputOption from "~/components/RadioInput";

const GluteOptionConstant = ({parentQuestionPath}:{parentQuestionPath: string}) => {

    const selectedOption = "Constant";

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
        </div>


    );
}
 
export default GluteOptionConstant;
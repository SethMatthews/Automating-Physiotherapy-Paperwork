import RadioInputOption from "~/components/RadioInput";

const GluteOptionIntermittent = ({parentQuestionPath}:{parentQuestionPath: string}) => {

    const selectedOption = "Intermittent";

    return (  
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
        </div>


    );
}
 
export default GluteOptionIntermittent;
import RadioInputOption from "../../RadioInput";


const NeurologicalSignsAssociatedOptionNo = ({selectedOption, parentQuestionPath}:{selectedOption: string, parentQuestionPath: string}) => {


    return (
        
        <div>
            <RadioInputOption text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
        </div>

    );
}
 
export default NeurologicalSignsAssociatedOptionNo;
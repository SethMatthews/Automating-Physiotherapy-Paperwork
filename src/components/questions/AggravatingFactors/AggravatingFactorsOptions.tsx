import CheckboxInput from "~/components/CheckboxInput";

const AggravatingFactorsOptions = ({selectedOption, parentQuestionPath}:{selectedOption:string , parentQuestionPath: string}) => {


    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
        </div>


    );
}
 
export default AggravatingFactorsOptions;
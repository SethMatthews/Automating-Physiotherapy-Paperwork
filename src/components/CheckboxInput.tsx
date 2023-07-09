const CheckboxInput = ({ text, value, questionName }:{ text: string, value: string , questionName: string}) => {
    return (  
        <div>
            <input type="checkbox" id={value} name={questionName} value={value}/>
            <label htmlFor={value}> {text}</label><br/>
        </div>
    );
}
 
export default CheckboxInput;
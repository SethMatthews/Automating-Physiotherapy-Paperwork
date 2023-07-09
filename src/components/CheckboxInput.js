const CheckboxInput = ({ text, value, questionName}) => {
    return (  
        <div>
            <input type="checkbox" id={value} name={questionName} value={value}/>
            <label for={value}> {text}</label><br/>
        </div>
    );
}
 
export default CheckboxInput;
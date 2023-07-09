const RadioInputOption = ({text, value,questionName}) => {
    return (  
            <div>
                <input type="radio" id={value} name={questionName} value={value}/>
                <label for={value}>{text}</label>
                <br/>
            </div>
    );
}
 
export default RadioInputOption;
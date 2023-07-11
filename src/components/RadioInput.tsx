
const RadioInputOption= ({text, value,questionName}:{text: string, value: string,questionName: string}) => {
    return (  
            <div>
                <input type="radio" id={value} name={questionName} value={value}/>
                <label htmlFor={value}>{text}</label>
                <br/>
            </div>
    );
}
 
export default RadioInputOption;
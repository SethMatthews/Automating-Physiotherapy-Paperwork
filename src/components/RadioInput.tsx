
const RadioInputOption= ({text, value,questionName}:{text: string, value: string,questionName: string}) => {
    return (  
            <div className="m-1">
                <input type="radio" id={value} name={questionName} value={value}/>
                <label htmlFor={value}>{text}</label>
                <br/>
            </div>
    );
}
 
export default RadioInputOption;
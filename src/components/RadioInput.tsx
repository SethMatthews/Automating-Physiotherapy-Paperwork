
const RadioInputOption= ({text, value,questionName}:{text: string, value: string,questionName: string}) => {
    return (  
            <div className="m-1 border-gray-100 border-2 rounded-md py-3 px-1 hover:shadow-xl">
                <input className="m-2" type="radio" id={value} name={questionName} value={value}/>
                <label htmlFor={value}>{text}</label>
                <br/>
            </div>
    );
}
 
export default RadioInputOption;
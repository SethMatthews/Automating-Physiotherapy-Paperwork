const DropdownInput= ({text, value,questionName}:{text: string, value: string,questionName: string}) => {
    return (  
            <div  id="input" className="m-1 border-gray-100 border-2 rounded-md py-3 px-1 hover:shadow-lg">
                {/* <input className="m-2" type="radio" id={value} name={questionName} value={value}/>
                <label htmlFor={value}>{text}</label>
               */}
                <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3>

                    <label htmlFor={value}> {text} </label>
                    <select name={questionName} id={value}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>

                    {/* <label htmlFor="period"></label>
                    <select name="period" id="period">
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </select> */}
            </div>
    );
}
 
export default DropdownInput;
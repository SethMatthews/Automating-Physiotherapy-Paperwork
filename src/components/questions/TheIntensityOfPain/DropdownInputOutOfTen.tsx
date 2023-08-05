// DropdownInputOutOfTen



const DropdownInputOutOfTen= ({selectedOption, parentQuestionPath}:{selectedOption:string , parentQuestionPath: string }) => {

    // const currentQuestionPath = questionName+"-"+selectedOption;

    return ( 
            <div>
                <div  id="input" className="m-1 border-gray-100 border-2 rounded-md py-3 px-1 hover:shadow-lg">
                    <select className="ml-3 rounded-sm" name={parentQuestionPath} id={parentQuestionPath}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <label htmlFor={parentQuestionPath}> out of 10 </label>
                </div>

            </div> 
            
    );
}
 
export default DropdownInputOutOfTen;
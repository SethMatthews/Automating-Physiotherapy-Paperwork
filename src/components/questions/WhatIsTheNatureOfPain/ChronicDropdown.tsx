
const ChronicDropdown= ({parentQuestionPath}:{parentQuestionPath: string}) => {

    // const currentQuestionPath = questionName+"-"+selectedOption;

    return ( 
            <div>
                <div  id="input" className="m-1 border-gray-100 border-2 rounded-md py-3 px-1 hover:shadow-lg">
                    <select className="ml-3 rounded-sm" name={parentQuestionPath} id={parentQuestionPath}>
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                        <option value="5+">5+ </option>
                        <option value="10+">10+ </option>
                        <option value="20+">20+ </option>
                    </select>
                    <label className="ml-3" htmlFor={parentQuestionPath}>years</label>
                </div>

            </div> 
            
    );
}
 
export default ChronicDropdown;
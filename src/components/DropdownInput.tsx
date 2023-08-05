import WasThereAnIncident from "./questions/WhatIsTheNatureOfPain/WasThereAnIncident";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const DropdownInput= ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

    // const currentQuestionPath = questionName+"-"+selectedOption;

    return ( 
            <div>
                <div  id="input" className="m-1 border-gray-100 border-2 rounded-md py-3 px-1 hover:shadow-lg">
                    <select className="ml-3" name={parentQuestionPath} id={parentQuestionPath}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <label htmlFor={parentQuestionPath}> {selectedOption} </label>
                </div>

            { 
                isOptionSelected("1",parentQuestionPath) &&
                <div className="ml-10">
                    <WasThereAnIncident isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"1"} />
                </div>   
            }
            { 
                isOptionSelected("2",parentQuestionPath) &&
                <div className="ml-10">
                    <WasThereAnIncident isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"2"} />
                </div>   
            }
            { 
                isOptionSelected("3",parentQuestionPath) &&
                <div className="ml-10">
                    <WasThereAnIncident isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"3"} />
                </div>   
            }
            { 
                isOptionSelected("4",parentQuestionPath) &&
                <div className="ml-10">
                    <WasThereAnIncident isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"4"} />
                </div>   
            }
            { 
                isOptionSelected("5",parentQuestionPath) &&
                <div className="ml-10">
                    <WasThereAnIncident isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"5"} />
                </div>   
            }
            { 
                isOptionSelected("6",parentQuestionPath) &&
                <div className="ml-10">
                    <WasThereAnIncident isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"6"} />
                </div>   
            }

            </div> 
            
    );
}
 
export default DropdownInput;
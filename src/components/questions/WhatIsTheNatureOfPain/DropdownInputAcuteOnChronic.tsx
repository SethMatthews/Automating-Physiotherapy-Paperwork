// DropdownInputAcuteOnChronic

import HowLongFlaredUp from "./HowLongFlaredUp";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const DropdownInputAcuteOnChronic= ({selectedOption, parentQuestionPath, isOptionSelected}:{selectedOption:string , parentQuestionPath: string, isOptionSelected:isOptionSelectedType }) => {

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
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <label htmlFor={parentQuestionPath}> {selectedOption} </label>
                </div>

            { 
                isOptionSelected("1",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"1"} />
                </div>   
            }
            { 
                isOptionSelected("2",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"2"} />
                </div>   
            }
            { 
                isOptionSelected("3",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"3"} />
                </div>   
            }
            { 
                isOptionSelected("4",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"4"} />
                </div>   
            }
            { 
                isOptionSelected("5",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"5"} />
                </div>   
            }
            { 
                isOptionSelected("6",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"6"} />
                </div>   
            }
            { 
                isOptionSelected("7",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"7"} />
                </div>   
            }
            { 
                isOptionSelected("8",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"8"} />
                </div>   
            }
            { 
                isOptionSelected("9",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"9"} />
                </div>   
            }
            { 
                isOptionSelected("10",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"10"} />
                </div>   
            }
            { 
                isOptionSelected("11",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"11"} />
                </div>   
            }
            { 
                isOptionSelected("12",parentQuestionPath) &&
                <div className="ml-10">
                    <HowLongFlaredUp isOptionSelected={isOptionSelected} parentQuestionPath={parentQuestionPath+"-"+"12"} />
                </div>   
            }

            </div> 
            
    );
}
 
export default DropdownInputAcuteOnChronic;
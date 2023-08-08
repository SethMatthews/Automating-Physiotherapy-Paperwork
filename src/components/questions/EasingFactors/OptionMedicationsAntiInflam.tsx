// OptionMedicationsAntiInflam

import CheckboxInput from "~/components/CheckboxInput";


type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const OptionMedicationsAntiInflam = ({selectedOption, parentQuestionPath, isCheckboxOptionSelected}:{selectedOption:string , parentQuestionPath: string, isCheckboxOptionSelected:isOptionSelectedType }) => {

    const currentQuestionPath = parentQuestionPath+"-"+selectedOption;
    return (  
        <div>
            <CheckboxInput text={selectedOption} value={selectedOption} questionName={parentQuestionPath}/>
            {isCheckboxOptionSelected(selectedOption,parentQuestionPath) && 
                <div className="ml-10">
                    <CheckboxInput text="Celecoxib (celebrex)" value="Celecoxib (celebrex)" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Diclofenac (Voltaren)" value="Diclofenac (Voltaren)" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Ibuprofen (nurofen)" value="Ibuprofen (nurofen)" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Meloxicam (Mobic)" value="Meloxicam (Mobic)" questionName={currentQuestionPath}/> 
                    <CheckboxInput text="Naproxen (Aleve)" value="Naproxen (Aleve)" questionName={currentQuestionPath}/> 
                    <CheckboxInput text="Oxaprozin (Daypro)" value="Oxaprozin (Daypro)" questionName={currentQuestionPath}/>
                    <CheckboxInput text="Piroxicam (FELDENE)" value="Piroxicam (FELDENE)" questionName={currentQuestionPath}/>              
                </div>
            }
        </div>
    );
}
 
export default OptionMedicationsAntiInflam;

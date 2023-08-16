// OutputWhatIsTheNatureOfPain

import { error } from "console";



type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

type formProps = {
    isOptionSelected : isOptionSelectedType,
    resultsToDisplay: {[questionName: string]: string[]};

}

// const convertResultValues = (valueArray:string[]) => {
//     let output: string = "";
//     if (valueArray.length>1){
//         valueArray.map((individualValue)=>{
//             output +=  ","


//         })

//     }


// }



const OutputWhatIsTheNatureOfPain = ({isOptionSelected, resultsToDisplay }:formProps) => {
    
    let lowBackPainType: string|undefined = "LOWBACKBACINTYPE";
    if(resultsToDisplay.hasOwnProperty("What is the nature of pain?")){
        lowBackPainType = resultsToDisplay["What is the nature of pain?"]?.toString();
    }
    let periodType: string|undefined  = "DAYS/WEEKS/MONTHS?YEARS";
    if(lowBackPainType && resultsToDisplay.hasOwnProperty("What is the nature of pain?"+"-"+lowBackPainType)){
        periodType = resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType]?.toString();
    }
    let numberOf: string|undefined  = "NUMBEROF";
    if(periodType && resultsToDisplay.hasOwnProperty("What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType)){
        numberOf = resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType]?.toString();
    }
    if (lowBackPainType===undefined || periodType===undefined || numberOf===undefined ){
        throw new Error("lowBackPainType or periodType or numberOf is undefined ");
    }

    return (  
        <div>
            { 
            resultsToDisplay.hasOwnProperty("What is the nature of pain?") && 
            <p>
                The patient has been experiencing {lowBackPainType} low back pain for the last {numberOf} {periodType}.
            </p>
            
            }
        </div>
    );
}
 
export default OutputWhatIsTheNatureOfPain;
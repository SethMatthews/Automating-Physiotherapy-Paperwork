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
    let periodType: string|undefined  = "DAYS/WEEKS/MONTHS/YEARS";
    if(lowBackPainType && resultsToDisplay.hasOwnProperty("What is the nature of pain?"+"-"+lowBackPainType)){
        periodType = resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType]?.toString();
    }
    let numberOf: string|undefined  = "NUMBEROF";
    if(periodType && resultsToDisplay.hasOwnProperty("What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType)){
        numberOf = resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType]?.toString();
    }

    


     // Was there an incident that caused the pain?
     let incidentToCausePain = undefined ;

     let incidentToCausePainReason: string|undefined = "incidentToCausePainReason";


     
     

     if ( lowBackPainType==="Acute" && periodType){
        if (lowBackPainType && periodType && numberOf && resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType+"-"+numberOf]?.toString()==="No"){
            incidentToCausePain = "The onset of pain was insidious and doesn’t recall an incident that caused the flare up in pain."
         }
         if (lowBackPainType && periodType && numberOf  && resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType+"-"+numberOf+"-Yes"]){
            incidentToCausePainReason = resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType+"-"+numberOf+"-Yes"]?.toString();
            incidentToCausePain = "The onset of pain was related to an activity the patient participated in, including: " ;
            if (incidentToCausePainReason && resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType+"-"+numberOf+"-Yes"]){
                if (resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType+"-"+numberOf+"-Yes"]?.toString()==="Other"){
                    incidentToCausePain += resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType+"-"+numberOf+"-Yes-Other"]?.toString().toLowerCase();
                }else{
                    incidentToCausePain += resultsToDisplay["What is the nature of pain?"+"-"+lowBackPainType+"-"+periodType+"-"+numberOf+"-Yes"]?.toString().toLowerCase();
                }
            } 
         }

         return(
            <>
            <ul>
                { 
                    resultsToDisplay.hasOwnProperty("What is the nature of pain?-Acute"+"-"+periodType) && 
                    lowBackPainType && numberOf && periodType && 

                    <div  className='list-disc'>
                        <li>
                            The patient has been experiencing {lowBackPainType.toLowerCase()} low back pain for the last {numberOf} {periodType.toLowerCase()}.
                        </li>
                    </div>
                }
                { 
                    resultsToDisplay.hasOwnProperty("What is the nature of pain?-Acute") && 
                    incidentToCausePain &&
                    <div  className='list-disc'>
                        <li>
                            {incidentToCausePain}
                        </li>
                    </div>
                }
                </ul>
            </>
         )
     }


     if ( lowBackPainType==="Chronic" && periodType){
        incidentToCausePain = `The patient has been experiencing chronic low back pain for the last ${periodType} years.`
     } 


    let flaredUpPeriodType: string|undefined  = "DAYS/WEEKS/MONTHS/YEARS";
    if(lowBackPainType && periodType && numberOf && resultsToDisplay.hasOwnProperty("What is the nature of pain?-Acute on chronic-"+periodType+"-"+numberOf)){
        flaredUpPeriodType = resultsToDisplay["What is the nature of pain?-Acute on chronic-"+periodType+"-"+numberOf]?.toString();
    }
    let flaredUpNumberOf: string|undefined  = "NUMBEROF";
    if(periodType && numberOf && flaredUpPeriodType &&  resultsToDisplay.hasOwnProperty("What is the nature of pain?-Acute on chronic-"+periodType+"-"+numberOf+"-"+flaredUpPeriodType)){
        flaredUpNumberOf = resultsToDisplay["What is the nature of pain?-Acute on chronic-"+periodType+"-"+numberOf+"-"+flaredUpPeriodType]?.toString();
    }
    
    if ( lowBackPainType==="Acute on chronic" && periodType && numberOf && flaredUpNumberOf && flaredUpPeriodType ){
        incidentToCausePain = `The patient has been experiencing acute on chronic low back pain, which  has been ongoing for last ${numberOf}  ${periodType}, but recently flared up  ${flaredUpNumberOf}  ${flaredUpPeriodType} ago .`
        //"What is the nature of pain?-Acute on chronic-"+periodType+"-"+numberOf
    } 



    return (  
        <div>
            <ul>
            { 
                resultsToDisplay.hasOwnProperty("What is the nature of pain?-Chronic") && 
                <div  className='list-disc'>
                     <li>
                        {incidentToCausePain}
                    </li>
                </div>
            }
            { 
                periodType && 
                resultsToDisplay.hasOwnProperty("What is the nature of pain?-Chronic"+"-"+periodType) && 
                <div  className='list-disc'>
                     <li>
                        The patient has been experiencing {lowBackPainType.toLowerCase()} low back pain for the last {numberOf} {periodType.toLowerCase()}.
                    </li>
                </div>
            }
            {
                periodType && numberOf && 
                resultsToDisplay.hasOwnProperty("What is the nature of pain?-Chronic-"+periodType+"-"+numberOf) && 
                <div  className='list-disc'>
                     <li>
                     {incidentToCausePain}
                    </li>
                </div>
            }
            {
                periodType && numberOf &&  
                resultsToDisplay.hasOwnProperty("What is the nature of pain?-Acute on chronic-"+periodType+"-"+numberOf) && 
                <div  className='list-disc'>
                     <li>
                     {incidentToCausePain}
                    </li>
                </div>
            }
            </ul>
       
        </div>
    );
}
 
export default OutputWhatIsTheNatureOfPain;
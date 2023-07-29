import RadioInputOption from "./RadioInput";


import WhatIsTheNatureOfPainOptionAcute from "./WhatIsTheNatureOfPainOptionAcute";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

const WhatIsTheNatureOfPain = ({parentQuestionPath, isOptionSelected}:{parentQuestionPath: string, isOptionSelected: isOptionSelectedType}) => {

    console.log("parentQuestionPath is     ",parentQuestionPath);

    //currentQuestionPath i.e. "RootQuestionName+OptionOneName+OptionTwoName+..."
    return (  
        <div>
            {/* <h1>{parentQuestionPath}</h1> */}
            <h3 className="mt-3 mb-3">What is the nature of pain?</h3>

                <WhatIsTheNatureOfPainOptionAcute  parentQuestionPath={parentQuestionPath} isOptionSelected={isOptionSelected} />

                {/* <RadioInputOption text="acute" value="acute" questionName="What is the nature of pain?"/>
                    {isOptionSelected("acute","What is the nature of pain?") && 
                        <div className="ml-10">
                            <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3>
                            <RadioInputOption text="Days" value="Days" questionName={"How long have been experiencing low back pain?"+"-sub-"+"acute"}/>
                                {isOptionSelected("Days","How long have been experiencing low back pain?"+"-sub-"+"acute") && 
                                <WasThereAnIncidentThatCausedThePain selectedOption="Days" isOptionSelected={isOptionSelected} />
                                }
                            <RadioInputOption text="Weeks" value="Weeks" questionName={"How long have been experiencing low back pain?"+"-sub-"+"acute"}/>
                                {isOptionSelected("Weeks","How long have been experiencing low back pain?"+"-sub-"+"acute") && 
                                <WasThereAnIncidentThatCausedThePain selectedOption="Weeks" isOptionSelected={isOptionSelected} />
                                }
                            <RadioInputOption text="Months" value="Months" questionName={"How long have been experiencing low back pain?"+"-sub-"+"acute"}/>
                                {isOptionSelected("Months","How long have been experiencing low back pain?"+"-sub-"+"acute") && 
                                <WasThereAnIncidentThatCausedThePain selectedOption="Months" isOptionSelected={isOptionSelected} />
                                }
                                
                        </div>
                    } */}
                

                <RadioInputOption text="chronic" value="chronic" questionName="What is the nature of pain?"/>
                    {isOptionSelected("chronic","What is the nature of pain?") && 
                    <div className="ml-10">
                        <h3 className="mt-3 mb-3">How long have been experiencing low back pain?</h3>
                        <RadioInputOption text="Years" value="Years" questionName={"How long have been experiencing low back pain?"+"-sub-"+"chronic"} />
                    </div>
                    }


                <RadioInputOption text="acute on chronic" value="acute on chronic" questionName="What is the nature of pain?"/>
                    {isOptionSelected("acute on chronic","What is the nature of pain?") && 
                    <div className="ml-10">
                        <h3 className="mt-3 mb-3">How long have been experiencing ongoing low back pain?</h3>
                        <RadioInputOption text="Months" value="Months" questionName={"What is the nature of pain?"+"-sub-"+"acute on chronic"}/>
                            {isOptionSelected("Months","What is the nature of pain?"+"-sub-"+"acute on chronic") && 
                            <div className="ml-10">
                                <h3 className="mt-3 mb-3">How long has it been since it has recently flared up?</h3>
                            </div>
                            }
                        <RadioInputOption text="Years" value="Years" questionName={"What is the nature of pain?"+"-sub-"+"acute on chronic"}/>
                            {/* {isOptionSelected("Years","What is the nature of pain?"+"-sub-"+"acute on chronic") && 
                            
                            } */}
                           
                    </div>
                    }
        </div>
    );
}
 
export default WhatIsTheNatureOfPain;
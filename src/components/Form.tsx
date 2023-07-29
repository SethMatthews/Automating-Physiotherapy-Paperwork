import WhatIsTheNatureOfPain from "./WhatIsTheNatureOfPain";
import WhereIsThePainLocated from "./questions/ WhereIsThePainLocated/WhereIsThePainLocated";
import AreThereAnyNeurologicalSignsAssociated from "./questions/AreThereAnyNeurologicalSignsAssociated/AreThereAnyNeurologicalSignsAssociated";

type formProps = {
    handleChange: (changeEvent: React.SyntheticEvent)=>void;
    resultsToDisplay: {[questionName: string]: string[]};

}

const Form = ({handleChange, resultsToDisplay}:formProps) => {

    const isOptionSelected = ( option: string, questionNameToCheck:string) => {
        const questionValue: string[]|undefined = resultsToDisplay[questionNameToCheck];
        if (questionValue===undefined){
            return false

        } else {
            console.log("questionValue[0] ",questionValue[0]);
            console.log("option ",option);
            return questionValue[0]===option;
        }
    }

    // const question1 = "How long have been experiencing pain?";


    return (  
        <div className=" text-gray-500 w-2/5 m-12  bg-white p-10 rounded-lg shadow-xl">
            <form onChange={(e)=> {
                // console.log(e.target.name);
                handleChange(e);
                }}>

                <WhatIsTheNatureOfPain parentQuestionPath={"What is the nature of pain?"} isOptionSelected={isOptionSelected} />
                <WhereIsThePainLocated  parentQuestionPath={"Where is the pain located?"} isOptionSelected={isOptionSelected}  />

                <AreThereAnyNeurologicalSignsAssociated  parentQuestionPath={"Are there any neurological signs associated?"} isOptionSelected={isOptionSelected}  />



                

                
                {/* <h3 className="mt-3 mb-3">{question1}</h3>
                <RadioInputOption text="No" value="No" questionName={question1}/>
                <RadioInputOption text="Yes" value="Yes" questionName={question1}/>
                    {isOptionSelected("Yes",question1) && 
                    <div className="ml-10">
                        <RadioInputOption text="days" value="Have been experiencing pain for days" questionName={question1+"-sub-"+"Yes"}/>
                        <RadioInputOption text="weeks" value="Have been experiencing pain for weeks" questionName={question1+"-sub-"+"Yes"}/>
                        <RadioInputOption text="months" value="Have been experiencing pain for months" questionName={question1+"-sub-"+"Yes"}/>
                        <RadioInputOption text="years" value="Have been experiencing pain for years" questionName={question1+"-sub-"+"Yes"}/>
                    </div>
                    }

                <h3 className="mt-3 mb-3">First episode or has this been on and off?</h3>
                <RadioInputOption text="First episode" value="This pain was the first episode" questionName="First episode or has this been on and off?"/>
                <RadioInputOption text="On and off"  value="This pain has been on and off" questionName="First episode or has this been on and off?"/>
                
                <h3 className="mt-3 mb-3">Has unilateral pain?</h3>
                <RadioInputOption text="None" value="No unilateral pain" questionName="Has unilateral pain?"/>
                <RadioInputOption text="Left side" value="Unilateral pain on the left side" questionName="Has unilateral pain?"/>
                <RadioInputOption text="Right side" value="Unilateral pain on the right side" questionName="Has unilateral pain?"/>

                <h3 className="mt-3 mb-3">Has bilateral pain?</h3>
                <RadioInputOption text="No" value="No bilateral pain" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Yes, Centrally and right across the low back" value="Bilateral pain centrally and right across the low back" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Yes, Equally both sides" value="Bilateral pain equally both sides" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Yes, More one side than the other" value="Bilateral pain more one side than the other" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Yes, Changes from side to side depending on the day" value="Bilateral pain changes from side to side depending on the day" questionName="Has bilateral pain?"/>
                
                
                <h3 className="mt-3 mb-3">Does the pain radiate into the?</h3>
                <RadioInputOption text="Glute" value="Pain radiates into the Glute" questionName="Does the pain radiate into the?"/>
                <RadioInputOption text="Lateral thigh" value="Pain radiates into the Lateral thigh" questionName="Does the pain radiate into the?"/>
                <RadioInputOption text="Down posterior leg centrally" value="Pain radiates down posterior leg centrally" questionName="Does the pain radiate into the?"/>
                <RadioInputOption text="Down the calf and into the ankle" value="Pain radiates down the calf and into the ankle" questionName="Does the pain radiate into the?"/>
                <RadioInputOption text="Into the foot" value="Pain radiates into the foot" questionName="Does the pain radiate into the?"/>

                <h3 className="mt-3 mb-3">Is the radiating pain constant or intermittent?</h3>
                <RadioInputOption text="Constant" value="Constant radiating pain" questionName="Is the radiating pain constant or intermittent?"/>
                <RadioInputOption text="Intermittent" value="Intermittent radiating pain" questionName="Is the radiating pain constant or intermittent?"/>

                <h3 className="mt-3 mb-3">Any associated pins and needles or numbness?</h3>
                <CheckboxInput text="None" value="None" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Posterior glute" value="Posterior glute" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Anterior thigh" value="Anterior thigh" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Lateral thigh" value="Lateral thigh" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Lateral calf" value="Lateral calf" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Lateral foot" value="Lateral foot" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Toes" value="Toes" questionName="Any associated pins and needles or numbness?" />

                <h3 className="mt-3 mb-3">Aggravating factors?</h3>
                <CheckboxInput text="Bending forward, extending" value="Bending forward, extending" questionName="Aggravating factors?" />
                <CheckboxInput text="Sitting and standing for long periods" value="Sitting and standing for long periods" questionName="Aggravating factors?" />
                <CheckboxInput text="Walking" value="Walking" questionName="Aggravating factors?" />
                <CheckboxInput text="Bed mobility" value="Bed mobility" questionName="Aggravating factors?" />
                <CheckboxInput text="Driving" value="Driving" questionName="Aggravating factors?" />
                <CheckboxInput text="Lifting" value="Lifting" questionName="Aggravating factors?" />
                <CheckboxInput text="House duties, vacuuming, mopping" value="House duties, vacuuming, mopping " questionName="Aggravating factors?" />
                <CheckboxInput text="Running" value="Running" questionName="Aggravating factors?" />
                <CheckboxInput text="Gym exercises" value="Gym exercises" questionName="Aggravating factors?" />
                <CheckboxInput text="" value="" questionName="Aggravating factors?" />

                <h3 className="mt-3 mb-3">Easing factors?</h3>
                <CheckboxInput text="Heat pack" value="Heat pack" questionName="Easing factors?" />
                <CheckboxInput text="Hot showers" value="Hot showers" questionName="Easing factors?" />
                <CheckboxInput text="Pain relief Medications" value="Pain relief Medications" questionName="Easing factors?" />
                <CheckboxInput text="Anti-inflammatories" value="Anti-inflammatories" questionName="Easing factors?" />
                <CheckboxInput text="Movement" value="Movement" questionName="Easing factors?" />
                <CheckboxInput text="Rest" value="Rest" questionName="Easing factors?" />
                <CheckboxInput text="Stretches" value="Stretches" questionName="Easing factors?" />

                <h3 className="mt-3 mb-3">Worse in mornings or worse throughout the day?</h3>
                <RadioInputOption text="Morning" value="Morning" questionName="Worse in mornings or worse throughout the day?"/>
                <RadioInputOption text="Night" value="Night" questionName="Worse in mornings or worse throughout the day?"/>

                <h3 className="mt-3 mb-3">Does the pain wake you up at night?</h3>
                <RadioInputOption text="Morning" value="Morning" questionName="Worse in mornings or worse throughout the day?"/>
                <RadioInputOption text="Night" value="Night" questionName="Worse in mornings or worse throughout the day?"/> */}



            </form>

        </div>
    );
}
 
export default Form;



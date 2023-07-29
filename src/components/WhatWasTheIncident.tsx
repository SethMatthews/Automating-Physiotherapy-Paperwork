import RadioInputOption from "./RadioInput";


// const questionName = "What was the incident?"

const WhatWasTheInscident = ({selectedOption}:{selectedOption:string}) => {
    return (  
        <div className="ml-10">
            <h3 className="mt-3 mb-3">What was the incident?</h3>
            <RadioInputOption text="Gardening" value="Gardening" questionName={"What was the incident?"+"-sub-"+selectedOption}/>
            <RadioInputOption text="Picking up an object" value="Picking up an object" questionName={"What was the incident?"+"-sub-"+selectedOption}/>
            <RadioInputOption text="Housework/ cleaning" value="Housework/ cleaning" questionName={"What was the incident?"+"-sub-"+selectedOption}/>
            <RadioInputOption text="Moving around in bed" value="Moving around in bed" questionName={"What was the incident?"+"-sub-"+selectedOption}/>
            <RadioInputOption text="Gym work" value="Gym work" questionName={"What was the incident?"+"-sub-"+selectedOption}/>
            <RadioInputOption text="Sport" value="Sport" questionName={"What was the incident?"+"-sub-"+selectedOption}/>
            <RadioInputOption text="Other" value="Other" questionName={"What was the incident?"+"-sub-"+selectedOption}/>
        </div>

    );
}
 
export default WhatWasTheInscident;
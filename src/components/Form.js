import CheckboxInput from "./CheckboxInput";
import RadioInputOption from "./RadioInput";


// handleChange(e.target.value);

const Form = ({handleChange}) => {
    return (  
        <div>
            <form onChange={(e)=> {
                console.log(e);
                // console.log(e.target.name);
                handleChange(e.target);
                }}>
                <p>How long have been experiencing pain?</p>
                <RadioInputOption text="days" value="days" questionName="How long have been experiencing pain?"/>
                <RadioInputOption text="weeks" value="weeks" questionName="How long have been experiencing pain?"/>
                <RadioInputOption text="months" value="months" questionName="How long have been experiencing pain?"/>
                <RadioInputOption text="years" value="years" questionName="How long have been experiencing pain?"/>
                
                <p>First episode or has this been on and off?</p>
                <RadioInputOption text="First episode" value="First episode" questionName="First episode or has this been on and off?"/>
                <RadioInputOption text="On and off"  value="On and off" questionName="First episode or has this been on and off?"/>
                
                <p>Has unilateral pain?</p>
                <RadioInputOption text="None" value="None" questionName="Has unilateral pain?"/>
                <RadioInputOption text="Left side" value="Left side" questionName="Has unilateral pain?"/>
                <RadioInputOption text="Right side" value="Right side" questionName="Has unilateral pain?"/>

                <p>Has bilateral pain?</p>
                <RadioInputOption text="None" value="None" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Centrally and right across the low back" value="Centrally and right across the low back" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Equally both sides" value="Equally both sides" questionName="Has bilateral pain?"/>
                <RadioInputOption text="More one side than the other" value="More one side than the other" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Changes from side to side depending on the day" value="Changes from side to side depending on the day" questionName="Has bilateral pain?"/>
                
                
                <p>Does the pain radiate into the?</p>
                <RadioInputOption text="Glute" value="Glute" questionName="Does the pain radiate into the?"/>
                <RadioInputOption text="Lateral thigh" value="Lateral thigh" questionName="Does the pain radiate into the?"/>
                <RadioInputOption text="Down posterior leg centrally" value="Down posterior leg centrally" questionName="Does the pain radiate into the?"/>
                <RadioInputOption text="Down the calf and into the ankle" value="Down the calf and into the ankle" questionName="Does the pain radiate into the?"/>
                <RadioInputOption text="Into the foot" value="Into the foot" questionName="Does the pain radiate into the?"/>

                <p>Is the radiating pain constant or intermittent?</p>
                <RadioInputOption text="Constant" value="Constant" questionName="Is the radiating pain constant or intermittent?"/>
                <RadioInputOption text="Intermittent" value="Intermittent" questionName="Is the radiating pain constant or intermittent?"/>

                <p>Any associated pins and needles or numbness?</p>
                <CheckboxInput text="None" value="None" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Posterior glute" value="Posterior glute" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Anterior thigh" value="Anterior thigh" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Lateral thigh" value="Lateral thigh" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Lateral calf" value="Lateral calf" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Lateral foot" value="Lateral foot" questionName="Any associated pins and needles or numbness?" />
                <CheckboxInput text="Toes" value="Toes" questionName="Any associated pins and needles or numbness?" />

            </form>

        </div>
    );
}
 
export default Form;



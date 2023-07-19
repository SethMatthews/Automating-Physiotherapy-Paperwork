import CheckboxInput from "./CheckboxInput";
import RadioInputOption from "./RadioInput";


// handleChange(e.target.value);

interface formProps {
    // handleChange: (changeEvent: React.ChangeEvent<HTMLInputElement>|React.FormEvent<HTMLFormElement>)=>void;
    handleChange: (changeEvent: React.SyntheticEvent)=>void;
}

const Form = ({handleChange}:formProps) => {
    return (  
        <div className=" text-gray-50 w-2/4 m-12  bg-indigo-800 p-10 rounded-lg">
            <form onChange={(e)=> {
                console.log(e);
                // console.log(e.target.name);
                handleChange(e);
                }}>
                <h3 className="mt-3 mb-3">How long have been experiencing pain?</h3>
                <RadioInputOption text="days" value="Have been experiencing pain for days" questionName="How long have been experiencing pain?"/>
                <RadioInputOption text="weeks" value="Have been experiencing pain for weeks" questionName="How long have been experiencing pain?"/>
                <RadioInputOption text="months" value="Have been experiencing pain for months" questionName="How long have been experiencing pain?"/>
                <RadioInputOption text="years" value="Have been experiencing pain for years" questionName="How long have been experiencing pain?"/>
                
                <h3 className="mt-3 mb-3">First episode or has this been on and off?</h3>
                <RadioInputOption text="First episode" value="This pain was the first episode" questionName="First episode or has this been on and off?"/>
                <RadioInputOption text="On and off"  value="This pain has been on and off" questionName="First episode or has this been on and off?"/>
                
                <h3 className="mt-3 mb-3">Has unilateral pain?</h3>
                <RadioInputOption text="None" value="No unilateral pain" questionName="Has unilateral pain?"/>
                <RadioInputOption text="Left side" value="Unilateral pain on the left side" questionName="Has unilateral pain?"/>
                <RadioInputOption text="Right side" value="Unilateral pain on the right side" questionName="Has unilateral pain?"/>

                <h3 className="mt-3 mb-3">Has bilateral pain?</h3>
                <RadioInputOption text="None" value="No bilateral pain" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Centrally and right across the low back" value="Bilateral pain centrally and right across the low back" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Equally both sides" value="Bilateral pain equally both sides" questionName="Has bilateral pain?"/>
                <RadioInputOption text="More one side than the other" value="Bilateral pain more one side than the other" questionName="Has bilateral pain?"/>
                <RadioInputOption text="Changes from side to side depending on the day" value="Bilateral pain changes from side to side depending on the day" questionName="Has bilateral pain?"/>
                
                
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

            </form>

        </div>
    );
}
 
export default Form;



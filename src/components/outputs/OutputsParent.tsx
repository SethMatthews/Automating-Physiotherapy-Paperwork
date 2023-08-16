import OutputWhatIsTheNatureOfPain from "./OutputWhatIsTheNatureOfPain";

type isOptionSelectedType = (option: string, questionNameToCheck: string) => boolean;

type formProps = {
    isOptionSelected : isOptionSelectedType,
    resultsToDisplay: {[questionName: string]: string[]};

}

const OutputsParent = ({isOptionSelected, resultsToDisplay}:formProps) => {
    return (  
        <div>
            <OutputWhatIsTheNatureOfPain resultsToDisplay={resultsToDisplay} isOptionSelected={isOptionSelected} />

        </div>

    );
}
 
export default OutputsParent;
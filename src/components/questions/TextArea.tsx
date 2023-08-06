// TextArea

const TextArea= ({text, value,questionName}:{text: string, value: string,questionName: string}) => {
    return (  
            <div  id="input" className="pr-4 overflow-auto m-1 border-gray-100 border-2 rounded-md py-3 px-1 hover:shadow-lg">
                <label htmlFor={value}>{text}</label>
                <textarea className="m-2 min-w-full" id={value} name={questionName} rows={4} cols={20}  />  
                
            </div>
    );
}
 
export default TextArea;

import {AiOutlineCheck } from "react-icons/ai";
interface autoInputprops{
    text:string
}
const AutoplayInput:React.FC<autoInputprops> = ({text}) => {
    return ( <div className="flex items-center text-sm mb-2">
    <div className="flex justify-center items-center transition border border-[#232323] mr-2"><AiOutlineCheck className="text-[#c0cccc]" size={35}/></div>
    <span className="text-white text-sm">{text}</span>
    </div> );
}
 
export default AutoplayInput;
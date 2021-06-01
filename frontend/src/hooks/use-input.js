import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

const useInput = (action) => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const formIsSended = useSelector(state => state.formInputValue.isSend);

    const changeValueHandler = e => {
        if(e.target.files){
            setInputValue(e.target.files);
        }else{
            setInputValue(e.target.value);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => dispatch({type: action, value: inputValue}), 500);
        
        if(formIsSended){
            setInputValue("");
        }

        return () => clearTimeout(timer);
    }, [action, dispatch, inputValue, formIsSended]);

    return {
        inputValue,
        changeValueHandler
    }
}

export default useInput;
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
         dispatch({type: action, value: inputValue});
        if(formIsSended){
            setInputValue("");
        }

    }, [action, dispatch, inputValue, formIsSended]);

    return {
        inputValue,
        changeValueHandler
    }
}

export default useInput;
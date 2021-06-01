// import { useRef} from "react";
import useInput from "../../../../hooks/use-input";

const InputFile = props => { 
    const {changeValueHandler} = useInput(props.action);

    const {
        name,
        id,
        accept
    } = props.field;

    return (
        <input
            type="file"
            name={name}
            id={id}
            accept= {accept}
            onChange={changeValueHandler}
        />
    );
}


export default InputFile;
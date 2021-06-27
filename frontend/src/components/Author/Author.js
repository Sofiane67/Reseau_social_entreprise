import classes from "./Author.module.scss";
import { dateFormat } from "../../utils/funcsHelper";

const Author = props => {

    const {
        name,
        firstName,
        createdAt,
        updatedAt
    } = props;

    return(
        <div className={classes["author"]}>
            <div className={classes["author__avatar-box"]}>
                <p className={classes["author__avatar--initial"]}>{`${firstName[0]}${name[0]}`}</p>
            </div>
            <div className={classes["author__info"]}>
                <p className={classes["author__author"]}>{`${firstName} ${name}`}</p>
                <p className={classes["author__date"]}>
                    <span>Créé le {dateFormat(createdAt)}</span>
                    {updatedAt !== createdAt && `Modifié le ${dateFormat(updatedAt)}`}
                </p>
            </div>
        </div>
    )
}   

export default Author;
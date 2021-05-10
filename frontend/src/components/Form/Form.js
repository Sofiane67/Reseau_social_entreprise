import {Fragment} from "react";
import Button from "../UI/Button/Button";
import classes from "./Form.module.scss";

const Form = props => {

        const signUpFields = (
            <Fragment>
                <div className={classes["form__group"]}>
                    <label htmlFor="name" className={classes["form__lable"]}>Nom</label>
                    <input type="text" name="name" id="name" className={classes["form__input"]} />
                </div>
                <div className={classes["form__group"]}>
                    <label htmlFor="firstName" className={classes["form__lable"]}>Prénom</label>
                    <input type="text" name="firstName" id="firstName" className={classes["form__input"]} />
                </div>
            </Fragment>
        );
        
    return (
        <form onSubmit={props.onSubmit} className={classes.form}>

            {props.page === "signup" && signUpFields}

            <div className={classes["form__group"]}>
                <label htmlFor="email" className={classes["form__lable"]}>Email</label>
                <input type="text" name="email" id="email" className={classes["form__input"]} />
            </div>
            <div className={classes["form__group"]}>
                <label htmlFor="password" className={classes["form__lable"]}>Mot de passe</label>
                <input type="text" name="password" id="password"  className={classes["form__input"]} />
            </div>
            <Button type="submit">S'inscrire</Button>
        </form>
    )
    
}

export default Form;


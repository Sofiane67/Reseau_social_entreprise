import Form from "../Form/Form";

import classes from "./SignUpForm.module.scss";

const SignUpForm = () => {

    return(
        <section className={classes["signUp-section"]}>
            <h1 className={classes["signUp-section__h1"]} >
                <span className={classes["signUp-section__h1--main"]} >Inscription</span>
                <span className={classes["signUp-section__h1--sub"]} >Rejoignez vos collègues sur le reseau social Groupomania</span>
            </h1>
            <Form page="signup"/>
        </section>
    );
};

export default SignUpForm;
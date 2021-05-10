import Form from "../Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./SignUpForm.module.scss";

const SignUpForm = () => {
    return(
        <section className={classes["signUp-section"]}>
                <h1 className = { classes["signUp-section__h1"]} >Rejoignez vos collègues sur le reseau social Groupomania</h1>
            <Form>
                <Input
                    htmlFor="name"
                    label="Nom"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Entrez votre nom"
                />
                <Input
                    htmlFor="firstName"
                    label="Prènom"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Entrez votre prènom"
                />
                <Input
                    htmlFor="email"
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Entrez votre Email"
                />
                <Input
                    htmlFor="password"
                    label="Mot de passe"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Créez votre mot de passe"
                />
                <Button type="submit">S'inscrire</Button>
            </Form>
        </section>
    );
};

export default SignUpForm;
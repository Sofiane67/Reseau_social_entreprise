import Aside from "../UI/Aside/Aside"
import Navigation from "../layout/Navigation/Navigation";
import LinkItem from "../UI/Link/LinkItem";
import Card from "../UI/Card/Card";
import { asideForumNav} from "../../utils/navigation";
import classes from "./AsideMenu.module.scss";

const AsideMenu = props => {
    return(
        <Card className={props.className}>
            <Aside>
                    <Navigation columnList="nav__list--column">
                        {
                            asideForumNav.map(link => <li className={classes.asideMenu__item} key={link.name}><LinkItem  path={link.path}>{link.name}</LinkItem></li>)
                        }
                    </Navigation>
            </Aside>
        </Card>
    )
}

export default AsideMenu;
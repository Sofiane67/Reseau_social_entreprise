import {Link} from "react-router-dom";
import Aside from "../UI/Aside/Aside"
import Navigation from "../layout/Navigation/Navigation";
import Card from "../UI/Card/Card";
import { asideForumNav} from "../../utils/navigation";

const AsideMenu = props => {
    return(
        <Card className={props.className}>
            <Aside>
                    <Navigation columnList="nav__list--column">
                        {
                            asideForumNav.map(link => <li key={link.name}><Link to={link.path}>{link.name}</Link> </li>)
                        }
                    </Navigation>
            </Aside>
        </Card>
    )
}

export default AsideMenu;
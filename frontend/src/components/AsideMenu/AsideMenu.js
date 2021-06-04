import { Fragment } from "react";
import {Link} from "react-router-dom";
import Aside from "../UI/Aside/Aside"
import Navigation from "../layout/Navigation/Navigation";
import { asideForumNav} from "../../utils/navigation";

const AsideMenu = props => {
    return(
        <Aside>
            <Navigation>
                {
                    asideForumNav.map(link => <li key={link.name}><Link to={link.path}>{link.name}</Link> </li>)
                }
            </Navigation>
        </Aside>
    )
}

export default AsideMenu;
import { Link } from "react-router-dom";
import './NavBar.css'
import { INavItem } from "./NavItemsData";

export default function NavBar(props: { items: INavItem[] }) {
    return (
        <div className="NavBar">
            <div className="navBtns">
            <Link to={'/donuts'}><img src='/donut.png' className='logo' /></Link>
                {props.items.map((curr) => { return <div className="navItem"> <Link to={curr.urlStr}> {curr.displayStr} </Link></div> })}
                <Link to={'/signup'}><img src='/signup.png' className='logo' /></Link>
            </div>
        </div>
    )
}

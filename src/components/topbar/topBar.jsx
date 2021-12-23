import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person'
import TwitterIcon from '@mui/icons-material/Twitter';

export default function topBar() {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left" >
                    <a href="#intro" className="logo">Hello</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>(111) 222-3333</span>
                    </div>

                    <div className="itemContainer">
                        <TwitterIcon className="icon"/>
                        <span> <a href=""></a>@sammiedaprogrammer</span>
                    </div>
                </div>

                <div className="right">
                    this is the right side
                </div>
            </div>
        </div>
    )
}

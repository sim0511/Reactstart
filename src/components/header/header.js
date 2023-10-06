import Logo from '../logo/logo';
import Nav from '../nav';
import './header.css';
function Header(props){
    // console.log(props);
    return (
        <div className="header">
            {/* <h1>Hiii {props.name}</h1> */}
            <div className='headerlogo'>
                <Logo/>
            </div>
            <div className='headernav'>
                <Nav/>
            </div>
        </div>
    )
}

// export function Hello(){
//     console.log("hello");
// }

export default Header;
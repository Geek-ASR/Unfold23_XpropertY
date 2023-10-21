import { ethers } from 'ethers';
import xyz from '../assets/xyz.png';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

//     return (
//         <nav>
            

//             <div className='nav__brand'>
//                 <img class="large-image" src= {xyz} alt="Logo" />
//                 <h1>Xproperties</h1>
//             </div>

//             <ul className='nav__links'>
//                 <li><a href="#">Buy</a></li>
//                 <li><a href="#">Rent</a></li>
//                 <li><a href="#">Sell</a></li>
//             </ul>

//             {account ? (
//                 <button
//                     type="button"
//                     className='nav__connect'
//                 >
//                     {account.slice(0, 6) + '...' + account.slice(38, 42)}
//                 </button>
//             ) : (
//                 <button
//                     type="button"
//                     className='nav__connect'
//                     onClick={connectHandler}
//                 >
//                     Connect
//                 </button>
//             )}
//         </nav>
//     );
// }

// export default Navigation;

return (
    <nav style={navStyle}>
        <div className='nav__brand' style={brandStyle}>
            <img className="large-image" src={xyz} alt="Logo" style={logoStyle} />
            <h1 style={titleStyle}>Xproperties</h1>
        </div>
        <ul className='nav__links' style={listStyle}>
            {/* <li style={listItemStyle}><a href="#" style={linkStyle}>Buy</a></li>
            <li style={listItemStyle}><a href="#" style={linkStyle}>Rent</a></li>
            <li style={listItemStyle}><a href="#" style={linkStyle}>Sell</a></li> */}
            <li><button style={btn}>Deploy Contracts</button></li>
            <li><button style={btn}>Mint Properties</button></li>
            <li><button style={btn}>List Properties</button></li>
        </ul>
        {account ? (
            <button type="button" className='nav__connect' style={buttonStyle}>
                {account.slice(0, 6) + '...' + account.slice(38, 42)}
            </button>
        ) : (
            <button type="button" className='nav__connect' style={buttonStyle} onClick={connectHandler}>
                Connect
            </button>
        )}
    </nav>
);
}

const navStyle = {
display: 'flex',
justifyContent : 'center',
// justifyContent: 'space-between',
alignItems: 'center',
padding: '10px',
backgroundColor: '#558381',
color: '#e4ba00',
boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
}

const brandStyle = {
display: 'flex',
alignItems: 'center',
}

const logoStyle = {
width: '50px',
height: '50px',
marginRight: '10px',
}
const btn = {
    display: "inline-block",
  padding: '10px 20px',
  backgroundcolor: '#0000', /* Background color */
  color: '#0000', /* Text color */
  border: 'none',
  borderradius: '5px', /* Rounded corners */
  textalign: 'center',
  textdecoration:' none',
  fontsize: '16px',
  cursor: 'pointer',
}
const titleStyle = {
fontSize: '24px',
fontWeight: 'bold',
}

const listStyle = {
listStyle: 'none',
display: 'flex',
gap: '20px',
margin : '0 auto',

}

const listItemStyle = {
padding: '10px',
borderRadius: '5px',
backgroundColor: '#214947',
color:'white'
}

const linkStyle = {
textDecoration: 'none',
color: '#fff',
padding: '10px',

}

const buttonStyle = {
// padding: '10px 20px',
marginRight : '20px',
backgroundColor: '#',
color: '#fff',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
}

const nav__links = {
    alignItems : 'center',
    justifyContent : 'center',
    marginRight : '0 auto'
}

export default Navigation;

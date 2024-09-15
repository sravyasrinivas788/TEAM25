// import React from "react";
// import './../resources/default.css'
// import { Button, Dropdown, Menu } from 'antd'
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// // import logo from '../Pages/logo.png';

// function Default(props) {
//   const user = JSON.parse(localStorage.getItem("Student"))
//   const navigate = useNavigate()
//   const menu = (
//       <Menu>
//         <Menu.Item>
//           <Link  to="/home">HOME</Link>
//         </Menu.Item>
//         <Menu.Item>
//           <Link  to="/noti">NOTIFICATIONS</Link>
//         </Menu.Item>
//         <Menu.Item>
//           <Link  to="/profile">PROFILE</Link>
//         </Menu.Item>
//         <Menu.Item onClick={()=>{localStorage.removeItem('Student')
//         navigate('/login')


//       }}>



//          <span>LOG OUT</span>
//         </Menu.Item>
//       </Menu>
//     );
  
//   return (
//     <div className="layout">
//       <div className="header">
//       <img src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png" className="logo"></img>
     
//         <h1>MY RESUME</h1>
        
//         <Dropdown overlay={menu} placement="bottomLeft">
//                     <Button>{user.name}</Button>
//                 </Dropdown>
        



//       </div>
//       <div className="content">
//         {props.children}

//       </div>

//     </div>
//   )
// }
// export default Default;

import React from "react";
import { Button, Dropdown, Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import logo from '../resources/1.jpg';

function Default(props) {
  const user = JSON.parse(localStorage.getItem("Student"));
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home">HOME</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/noti">NOTIFICATIONS</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">PROFILE</Link>
      </Menu.Item>
      <Menu.Item onClick={() => {
        localStorage.removeItem('Student');
        navigate('/login');
      }}>
        <span>LOG OUT</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="layout">
      <div className="header">
      <img src="http://pngimg.com/uploads/cv/cv_PNG25.png" alt="Logo" className="logo" />
      <h1>TEMPLATES</h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>{user.name}</Button>
        </Dropdown>
      </div>
      <div className="content">
        {props.children}
      </div>

      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: white; /* Changed background to white */
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: adds a slight shadow */
        }

        .header .logo {
          width: 100px; /* Adjust the size as needed */
          height: auto; /* Maintain aspect ratio */
        }

        .header h1 {
          margin: 0;
          font-size: 24px; /* Adjust the font size as needed */
          color: #333; /* Optional: change text color */
        }

        .content {
          flex: 1;
          padding: 20px;
          background-color: #f9f9f9; /* Optional: background color for content area */
        }

        .ant-dropdown-menu-item {
          color: #000; /* Optional: change text color for menu items */
        }

        .ant-btn {
          color: #000; /* Optional: change text color for the button */
        }
      `}</style>
    </div>
  );
}

export default Default;
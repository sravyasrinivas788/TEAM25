import React, { useState, useEffect } from 'react';
// import '../resources/default.css';
// import '../resources/auth.css';
import axios from 'axios';
import { Button, Form, message, Input, Spin } from 'antd';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onfinish = async (values) => {
    setloading(true);
    try {
      const user = await axios.post('/api/user/login', values);
      message.success('Login Success');
      localStorage.setItem('Student', JSON.stringify(user.data));

      setloading(false);
      navigate('/profile');
    } catch (error) {
      setloading(false);
      message.error('Login Failed');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('Student')) {
      navigate('/home');
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="auth-parent" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '300px', textAlign: 'center', marginRight: '20px', height: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {loading && <Spin />}
          <Form layout="vertical" onFinish={onfinish} style={{ height: '100%' }}>
            <img src="http://pngimg.com/uploads/cv/cv_PNG25.png" alt="cv" style={{ width: '100px', margin: '0 auto' }} />
            <h4 style={{ color: '#003777' }}>Login</h4>
            <hr />
            <Form.Item name="name" label="Enter Name" style={{ fontSize: 'large' }}>
              <Input value={formData.name} onChange={handleChange} />
            </Form.Item>
            <Form.Item name="roll" label="Enter Unique ID">
              <Input value={formData.roll} onChange={handleChange} />
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#003777', width: '100%' }}>
              LOGIN
            </Button>
            

          </Form>
        </div>
        <div style={{ width: '300px', height: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h4 style={{ color: '#003777' }}>Steps to Build Your Resume</h4>
          <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
            <li>Login</li>
            <li>↓</li>
            <li>Fill in your details</li>
            <li>↓</li>
            <li>Choose a template</li>
            <li>↓</li>
            <li>Generate your resume</li>
            <li>↓</li>
            <li>Print and download the PDF</li>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', textAlign: 'center' }}>
  <Link to="/register" style={{ color: '#003777', fontWeight: 'bold' }}>REGISTER HERE!</Link>
</div>
          </ul>
          

        </div>
        
      </div>
      
    </div>
  );
}

export default Login;


// import React, { useState, useEffect } from 'react';
// // import '../resources/default.css';
// // import '../resources/auth.css';
// import axios from 'axios';
// import { Button, Form, message, Input, Spin } from 'antd';
// import { useNavigate, Link } from 'react-router-dom';

// function Login() {
//   const navigate = useNavigate();
//   const [loading, setloading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     roll: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onfinish = async (values) => {
//     setloading(true);
//     try {
//       const user = await axios.post('/api/user/login', values);
//       message.success('Login Success');
//       localStorage.setItem('Student', JSON.stringify(user.data));

//       setloading(false);
//       navigate('/profile');
//     } catch (error) {
//       setloading(false);
//       message.error('Login Failed');
//     }
//   };

//   useEffect(() => {
//     if (localStorage.getItem('Student')) {
//       navigate('/home');
//     }
//   }, []);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
//       <div className="auth-parent" style={{ width: '300px', textAlign: 'center' }}>
//         {loading && <Spin />}
//         <Form layout="vertical" onFinish={onfinish}>
//           <img src="http://pngimg.com/uploads/cv/cv_PNG25.png" alt="cv" style={{ width: '100px', margin: '0 auto' }} />
//           <h4 style={{ color: '#003777' }}>Login</h4>
//           <hr />
//           <Form.Item name="name" label="Enter Name" style={{ fontSize: 'large' }}>
//             <Input value={formData.name} onChange={handleChange} />
//           </Form.Item>
//           <Form.Item name="roll" label="Enter Unique ID">
//             <Input value={formData.roll} onChange={handleChange} />
//           </Form.Item>
//           <Button type="primary" htmlType="submit" style={{ backgroundColor: '#003777', width: '100%' }}>
//             LOGIN
//           </Button>
//           <br />
//           <br />
//           <Link to="/">Go to Home</Link>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;

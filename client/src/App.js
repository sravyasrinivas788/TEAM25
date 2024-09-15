import logo from './logo.svg';
import { Button, ButtonGroup } from '@chakra-ui/react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'
import './styles.css'
import Login from './Pages/Login'
import { Navigate } from 'react-router-dom';
import Profiles from './Pages/Profiles';
import Headp from './Pages/Headp'
import Reg from './Pages/Reg'
import Templates from './Pages/Templates/Index';


import Resume from './Pages/Resume';
import Resumeup from './Pages/Resumeup';

import Notificatios from'./Pages/Notifications';




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes> 
      <Route path='/' element={<Login/>}/>
       <Route path='/home' element={<ProtectedRoute><Headp/></ProtectedRoute>}/>
       <Route path='/templates/:id'element={<ProtectedRoute><Templates/></ProtectedRoute>}/>
       <Route path='/profile' element={<ProtectedRoute><Profiles/></ProtectedRoute>}/>  
       

       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Reg/>}/>
      
       <Route path='/resume' element={<Resume/>}/>
       <Route path='/resupload' element={<Resumeup/>}/>
       
       <Route path='/noti'element={<Notificatios/>}/>
       
      
      </Routes>


      </BrowserRouter>


    </div>
  )
}

export default App;
export function ProtectedRoute(props){
  if(localStorage.getItem("Student")){
    return props.children;
  }
  else{
    return <Navigate to="/login"/>
    
  }
}

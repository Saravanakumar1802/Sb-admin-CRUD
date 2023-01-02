import './App.css';
import React,{useState} from 'react';
import Slidbar from './component/Slidbar';
import Dashboard from './component/Dashboard';
import AddUser from './component/AddUser';
import { EditUser } from './component/EditUser';
import NestedExample from './component/NestedExample';
import Account from './component/nestedComponents/Account';
import Profile from './component/nestedComponents/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserContextComponent from './component/contextComponent/UserContextComponent ';
import DashboardContextComponent from './component/contextComponent/DashboardContextComponent';


function App() {
  let [users, setUsers] = useState([
    {
      name: "yyy",
      email: 'yyy@gmail.com',
      mobile: "12345678",
      batch: "B38WE",
      timings: '11amto1pm'
    },
    {
      name: "zzz",
      email: 'zzzgmail.com',
      mobile: "12345678",
      batch: "B38WE",
      timings: '11amto1pm'
    },
    {
      name: "sk",
      email: 'sklogan@gmail.com',
      mobile: "12345678",
      batch: "B38WE",
      timings: '11amto1pm'
    }])
  return (
    <div id='wrapper'>
      <BrowserRouter>
        <Slidbar />
        <Routes>
          <Route path='/dashboard' element={
            <DashboardContextComponent>
              <UserContextComponent users={users} setUsers={setUsers}>
                <Dashboard />
              </UserContextComponent>
            </DashboardContextComponent>} />

          <Route path='/add-user' element={
            <UserContextComponent users={users} setUsers={setUsers}>
              <AddUser />
            </UserContextComponent>} />


          <Route path='/edit-user/:id' element={
            <UserContextComponent users={users} setUsers={setUsers}>
              <EditUser />
            </UserContextComponent>} />

          <Route path='nested-example' element={<NestedExample />} >
            <Route path='account' element={<Account />} />
            <Route path='profile' element={< Profile />} />
          </Route>

          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Routes>

      </BrowserRouter>





    </div >
  );
}

export default App;

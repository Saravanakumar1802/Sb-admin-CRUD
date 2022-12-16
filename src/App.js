import './App.css';
import React,{ useState } from 'react';
import Slidbar from './component/Slidbar';
import Dashboard from './component/Dashboard';
import AddUser from './component/AddUser';
import { EditUser } from './component/EditUser';
import NestedExample from './component/NestedExample';
import Account from './component/nestedComponents/Account';
import Profile from './component/nestedComponents/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


export const userContext = React.createContext();

function App() {
  let data = {
    earningsMonthly: "40,000",
    earningsYearly: "215,000",
    task: "50",
    pendingRequest: "18"
  }

  let [users, setUsers] = useState([{
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
        <userContext.Provider value={{ data, users, setUsers }}>
          <Routes>

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers} />} />
            <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path='nested-example' element={<NestedExample />} >
              <Route path='account' element={<Account />} />
              <Route path='profile' element={< Profile />} />
            </Route>

            <Route path='*' element={<Navigate to={'/dashboard'} />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>





    </div>
  );
}

export default App;

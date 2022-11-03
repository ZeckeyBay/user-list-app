import React, {useState} from "react";
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';
import './App.css';

function App() {
  const [activeUserId,setActiveUserId] = useState(null);
  return (
    <div className="App">
      Active User Id : {activeUserId}
      <UserList setActiveUserId={setActiveUserId} />
      {activeUserId&&<UserDetail activeUserId={activeUserId}/>}
    </div>
  );
}

export default App;

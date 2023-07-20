import { Fragment } from 'react';
import Auth from './components/Auth'
import Header from './components/Header'
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
function App() {
  const isAuthticated=useSelector((state)=>state.authReducer.isAuthticated);
  return (<Fragment>
    <Header></Header>
    {!isAuthticated&&<Auth></Auth>}
    {isAuthticated&&<UserProfile></UserProfile>}
<Counter />
  </Fragment>
    
  );
}

export default App;

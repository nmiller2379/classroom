import user from './data/user';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';


function App() {
  return <UserProfileCard user={user} />
}

export default App;

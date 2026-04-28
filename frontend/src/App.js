import './App.css';

//import BackendCheck from './api/CheckBackend';
import ProfileCard from './components/composites/ProfileCard';

function App() 
{
  return (
    <div className='App'>
      <header className='App-header'>
        
        <ProfileCard/>
      </header>
    </div>
  );
}

export default App;
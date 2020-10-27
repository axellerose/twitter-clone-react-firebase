import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // BEM
    <div className="App">
      <Sidebar />
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;

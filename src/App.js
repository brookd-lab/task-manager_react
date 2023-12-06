import './App.css';
import Counter from './Components/Counter';
import Tasks from './Components/Tasks';

function App() {
  return (
    <div className="container">
      {/* <Counter initialCount={100}/> */}
      <Tasks />
    </div>
  );
}

export default App;

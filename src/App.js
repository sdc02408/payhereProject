import './App.css';
import ListComponent from './components/ListPage/ListComponent';
import SavedComponent from './components/SavedPage/SavedComponent';
import SearchComponent from './components/SearchPage/SearchComponent'

function App() {
  return (
      <div className="App">

        <SearchComponent/>
        <div className='divideLine'></div>
        <ListComponent />
        <div className='divideLine'></div>

        <SavedComponent />

      </div>

  );
}

export default App;

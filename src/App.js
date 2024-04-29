import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="row header">
          <div className="col">
            <h1 className="text-start">Keeper</h1>
          </div>
        </header>
        <div className="row content">
          <div className="col-md-3 col-sm-12 mb-3 mt-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">This is the note title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;

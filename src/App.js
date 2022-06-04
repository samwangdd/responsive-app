import logo from './logo.svg';
import './app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='container'>
        <div className='card cardLG flex-row flex-jc-sb'>
         <div className='avatarLG'></div>
          <div className='info'>
              <p className='name'>Sam</p>
              <p className='description'>Developer of FullStack</p>
            </div>
        </div>
        <div className='cardList'>
          <div className='card cardSM'>
            <div className='avatarSM'></div>
            <div className='info'>
              <p className='name'>Sam</p>
              <p className='description'>Developer of FullStack</p>
            </div>
          </div>
          <div className='card cardSM'>
            <div className='avatarSM'></div>
            <div className='info'>
              <p className='name'>Sam</p>
              <p className='description'>Developer of FullStack</p>
            </div>
          </div>
          <div className='card cardSM'>
            <div className='avatarSM'></div>
            <div className='info'>
              <p className='name'>Sam</p>
              <p className='description'>Developer of FullStack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

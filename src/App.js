import './App.css';
import FirstDice from './Components/FirstDice';
import SecondDice from './Components/SecondDice';
function App() {
  return (
    <div className='main'>
      <section className='zer1'>
        <FirstDice/>
      </section>
      <section className='zer2'>
        <SecondDice/>
      </section>
        </div>
  );
}

export default App;


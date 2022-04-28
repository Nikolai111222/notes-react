import './App.sass';
import Header from 'components/Header';
import NotesList from 'components/notes/NotesList';

function App() {
  return (
    <div className='App'>
      <Header />
      <NotesList />
    </div>
  );
}

export default App;

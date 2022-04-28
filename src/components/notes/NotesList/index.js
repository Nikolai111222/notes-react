import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';
import './index.sass'

function NotesList () {
  return (
    <div>
      <AddNote />
      {
        [1, 2, 3, 4, 5].map(el => {
          return <Note key={el} />
        })
      }
    </div>
  )
}

export default NotesList;

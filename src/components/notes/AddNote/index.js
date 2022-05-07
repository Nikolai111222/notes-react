import '../../notes/common/sass/common.sass'
import './index.sass'

function AddNote () {
  return (
    <div className='common_note_block editing_mode'>
      <div className='note_actions'>
        <div />
        <div className='icons_group'>
          <span className='icon' id='confirm_icon' />
          <span className='icon' id='delete_icon' />
        </div>
      </div>
      <input type='text' placeholder='Type heading' />
      <textarea placeholder='Type content of note' />
    </div>
  )
}

export default AddNote;

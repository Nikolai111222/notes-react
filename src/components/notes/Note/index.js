import '../../notes/common/sass/common.sass'
import './index.sass'
import { useState } from 'react'

function Note () {
  const [isEditing, setIsEditing] = useState(false)

  const handleClick = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className={`common_note_block note_block ${isEditing ? 'editing_mode' : ''}`}>
      <div className='note_actions'>
        <span className='icon' id='select_icon' />
        <div className='icons_group'>
          {
            isEditing
              ? <span onClick={handleClick} className='icon' id='confirm_icon' />
              : <span onClick={handleClick} className='icon' id='edit_icon' />
          }
          <span className='icon' id='delete_icon' />
        </div>
      </div>
      <strong>Heading of note</strong>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
    </div>
  )
}

export default Note;

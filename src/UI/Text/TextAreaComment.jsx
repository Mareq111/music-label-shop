
import BtnSubmitComment from '../Buttons/BtnSubmitComment'
import './TextAreaComment.scss'
import BtnReset from '../Buttons/BtnReset'
export default function TextAreaComment() {
  return (
    <div className="text-comment-div">
    <div className="text-only-comment-div">
    <textarea 
        className="text-only-comment"
        id="commentInput"
        placeholder="Add a comment... (max 800 characters)"
        maxLength={800}
      />
    </div>
    <div className="btns-comment">
    <BtnReset/>
    <BtnSubmitComment/>
    </div>
  </div>
  
  )
}

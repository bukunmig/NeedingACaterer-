import React from 'react'
import RatingSelect from './RatingSelect'
import {useState} from 'react'
import Card from './shared/Card'

function Feedbackform(handleAdd) {
  let [text, setText] = useState('')
  let [rating, setRating] = useState(10)
  let handleTextChange = (e) => {
    setText(e.target.value)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
        const newFeedback = {
            text,
            rating
        }
    handleAdd(newFeedback)

    setText('')

    }
  }



    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2> How was your order?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
                <input onChange={handleTextChange} 
                type='text'
                 placeholder='Please write a review'
                 value={text} />
                <button type='submit'>Send</button>
            </div>
        </form>

    </Card>
  )
}

export default Feedbackform

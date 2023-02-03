import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import Feedbackform from './components/Feedbackform'

function App(){

  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback,...feedback])
  }

  return (
  <>
  <Header />
  <div className='container'>
    <Feedbackform handleAdd={addFeedback} />
    <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} />
  </div>
  </>
  )
}

export default App
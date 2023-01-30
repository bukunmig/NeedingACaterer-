import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import Feedbackform from './components/Feedbackform'

function App(){

  const [feedback, setFeedback] = useState(FeedbackData)


  return (
  <>
  <Header />
  <div className='container'>
    <Feedbackform />
    <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} />
  </div>
  </>
  )
}

export default App
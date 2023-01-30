import React from 'react'

function FeedbackStats({feedback}) {

//chef average ratings calculator
let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
}, 0)/ feedback.length

//one decimal place rating for chef
average = average.toFixed(1).replace(/[.,]0$/, '')

//use ternary operator if chef has no reviews yet
 return <div className='feedback-stats'>
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
 </div>

}
export default FeedbackStats
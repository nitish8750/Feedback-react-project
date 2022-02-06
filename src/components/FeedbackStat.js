import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStat() {
    const { feedback } = useContext(FeedbackContext);
    
    let average = feedback.reduce((acc, curr) => {
        return parseInt(acc) + parseInt(curr.rating)
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/\.0+$/,'')

    return <div className="feedback-stats">
        <h2>Average Rating: {isNaN(average) ? 0 : average}</h2>
        <h2>{feedback.length} reviews</h2>
    </div>;
}

FeedbackStat.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStat

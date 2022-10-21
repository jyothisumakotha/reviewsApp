import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {
    userReviewList: reviewsList[0],
    count: 0,
  }

  onLeft = () => {
    const {userReviewList} = this.state
    const res = reviewsList.index(userReviewList)
    if (res > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onRight = () => {
    const {userReviewList} = this.state
    const res = reviewsList.index(userReviewList)
    if (res > 0 && res !== reviewsList.length) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {userReviewList} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <div className="review-container">
          <button className="button" type="button" onClick={this.onLeft}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt=" left arrow"
            />
          </button>

          {userReviewList.map(eachReview => (
            <div className="details-container">
              <img src={eachReview.imgUrl} alt={eachReview.username} />
              <h1 className="name">{eachReview.username}</h1>
              <p className="company-name">{eachReview.companyName}</p>
              <p className="description">{eachReview.description}</p>
            </div>
          ))}
          <button className="button" type="button" onClick={this.onRight}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel

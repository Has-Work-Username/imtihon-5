import "./post.scss"
import clock from "../../assets/images/bytesize_clock.png"

const Post = () => {
    return(
        <div className="post-card">
           <div className="card-top">
                <span className="card__date-wrapper">September 24.2020</span>
                <span className="card__type-wrapper">Design theory</span>
           </div>
           <p>
                Bad Design vs. Good Design: 5 Examples We can Learn From
           </p>
           <span className="card__read-time-wrapper">
                <img src={clock} />
                3 minutes read
           </span>
        </div>
    )
}

export default Post
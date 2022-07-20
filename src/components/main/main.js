import Post from "../post/post"
import "./main.scss"
import arrowRight from "../../assets/images/main__arrow.png"
import arrowLeft from "../../assets/images/main__arrow-2.png"


const Main = () => {
    return(           
        <main className="home__main">
            <h2>Recent Posts</h2>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <div className="main__pagination-wrapper">
                <div className="pagination__arrow-wrapper">
                    <img  src={arrowLeft}/>
                </div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <div className="pagination__arrow-wrapper">
                    <img  src={arrowRight}/>
                </div>
            </div>
        </main>
    )
}

export default Main
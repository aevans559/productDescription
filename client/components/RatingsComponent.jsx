import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const RatingsComponent = (props) => {
    return (
        <div className="RatingsComponent">
            <div className="ratings-headline">
                <div className="stars">
                <StarRatingComponent 
                    name="productRating"
                    starCount={5}
                    starColor={"#fcba03"}
                /> <a className="ratings-count" href="#">7,188 ratings</a> <span className="ratingsPipe">|</span> <a className="q-count" href="#">50 answered questions</a>
                </div>
            </div>
            <br/>
            <div className="badgeLine">
                <div className="badgeImage"></div> <a className="badgeCat" href="#">in Sports products</a>
            </div>
        </div>
    )
}

export default RatingsComponent;

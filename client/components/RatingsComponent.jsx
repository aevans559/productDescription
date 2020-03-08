import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const RatingsComponent = (props) => {
    return (
        <div className="ae-RatingsComponent">
            <div className="ae-ratings-headline">
                <div className="ae-stars">
                <StarRatingComponent 
                    name="productRating"
                    starCount={5}
                    starColor={"#fcba03"}
                /> <a className="ae-ratings-count" href="#">7,188 ratings</a> <span className="ae-ratingsPipe">|</span> <a className="ae-q-count" href="#">50 answered questions</a>
                </div>
            </div>
            <br/>
            <div className="ae-badgeLine">
                <div className="ae-badgeImage"></div> <a className="ae-badgeCat" href="#">in {props.category} products</a>
            </div>
        </div>
    )
}

export default RatingsComponent;

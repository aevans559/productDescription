import React from 'react'

const NewerModel = () => {
    return (
        <div className="NewerModelComponent">
            <div className="newer-model-title">
                <h4><b>There is a newer model of this item: </b></h4>
            </div>
            <div className="newer-model-info">
                <div className="newer-model-image"></div>
                <div className="newer-model-description">
                    <a className="newer-model-link" href="#">BlenderBottle C03595 Classic V2 Shaker Bottle, 20-Ounce, Clear/Black</a>
                    <div className="newer-model-price">$8.99</div>
                    <div className="stock-status">In Stock.</div>
                </div>
            </div>
        </div>
    )
}


export default NewerModel;
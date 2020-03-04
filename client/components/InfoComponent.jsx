import React from 'react'

const InfoComponent = () => {
    return (
        <div className="InfoComponent">
            <div className="list-price">List Price:<div className="list-price-price">$9.49</div></div>
            <div className="real-price">Price:<div className="real-price-price">$7.80</div>
                <div className="ship-deal">
                    & 
                    <b className="free-ship">FREE Shipping</b>
                    on orders over $25.00 shipped by Nozama.
                </div>
                <div className="details-returns"><a className="details" href="#">Details</a> & <a className="returns" href="#">FREE Returns</a></div>
            </div>
            <div className="you-save">You Save:<div className="savings-amount">$1.69 (18%)</div></div>
            <a className="discount" href="#">Get $10 off instantly: Pay $0.00 upon approval for the Nozama Emirp shipping.</a>
            <div className="note"><b>Note: </b><div className="note-message">Available at a lower price from <a className="other-sellers">other sellers</a> that may not offer free Emirp shipping.</div></div>
            <div className="dropdown">
                <button className="dropbtn">This item is returnable</button>
                <div className="dropdown-content">
                    <div className="dropdown-msg">This item can be returned in 30 days in most cases.</div>
                    <a className="dropdown-msg" href="#">Read full return policy</a>
                </div>
            </div>
            <div className="color-row"><label className="color-option">Color: </label><span className="color-name"><b>Clear/Black/Black</b></span></div>
            <ul className="img-list">
                <li className="img-item" data-hover="Clear/Black/Black"><img src="https://images-na.ssl-images-amazon.com/images/I/41u03XfmP3L._SS36_.jpg"></img></li>
                <li className="img-item" data-hover="Pink"><img src="https://images-na.ssl-images-amazon.com/images/I/414mUMx5biL._SS36_.jpg"></img></li>
                <li className="img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/31pUTGgAn0L._SS36_.jpg"></img></li>
                <li className="img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/31pijP2EoJL._SS36_.jpg"></img></li>
                <li className="img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/41sFd2nlqPL._SS36_.jpg"></img></li>
                <li className="img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/31YyoB4V8ML._SS36_.jpg"></img></li>
            </ul>
            <ul className="desc-bullets">
                <li className="bullet">20-ounce capacity (note: measurements only go to 12 ounces) shaker cup for mixing protein shakes, smoothies, and supplements</li>
                <li className="bullet">Patented mixing system uses 316 surgical-grade stainless steel BlenderBall wire whisk found only in BlenderBottle brand shaker bottles</li>
                <li className="bullet">Screw-on lid creates leak-proof seal, and flip cap snaps securely shut to keep contents contained; loop top for easy carrying or attaching keys</li>
                <li className="bullet">Wide mouth makes it easy to add mix scoops and liquids, and embossed markings measure both ounces and milliliters</li>
                <li className="bullet">BPA and phthalate-free, dishwasher safe; manufacturer’s limited lifetime warranty</li>
            </ul>
            <div className="new-used"><a className="new-used-link" href="#">New & Used (6) from <div className="used-price">$7.18</div></a> & FREE Shipping on orders over $25.00</div>
            <div className="report"><span className="speech-icon"></span>Report incorrect product information</div>
        </div>
    )
}

export default InfoComponent;

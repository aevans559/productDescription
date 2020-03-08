import React from 'react'

const InfoComponent = () => {
    return (
        <div className="ae-InfoComponent">
            <div className="ae-list-price">List Price:<div className="ae-list-price-price">$9.49</div></div>
            <div className="ae-real-price">Price:<div className="ae-real-price-price">$7.80</div>
                <div className="ae-ship-deal">
                    & 
                    <b className="ae-free-ship">FREE Shipping</b>
                    on orders over $25.00 shipped by Nozama.
                </div>
                <div className="ae-details-returns"><a className="ae-details" href="#">Details</a> & <a className="ae-returns" href="#">FREE Returns</a></div>
            </div>
            <div className="ae-you-save">You Save:<div className="ae-savings-amount">$1.69 (18%)</div></div>
            <a className="ae-discount" href="#">Get $10 off instantly: Pay $0.00 upon approval for the Nozama Emirp shipping.</a>
            <div className="ae-note"><b>Note: </b><div className="ae-note-message">Available at a lower price from <a className="ae-other-sellers">other sellers</a> that may not offer free Emirp shipping.</div></div>
            <div className="ae-dropdown">
                <button className="ae-dropbtn">This item is returnable</button>
                <div className="ae-dropdown-content">
                    <div className="ae-dropdown-msg">This item can be returned in 30 days in most cases.</div>
                    <a className="ae-dropdown-msg" href="#">Read full return policy</a>
                </div>
            </div>
            <div className="ae-color-row"><label className="ae-color-option">Color: </label><span className="ae-color-name"><b>Clear/Black/Black</b></span></div>
            <ul className="ae-img-list">
                <li className="ae-img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/41u03XfmP3L._SS36_.jpg"></img></li>
                <li className="ae-img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/414mUMx5biL._SS36_.jpg"></img></li>
                <li className="ae-img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/31pUTGgAn0L._SS36_.jpg"></img></li>
                <li className="ae-img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/31pijP2EoJL._SS36_.jpg"></img></li>
                <li className="ae-img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/41sFd2nlqPL._SS36_.jpg"></img></li>
                <li className="ae-img-item"><img src="https://images-na.ssl-images-amazon.com/images/I/31YyoB4V8ML._SS36_.jpg"></img></li>
            </ul>
            <ul className="ae-desc-bullets">
                <li className="ae-bullet">20-ounce capacity (note: measurements only go to 12 ounces) shaker cup for mixing protein shakes, smoothies, and supplements</li>
                <li className="ae-bullet">Patented mixing system uses 316 surgical-grade stainless steel BlenderBall wire whisk found only in BlenderBottle brand shaker bottles</li>
                <li className="ae-bullet">Screw-on lid creates leak-proof seal, and flip cap snaps securely shut to keep contents contained; loop top for easy carrying or attaching keys</li>
                <li className="ae-bullet">Wide mouth makes it easy to add mix scoops and liquids, and embossed markings measure both ounces and milliliters</li>
                <li className="ae-bullet">BPA and phthalate-free, dishwasher safe; manufacturer’s limited lifetime warranty</li>
            </ul>
            <div className="ae-new-used"><a className="ae-new-used-link" href="#">New & Used (6) from <div className="ae-used-price">$7.18</div></a> & FREE Shipping on orders over $25.00</div>
            <div className="ae-report"><span className="ae-speech-icon"></span>Report incorrect product information</div>
        </div>
    )
}

export default InfoComponent;

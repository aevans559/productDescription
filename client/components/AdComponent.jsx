import React from 'react'

const AdComponent = () => {
    return (
        <div className="AdComponent">
            <div className="ad-component-info">
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/PillPack/75x75px_HQP_1._CB464587341_._SS75_.png"></img>                  
                </div>
                <div>
                    <div id="ad-title">
                        <b>PillPack by Nozama Pharmacy</b>                       
                    </div>
                    <div id="ad-msg">
                        Your medication, delivered <a>Learn more ></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdComponent;
import React from 'react'

const ProductHeading = (props) => {
    return (
        <div className="CategoryPath">
            <a className="category-link" href="#">Health</a> <span> > </span> <a className="category-link" href="#">{props.category}</a>
            <h1 className="ProductTitle">{props.name}</h1>
            <div>by <a className="vendor-link" href="#">{props.vendor}</a> </div>
            <br/>
                    <img src={props.url} style={{maxWidth: 649, maxHeight: 499}}/>
        </div>
    )
}

export default ProductHeading;

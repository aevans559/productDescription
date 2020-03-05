import React, {Component} from 'react'

const AutoCompleteText = () => {

        return (
            <div>
                <input type="text"/>
                <ul>
                    {this.state.products.map((product) => <li>{product}</li>)}
                </ul>
            </div>
        )
}

export default AutoCompleteText;
import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            name: '',
            url: '',
            price: 0,
            description: '',
            category: '',
            vendor: '',
            stars: 0,
            size: ''
        }
        // this.getAllProducts = this.getAllProducts.bind(this);
    }

    // when component mounts all products in db are available in our state products array
    componentDidMount() {
        axios.get('/products')
            .then(res => {
                this.setState({products: res.data})
                // return res.json()
            })
            // .then(products => {
            // })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        // console.log(this.state)
        this.state.products.map( product => {
            this.state.name = product.name
            this.state.url = product.url
            this.state.price = product.price
            this.state.description = product.description
            this.state.category = product.category
            this.state.vendor = product.vendor
            this.state.stars = product.stars
            this.state.size = product.size
        })
            return (
                <div>
                    {this.state.name}
                    <br/>
                    by: {this.state.vendor}
                    <br/>
                    <img src={this.state.url} style={{maxWidth: 649, maxHeight: 499}}/>
                    <br/>
                    Price: ${this.state.price}
                    <br/>
                    Description: {this.state.description}
                    <br/>
                    Category: {this.state.category}
                    <br/>
                    Rating: {this.state.stars}
                    <br/>
                    Size: {this.state.size}
                </div>
        )
    }
}
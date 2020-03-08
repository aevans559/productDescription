import React, {Component} from 'react';
import axios from 'axios';

// import ProductHeading from './ProductHeading.jsx';
import RatingsComponent from './RatingsComponent.jsx';
import InfoComponent from './InfoComponent.jsx';
import NewerModel from './NewerModel.jsx';
import AdComponent from './AdComponent.jsx';
// import AutoCompleteText from './AutoCompleteText.jsx';

export default class ProductDescription extends Component {
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
        // this.handleChange = this.handleChange.bind(this);
    }

    // when component mounts all products in db are available in our state products array
    componentDidMount() {
        axios.get('/products')
            .then(res => {
                this.setState({products: res.data})
                // console.log(this.state.products)
            })
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

        console.log(this.state.products)
            return (
                <>
                {/* this will get deleted vvv */}
                {/* <div className="App-content">
                    <AutoCompleteText products={this.state.products}/>
                </div> */}
                {/* this will get deleted ^^^ */}

                    <div className="ae-ProductDescription">
                        <RatingsComponent category={this.state.category}/>
                        <InfoComponent />
                        <NewerModel />
                        <AdComponent />
                    </div>
                </>
        )
    }
}



/* <ProductHeading
    category={this.state.category}
    name={this.state.name}
    vendor={this.state.vendor}
    url={this.state.url}
/> */
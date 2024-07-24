// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {givenArr: [], isLoading: true}

  componentDidMount() {
    this.getArr()
  }

  getArr = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const returnData = data.map(eachValue => ({
      id: eachValue.id,
      currencyName: eachValue.currency_name,
      currencyLogo: eachValue.currency_logo,
      usdValue: eachValue.usd_value,
      euroValue: eachValue.euro_value,
    }))

    this.setState({givenArr: returnData, isLoading: false})
  }

  render() {
    const {givenArr, isLoading} = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="bg-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          className="img-container"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="box-container">
          <div className="type-container">
            <div className="type-el">
              <h1 className="heading-el">Coin Type</h1>
            </div>
            <div className="text-container">
              <h1 className="inner-heading">USD</h1>
              <h1>EURO</h1>
            </div>
          </div>
          <ul className="list-prop">
            {givenArr.map(eachValue => (
              <CryptocurrencyItem key={eachValue.id} eachValue={eachValue} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList

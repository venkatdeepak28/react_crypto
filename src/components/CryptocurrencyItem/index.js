// Write your JS code here
const CryptocurrencyItem = props => {
  const {eachValue} = props

  const {currencyLogo, currencyName, euroValue, usdValue} = eachValue

  return (
    <li className="list-el">
      <div className="type-el">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="para">{currencyName}</p>
      </div>
      <div className="text-container">
        <p className="para inner-heading">{usdValue}</p>
        <p className="para">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

import React from 'react'

const NoInternet = ({setOnline}) => {
  return (
    <div className="noInternetWrapper">
        <img src="/astronDemo images/noInternet.png" alt="no-connection-image" />
        <p>No Internet!</p>
        <button onClick={() => setOnline(true)}>Close</button>
    </div>
  )
}

export default NoInternet
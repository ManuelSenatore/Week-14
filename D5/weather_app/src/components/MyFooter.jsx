import React from 'react'

const MyFooter = () => {
  return (
     <footer className="weather-footer">
        <span className="text-light">Weather App {new Date().getFullYear()}©</span>
      </footer>
  )
}

export default MyFooter

import React from 'react'

export default function BuyMeACoffee({text}) {
    return (
        <div>
            <p style={{textAlign: 'center'}}>{text}<span role="img" aria-label="emoji">😊</span>:</p>
            <a href="https://www.buymeacoffee.com/elpuas" target="_blank" rel="noreferrer">
                <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style={{height: 'auto', width: '160px', margin: 'auto'}}
                />
            </a>
        </div>
    )
}

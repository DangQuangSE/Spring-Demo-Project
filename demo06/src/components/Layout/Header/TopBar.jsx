import "./TopBar.css"

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        <div className="top-bar-section">
          <span className="contact-item">
            <span className="icon">📞</span>
            Hotline: 1900 1234
          </span>
        </div>

        <div className="top-bar-section">
          <span className="contact-item">
            <span className="icon">✉️</span>
            info@genderhealthcare.com
          </span>
        </div>

        <div className="top-bar-section">
          <span className="contact-item">
            <span className="icon">🕒</span>
            24/7 Support
          </span>
        </div>

        <div className="top-bar-section">
          <div className="language-selector">
            <span className="lang-option active">VI</span>
            <span className="lang-divider">|</span>
            <span className="lang-option">EN</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar

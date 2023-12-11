import React from "react"
import "./Social.css"
export const Social = () => {
  return (
    <div className="social">
      <div className="bg">
        <div className="content">
          <div className="card-show">
            <p>
              <i className="fa-brands fa-instagram fa-xl"></i> @petitfit
            </p>
          </div>
          <div className="card-show">
            <p>
              <i className="fa-brands fa-linkedin fa-xl"></i> Petitfit
            </p>
          </div>
          <div className="card-show">
            <p>
              <i className="fa-brands fa-twitter fa-xl"></i> @petitfit
            </p>
          </div>
          <div className="card-show">
            <p>
              <i className="fa-brands fa-youtube fa-xl"></i> /petitfit
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

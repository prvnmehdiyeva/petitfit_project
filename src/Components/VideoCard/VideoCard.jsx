import React from "react"
import "./VideoCard.css"
import video from "../Assets/tutorial.mp4"
export const VideoCard = () => {
  return (
    <div className="videoCard container">
      <div className="timeline content">
        <h1 className="head">How does online fitness coaching work ?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
      </div>
      <video
        controlsList="nodownload"
        // style={{ display: "block", margin: "0 auto" }}
        // controls
        width="100px"
        className="timeline video"
        src={video}
        type="video/mp4"
        autoPlay
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

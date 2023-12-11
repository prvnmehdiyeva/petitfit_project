import React, { useRef } from "react"
import "./Exercises.css"
import video from "../Assets/tutorial.mp4"
import cover from "../Assets/coverimg.jpg"
export const Exercises = () => {
  const videoRef = useRef(null)

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen()
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen()
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen()
      }
    }
  }
  return (
    <div className="exercises">
      <div className="content">
        <h3 className="head-exercise">Exercises</h3>
        <p className="exercise">Stretching</p>
        <p className="exercise">Jumping Jacks 30x3</p>
        <p className="exercise">Crunch 30x3</p>
        <p className="exercise">Burpees 30x3</p>
        <p className="exercise">Knee Squat 20x3</p>
        <p className="exercise">Clap Push Up 10x3</p>
      </div>
      <video
        ref={videoRef}
        onClick={toggleFullScreen}
        className="video-exercises"
        controls
        poster={cover}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

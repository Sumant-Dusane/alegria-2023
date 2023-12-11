"use client"

import { useEffect, useRef } from "react"
import "./customcursor.scss";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    useEffect(() => {
        document.addEventListener('mouseenter', () => {
            cursorRef.current.style.display = 'block'
        })
        document.addEventListener('mouseleave', () => {
            cursorRef.current.style.display = 'none'
        })
        document.addEventListener('mousemove', TrackMouse)
    })
    const TrackMouse = (e) => {
        const width = cursorRef.current.clientWidth;
        const height = cursorRef.current.clientHeight;
        cursorRef.current.style.transform = `translate(${e.clientX - width + 150}px, ${e.clientY - height + 200}px)`
    }
    return (
        <div className="custom-cursor" ref={cursorRef}>
        </div>
    )
}

export default CustomCursor

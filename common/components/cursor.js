import { useState, useEffect } from 'react';
import cursorStyle from '../styles/components/cursor.module.css'

export default function Cursor () {

    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0,
        movementX: 0,
        movementY: 0,
    })

    useEffect(() => {
        function handle(e) {
            setMousePosition({
                x: e.pageX,
                y: e.pageY,
                movementX: e.movementX,
                movementY: e.movementY,
            })
        }
        
        document.addEventListener("mousemove", handle);
        return () => document.removeEventListener("mousemove", handle)
    })

    const { x, y, movementX, movementY } = MousePosition
    return (
      <div 
        onMouseMove={(ev)=> handle(ev)}
        className={`${cursorStyle.container}`}
        style={{left:MousePosition.x , top: MousePosition.y}}
      >
      </div>
    )
}
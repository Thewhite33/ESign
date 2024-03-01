import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"


const Board = () => {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing,setIsDrawing] = useState(false)

    useEffect(()=>{
        const canvas = canvasRef.current
        canvas.width = window.innerWidth/1.5;
        canvas.height = window.innerHeight/1.5;
        canvas.style.width = `${window.innerWidth/3}px`
        canvas.style.height = `${window.innerHeight/3}px`

        const context = canvas.getContext('2d')
        context.scale(2,2)
        context.lineCap = "round"
        context.strokeStyle = 'black'
        context.lineJoin = "round"
        context.lineWidth = 3
        contextRef.current = context
    },[])

    const startDrawing = ({nativeEvent}) => {
        const {offsetX,offsetY} = nativeEvent
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX,offsetY)
        setIsDrawing(true)
    }
    
    const endDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing){
            return
        }
        const {offsetX,offsetY} = nativeEvent
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
    
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    const downloadCanvas = () => {
        const canvas = canvasRef.current;
        const imageDataURL = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = imageDataURL;
        downloadLink.download = "signature.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
  return (
    <>
    <div className="flex flex-col item-center">
        <canvas className="border-2 rounded-md border-green-400  p-[15px]"
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        />
        <div className="flex justify-center mt-12 space-x-12">
            <button
            onClick={clearCanvas}
            className="border-2 border-green-500 px-5 py-2 rounded-md">Clear</button>
            <button
            onClick={downloadCanvas}
            className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-white hover:border-2 hover:border-green-500 hover:text-black transition-all duration-300 ease-in-out">Download</button>
        </div>
    </div>
    </>
  )
}

export default Board
import Board from "./board/Board"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <div>
        <Home/>
      </div>
      <div className="flex justify-center items-center min-h-[70vh]">
        <Board/>
      </div>
      
    </>
  )
}

export default App
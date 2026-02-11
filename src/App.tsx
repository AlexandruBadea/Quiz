import Threads from "./components/Threads";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen relative">
      <Threads
        color="#2483ff"
        amplitude={1}
        distance={-2}
        opacity={1.5}
        enableMouseInteraction={false}
      />
      <Threads
        color="#2483ff"
        amplitude={0.5}
        distance={1.5}
        enableMouseInteraction={false}
        enableBackground={false}
        className="absolute top-0 left-0 w-full h-full"
        opacity={1.5}
      />
    </div>
  )
}

export default App

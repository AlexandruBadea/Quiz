import Threads from "./components/Threads";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen relative">
      <Threads
        color={[0.1411764705882353, 0.5137254901960784, 1]}
        amplitude={3}
        distance={0.2}
        enableMouseInteraction={false}
      />
    </div>
  )
}

export default App

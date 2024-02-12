import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Profile from "./components/Profile";
import "./index.css";
import "./App.css";
// https://react.dev/learn
// npm install bootstrap@latest
// npm create vite@latest
function App() {
  return (
    <div>
      <Profile/>
      <ListGroup />
      <Message/>
    </div>
  );
}

export default App;

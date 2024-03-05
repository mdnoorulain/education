
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, Founder,Educator,Teacher,Branch} from './routes/Routes.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/founder" element={<Founder />}/>
        <Route path="/educator" element={<Educator />}/>
        <Route path="/teacher" element={<Teacher />}/>
        <Route path="/branch" element={<Branch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

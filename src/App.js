import QuestionsForm from "./Components/QuestionsForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Questions from "./Components/Questions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionsForm />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

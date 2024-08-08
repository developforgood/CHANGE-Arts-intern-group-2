import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateComments from './components/comments/commentSection';
import FeedbackForm from './components/feedback/feedbackForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateComments />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;




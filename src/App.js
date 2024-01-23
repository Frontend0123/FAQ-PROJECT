import Question from "./Question"
import './App.css';

function App() {
  return (
    <>
    <h1>Project :FAQ/Accordion</h1>
    <div className="container">
      <h2>Frequently Asked questions</h2>
      <div className="questions">
        {questions.map((question)=>(
          <Question
          key={question.id}
          question={question}
          />
        ))}
      </div>
    </div>

      
    
    </>
  );
}

const questions=[{
  id:1,
  title:"what is javascript ?",
  info:"Javascript is a high level interpreted scripting language is mainly created for dynamic and interactive web pages",
},
{
  id :2,
  title:"What is reactjs ?",
  info:"Reactjs is a open source library used to develop single page user interface",
},
{
  id:3,
  title:"what is component ?",
  info:"Component is the building block of reactjs"
}]

export default App;

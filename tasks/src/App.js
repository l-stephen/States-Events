
import './App.css';
/* 
Deliverables
-Use the 'useState' hook for the add button
-When the add button is clicked display the task that was entered using an event handeler
*/
function App() {
  return (
    <div class="header">
      <h3>TODO List</h3>
      <input type = "text" placeholder = "Enter Task"></input>
      <button class="bttn">Add</button>
    </div>
  );
}

export default App;

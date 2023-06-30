import './style/pages.scss';
import './style/todo.scss';

// import { GoCheck } from 'react-icons/go';
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';
// import { Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="content-wrapper">
      <div className="todo">
        <Home />
      </div>
    </div>
  );
}

export default App;

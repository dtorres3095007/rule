import './assets/styles/scss/styles.scss'
import Todo from './components/Todo'
import Cards from './components/Cards'
import Celebrities from './containers/Celebrities'

function App() {
  const todos = [
    {id : 1, title : 'Wash dishes', completed : false},
    {id : 2, title : 'Make dinner', completed : true},
  ];
  return (
    <div>
      <Celebrities/>
    </div>
  );
}

export default App;

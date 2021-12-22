import './assets/styles/scss/styles.scss'
import { Provider } from 'react-redux'
import store from './redux/store'
import Celebrities from './containers/Celebrities'

function App() {
  const todos = [
    {id : 1, title : 'Wash dishes', completed : false},
    {id : 2, title : 'Make dinner', completed : true},
  ];
  return (
    <Provider store={store}>
      <Celebrities/>
    </Provider>
  );
}

export default App;

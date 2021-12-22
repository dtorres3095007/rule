import './assets/styles/scss/styles.scss'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './containers/Header'
import Celebrities from './containers/Celebrities'

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Celebrities/>
    </Provider>
  );
}

export default App;

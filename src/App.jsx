import Tablas from './pages/Tablas';
import { Provider } from 'react-redux';
import generateStore from './config/Store';

function App() {

const store = generateStore();

  return (
    <div>
      <Provider store={store}>
        <Tablas />
      </Provider>
    </div>
  );
}

export default App;
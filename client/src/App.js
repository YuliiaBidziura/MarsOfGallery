import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import { observer } from 'mobx-react-lite';
import {BrowserRouter} from 'react-router-dom'


const App = observer(() => {
  return (
    <BrowserRouter>
      <NavBar />
      <Menu />

      
    </BrowserRouter>
  );
})

export default App;

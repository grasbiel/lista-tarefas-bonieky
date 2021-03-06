import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './Types/Item';
import {ListItem} from './components/ListItem/index'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'comprar pão na padaria', done: false},
    {id: 2, name: 'comprar bolo na padaria', done: true},
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
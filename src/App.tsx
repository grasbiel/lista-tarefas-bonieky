import { useState } from 'react';
import * as C from './App.styles';
import AddArea from './components/AddArea';
import { ListItem } from './components/ListItem';
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1, name: 'Comprar o pão na padaria', done: false
    },
    {
      id: 2, name: 'Limpar o apartamento', done: true
    },

  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list]
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  return (

    <C.Container>
      <C.Area>
        <C.Header> Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (

          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
          />

        ))}

      </C.Area>
    </C.Container>
  );
}


export default App;
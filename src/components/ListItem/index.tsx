import * as C from '../ListItem/styles'
import {Item} from '../../Types/Item'
type Props = {
    item: Item;
}

export const ListItem = ({item} : Props) => {
    return (
        <C.Container>
            <input type="checkbox" />
            <label>{item.name}</label>
        </C.Container>
    )
}
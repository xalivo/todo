import {List} from "@mui/material";
import useTodoStore from "../store/TodoStore.ts";
import TodoListItem from "./TodoListItem.tsx";

const TodoList = () => {
    const {todoItems} = useTodoStore()
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todoItems.map(x => <TodoListItem key={x.id} item={x}/>)}
        </List>
    );
};

export default TodoList;
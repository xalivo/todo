import {List} from "@mui/material";
import useTodoStore from "../store/TodoStore.ts";
import TodoListItem from "./TodoListItem.tsx";

const TodoList = () => {
    const {todoItems, setTodoItems} = useTodoStore();

    const handleOnToggleListItemIsDone = (id: number) => {
        setTodoItems(todoItems.map((x) => {
            if (x.id === id) {
                x.isDone = !x.isDone;
            }
            return x;
        }));
    }

    const handleOnDeleteListItem = (id: number) => {
        setTodoItems(todoItems.filter(x => x.id !== id));
    }

    return (
        <List sx={{width: '100%', maxWidth: 450, marginInlineEnd: 1, marginBottom: 20}}>
            {todoItems.map(x => <TodoListItem key={x.id}
                                              item={x}
                                              handleOnToggleIsDone={handleOnToggleListItemIsDone}
                                              handleOnDelete={handleOnDeleteListItem}/>)}
        </List>
    );
};

export default TodoList;
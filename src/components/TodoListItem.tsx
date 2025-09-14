import type {ITodoListItem} from "../common/interfaces.ts";
import {IconButton, ListItem, ListItemButton, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoListItemProps {
    item: ITodoListItem;
}

const TodoListItem = ({item}: ITodoListItemProps) => {
    return (
        <ListItem secondaryAction={
            <IconButton edge={"end"}>
                <DeleteIcon/>
            </IconButton>
        }>
            <ListItemButton>
                <ListItemText primary={item.title} secondary={item.description}/>
            </ListItemButton>
        </ListItem>
    );
};

export default TodoListItem;
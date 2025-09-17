import type {ITodoListItem} from "../common/interfaces.ts";
import {Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoListItemProps {
    item: ITodoListItem;
    handleOnDelete: (id: number) => void;
    handleOnToggleIsDone: (id: number) => void;
}

const TodoListItem = ({item, handleOnDelete, handleOnToggleIsDone}: ITodoListItemProps) => {
    return (
        <ListItem secondaryAction={
            <IconButton onClick={() => handleOnDelete(item.id)} edge={"end"}>
                <DeleteIcon/>
            </IconButton>
        }>
            <ListItemButton onClick={() => handleOnToggleIsDone(item.id)}>
                <ListItemIcon>
                    <Checkbox
                        edge={"start"}
                        checked={item.isDone}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={item.title}
                              secondary={item.description && item.description?.length > 20 ? item.description.substring(0, 20) + "..." : item.description}
                              style={{textDecoration: item.isDone ? "line-through" : "none", color: item.isDone ? "#757678" : "inherit"}}/>
            </ListItemButton>
        </ListItem>
    );
};

export default TodoListItem;
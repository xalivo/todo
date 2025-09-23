import type {ITodoListItem} from "../common/interfaces.ts";
import {Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITodoListItemProps {
    item: ITodoListItem;
    handleOnDelete: (id: number) => void;
    handleOnToggleIsDone: (id: number) => void;
    setIsDetailsOpen: (open: boolean) => void;
}

const TodoListItem = ({item, handleOnDelete, handleOnToggleIsDone, setIsDetailsOpen}: ITodoListItemProps) => {
    return (
        <ListItem style={{borderInlineStart: "solid", borderColor: item.color, borderWidth: 10}} secondaryAction={
            <IconButton onClick={() => handleOnDelete(item.id)} edge={"end"}>
                <DeleteIcon/>
            </IconButton>
        }>
            <ListItemIcon onClick={() => handleOnToggleIsDone(item.id)}>
                <Checkbox
                    edge={"start"}
                    checked={item.isDone}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemButton onClick={() => setIsDetailsOpen(true)}>
                <ListItemText primary={item.title}
                              secondary={item.description && item.description?.length > 20 ? item.description.substring(0, 20) + "..." : item.description}
                              style={{
                                  textDecoration: item.isDone ? "line-through" : "none",
                                  color: item.isDone ? "#757678" : "inherit"
                              }}/>
            </ListItemButton>
        </ListItem>
    );
};

export default TodoListItem;
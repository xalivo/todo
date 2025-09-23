import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import type {ITodoListItem} from "../common/interfaces.ts";

interface ITodoItemDetailsProps {
    item: ITodoListItem;
    isDetailsOpen: boolean;
    setIsDetailsOpen: (open: boolean) => void;
}

const TodoItemDetails = ({item, isDetailsOpen, setIsDetailsOpen}: ITodoItemDetailsProps) => {

    const handleClose = () => {
        setIsDetailsOpen(false);
    }

    return (
        <Dialog
            fullWidth
            open={isDetailsOpen}
            onClose={handleClose}>
            <DialogTitle style={{backgroundColor: item.color}}>{item.title}</DialogTitle>
            <DialogContent>
                <h4>link: {item.link ? <a style={{color: "#4891ff"}} href={item.link}>{item.link}</a>: "No link available."}</h4>
                <h4>description</h4>
                <DialogContentText>{item.description ? item.description : "No description available."}</DialogContentText>
                <h4>due to</h4>
                <DialogContentText>{item.dateDueTo ? item.dateDueTo.toString() : "No date available."}</DialogContentText>
                <h4>created at</h4>
                <DialogContentText>{item.createdAt ? item.createdAt.toString() : "No date available."}</DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default TodoItemDetails;
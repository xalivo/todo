import {Dialog, DialogTitle} from "@mui/material";

interface ITodoItemDetailsProps {
    isDetailsOpen: boolean;
    setIsDetailsOpen: (open: boolean) => void;
}

const TodoItemDetails = ({isDetailsOpen, setIsDetailsOpen}: ITodoItemDetailsProps) => {

    const handleClose = () => {
        setIsDetailsOpen(false);
    }

    return (
        <Dialog
            open={isDetailsOpen}
            onClose={handleClose}>
            <DialogTitle>Hello</DialogTitle>
        </Dialog>
    );
};

export default TodoItemDetails;
import {Modal} from "@mui/material";

interface ITodoItemDetailsProps {
    isDetailsOpen: boolean;
    setIsDetailsOpen: (open: boolean) => void;
}

const TodoItemDetails = ({isDetailsOpen, setIsDetailsOpen}: ITodoItemDetailsProps) => {

    const handleClose = () => {
        setIsDetailsOpen(false);
    }
    return (
        <Modal
            open={isDetailsOpen}
            onClose={handleClose}>
            <div>Hello</div>
        </Modal>
    );
};

export default TodoItemDetails;
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import useMessageStore from "../store/MessageStore.ts";

interface IConfirmationDialogProps {
    title: string;
    text?: string;
    onConfirm: () => void;
    onCancel?: () => void;
}

const ConfirmationDialog = ({title, text, onConfirm, onCancel}: IConfirmationDialogProps) => {
    const {isOpen, setIsOpen} = useMessageStore();

    const onPressCancel = () => {
        if (onCancel) onCancel();
        setIsOpen(false);
    }

    return (
        <Dialog
            open={isOpen}
            keepMounted
            onClose={() => setIsOpen(false)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onPressCancel}>Cancel</Button>
                <Button onClick={onConfirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
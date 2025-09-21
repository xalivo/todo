import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useState} from "react";

interface IConfirmationDialogProps {
    title: string;
    text?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationDialog = ({title, text, onConfirm, onCancel}: IConfirmationDialogProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog
            open={open}
            keepMounted
            onClose={() => setOpen(false)}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={onConfirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;
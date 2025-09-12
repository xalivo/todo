import {Button, TextField} from "@mui/material";

const CreatePage = () => {
    return (
        <form style={{padding: 30, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 30}}>
            <TextField label={"title"} placeholder={"Enter title..."} variant={"outlined"} fullWidth required/>
            <TextField label={"description"} placeholder={"description (optional)"} multiline rows={5} fullWidth/>
            <TextField label={"link"} placeholder={"Link a website to this event (optional)"} fullWidth/>
            <TextField label={"due to"} type={"datetime-local"} slotProps={{inputLabel: {shrink: true}}} fullWidth/>
            <Button variant={"outlined"} type={"submit"} fullWidth>Submit</Button>
        </form>
    );
};

export default CreatePage;
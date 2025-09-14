import {Button, Card, CardActions, CardContent, Snackbar, Typography} from "@mui/material";
import {APP_URL, APP_VERSION} from "../common/constants.ts";
import {useState} from "react";

const SettingsPage = () => {
    const [isSnackbarOpened, setIsSnackbarOpened] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>();

    const sendMessage = (message: string) => {
        setMsg(message);
        setIsSnackbarOpened(true);
    }

    return (
        <div style={{width: '100%'}}>
            <Card>
                <CardContent>
                    <Typography variant={"h5"}>todo</Typography>
                    <Typography variant={"body2"}>{APP_VERSION} - by xalivo</Typography>
                </CardContent>
                <CardActions>
                    <Button variant={"outlined"} size={"small"}>GitHub</Button>
                    <Button onClick={() => {navigator.clipboard.writeText(APP_URL); sendMessage("Copied to clipboard.")}} variant={"outlined"}
                            size={"small"}>Share</Button>
                </CardActions>
            </Card>
            <Snackbar open={isSnackbarOpened}
                      autoHideDuration={1000}
                      onClose={() => setIsSnackbarOpened(false)}
                      message={msg}/>
        </div>
    );
};

export default SettingsPage;
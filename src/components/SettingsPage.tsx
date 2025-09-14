import {Button, Card, CardActions, CardContent, Divider, Snackbar, Typography} from "@mui/material";
import {APP_URL, APP_VERSION, PROJECT_GITHUB_URL} from "../common/constants.ts";
import {useState} from "react";
import useTodoStore from "../store/TodoStore.ts";

const SettingsPage = () => {
    const {setTodoItems} = useTodoStore();
    const [isSnackbarOpened, setIsSnackbarOpened] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>();

    const sendMessage = (message: string) => {
        setMsg(message);
        setIsSnackbarOpened(true);
    }

    const removeAllData = () => {
        setTodoItems([]);
        localStorage.removeItem("todoList");
    }

    return (
        <div style={{width: '100%', display: "flex", flexDirection: "column", gap: 10}}>
            <Card style={{padding: 10}}>
                <CardContent>
                    <Typography variant={"h5"}>todo</Typography>
                    <Typography variant={"body2"}>{APP_VERSION} - by xalivo</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => {
                            navigator.clipboard.writeText(APP_URL);
                            sendMessage("Copied to clipboard.")
                        }}
                        variant={"outlined"}
                        size={"small"}>Share</Button>
                    <Button href={PROJECT_GITHUB_URL} variant={"outlined"} size={"small"}>GitHub</Button>
                </CardActions>
            </Card>
            <Card style={{padding: 15, display: "flex", flexDirection: "column", gap: 15}}>
                <Typography variant={"h6"}>Permanently delete all data?</Typography>
                <Typography variant={"body2"}>If you wish to permanently remove all data linked to this application,
                    click the
                    button below.</Typography>
                <Button onClick={removeAllData} variant={"outlined"} color={"error"}>Delete all data</Button>
                <Divider variant={"middle"}/>
            </Card>

            <Snackbar open={isSnackbarOpened}
                      autoHideDuration={1000}
                      onClose={() => setIsSnackbarOpened(false)}
                      message={msg}/>
        </div>
    );
};

export default SettingsPage;
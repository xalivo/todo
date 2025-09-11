import {AppBar, Paper, Toolbar, Typography} from "@mui/material";
import TodoList from "./components/TodoList.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import {useState} from "react";
import {AppViews} from "./common/enums.ts";

const App = () => {
    const [view, setView] = useState<AppViews>(AppViews.Home);
    return (<>
        <AppBar position={"sticky"}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    todo
                </Typography>
            </Toolbar>
        </AppBar>
        <TodoList/>
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <NavigationBar view={view} setView={setView}/>
        </Paper>
    </>);
}

export default App;

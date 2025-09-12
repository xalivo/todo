import {AppBar, Paper, Toolbar, Typography} from "@mui/material";

import NavigationBar from "./components/NavigationBar.tsx";
import {useState} from "react";
import {AppViews} from "./common/enums.ts";
import TodoList from "./components/TodoList.tsx";
import CreatePage from "./components/CreatePage.tsx";
import SettingsPage from "./components/SettingsPage.tsx";

const App = () => {
    const [view, setView] = useState<AppViews>(AppViews.Home);

    const render = () => {
        switch (view) {
            case AppViews.Home:
                return <TodoList/>;
            case AppViews.Create:
                return <CreatePage/>;
            case AppViews.Settings:
                return <SettingsPage/>;
        }
    }

    return (<>
        <AppBar position={"sticky"} >
            <Toolbar>
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    todo
                </Typography>
            </Toolbar>
        </AppBar>
        <div>
            {render()}
        </div>
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <NavigationBar view={view} setView={setView}/>
        </Paper>
    </>);
}

export default App;

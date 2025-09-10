import {AppBar, Paper, Toolbar, Typography} from "@mui/material";
import TodoList from "./components/TodoList.tsx";
import NavigationBar from "./components/NavigationBar.tsx";

const App = () => {
    return (<>
        <AppBar position={"sticky"}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    todo
                </Typography>
            </Toolbar>
        </AppBar>
        <TodoList/>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <NavigationBar/>
        </Paper>
    </>);
}

export default App;

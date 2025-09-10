import {AppBar, Toolbar, Typography} from "@mui/material";

const App = () => {
    return (<>
        <AppBar position={"sticky"}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    todo
                </Typography>
            </Toolbar>
        </AppBar>
    </>);
}

export default App;

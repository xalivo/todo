import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import NavigationBar from "./components/NavigationBar.tsx";
import {useEffect} from "react";
import {AppViews} from "./common/enums.ts";
import TodoList from "./components/TodoList.tsx";
import CreatePage from "./components/CreatePage.tsx";
import SettingsPage from "./components/SettingsPage.tsx";
import useTodoStore from "./store/TodoStore.ts";
import useAppViewStore from "./store/AppViewStore.ts";

const App = () => {
    const {view} = useAppViewStore();
    const {setTodoItems} = useTodoStore();

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

    const handleOnOpenWindow = () => {
        const storedItems = localStorage.getItem("todoList");
        if (storedItems) {
            setTodoItems(JSON.parse(storedItems));
        }
    }

    useEffect(() => {
        handleOnOpenWindow();
    }, []);

    return (
        <>
            <AppBar position={"sticky"}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                        todo
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{display: "flex", justifyContent: "center"}}>
                {render()}
            </div>
            <Box style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "#121212"}}>
                <NavigationBar/>
            </Box>
        </>);
}

export default App;

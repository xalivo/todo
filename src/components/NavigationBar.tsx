import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import useAppViewStore from "../store/AppViewStore.ts";

const NavigationBar = () => {
    const {view, setView} = useAppViewStore();
    return (
        <Box style={{paddingBottom: 20}}>
            <BottomNavigation
                showLabels
                value={view}
                onChange={(_event, newValue) => {
                    setView(newValue);
                }}
            >
                <BottomNavigationAction label="List" icon={<ChecklistIcon />} />
                <BottomNavigationAction label="Create" icon={<AddIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        </Box>
    );
};

export default NavigationBar;
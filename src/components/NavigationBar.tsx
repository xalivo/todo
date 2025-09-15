import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import {AppViews} from "../common/enums.ts";

interface INavigationBarProps {
    view: AppViews;
    setView: (view: AppViews) => void;
}

const NavigationBar = ({view, setView}: INavigationBarProps) => {
    return (
        <Box>
            <BottomNavigation
                showLabels
                value={view}
                onChange={(_event, newValue) => {
                    setView(newValue);
                }}
                style={{paddingBottom: 30}}
            >
                <BottomNavigationAction label="List" icon={<ChecklistIcon />} />
                <BottomNavigationAction label="Create" icon={<AddIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        </Box>
    );
};

export default NavigationBar;
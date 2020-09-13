import { activatePaneHandler } from './src/js/pane-click-handler';
import { playgroundMovement, toggleNewActivePane } from './src/js/playground-movement';
import { hoverHandler } from './src/js/hover-handler'; 
// Идентификатор начальной панели
const initialId = "100";

// Инициализация
const init = () => {
    toggleNewActivePane(initialId);

    activatePaneHandler();
    playgroundMovement();
    hoverHandler();
};

init();
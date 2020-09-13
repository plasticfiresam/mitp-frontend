import { activatePaneHandler } from './src/js/pane-click-handler';
import { playgroundMovement, toggleNewActivePane } from './src/js/playground-movement';

// Идентификатор начальной панели
const initialId = "100";

// Инициализация
const init = () => {
    toggleNewActivePane(initialId);

    activatePaneHandler();
    playgroundMovement();
};

init();
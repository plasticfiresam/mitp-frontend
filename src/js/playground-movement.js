import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";
import { getCurrentPane } from "./get-current-pane";

const keysForFilter = [37, 38, 39, 40];

const keyCodes = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
};

// Активирует новую панель с указанным идентификатором
export const toggleNewActivePane = (paneId) => {
    console.warn(`Next pane ID: ${paneId}`);
    removeOldCurrentPane();
    const panes = [...document.getElementsByClassName('action-pane')];
    const targetIndex = panes.findIndex(element => element.dataset.paneId === paneId);
    panes[targetIndex].classList.add('--current');
}

// Удаляет класс с текущей активной панели
const removeOldCurrentPane = () => {
    const currentPane = getCurrentPane();
    if (currentPane) {
        currentPane.classList.remove('--current');
    }
}

// Логика обработки нажатий
export const playgroundMovement = () => {
    fromEvent(document, 'keyup').pipe(
        filter(event => keysForFilter.includes(event.keyCode))
    ).subscribe(({ keyCode }) => {
        const currentPane = getCurrentPane();
        if (currentPane) {
            const nextTargets = { ...currentPane.dataset };
            switch (keyCode) {
                case keyCodes.down: {
                    if (nextTargets['down']) {
                        toggleNewActivePane(nextTargets['down']);
                    } else {
                        console.warn('No way down');
                    }
                    break;
                }
                case keyCodes.right: {
                    if (nextTargets['right']) {
                        toggleNewActivePane(nextTargets['right']);
                    } else {
                        console.warn('No way right');
                    }
                    break;
                }
                case keyCodes.up: {
                    if (nextTargets['up']) {
                        toggleNewActivePane(nextTargets['up']);
                    } else {
                        console.warn('No way top');
                    }
                    break;
                }
                case keyCodes.left: {
                    if (nextTargets['left']) {
                        toggleNewActivePane(nextTargets['left']);
                    } else {
                        console.warn('No way left');
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        }
    });
};
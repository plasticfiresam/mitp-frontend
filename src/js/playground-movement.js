import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

const keysForFilter = [37, 38, 39, 40];

const keyCodes = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
};

const getCurrentActivePane = () => {
    const element = document.getElementsByClassName('--current');
    if (element[0]) {
        return element[0];
    } else {
        console.log('reset');
    }
};

const toggleNewActivePane = (paneId) => {
    removeOldCurrentPane();
    const panes = [...document.getElementsByClassName('action-pane')];
    const targetIndex = panes.findIndex(element => element.dataset.paneId === paneId);
    panes[targetIndex].classList.add('--current');
}

const removeOldCurrentPane = () => {
    const currentPane = getCurrentActivePane();
    currentPane.classList.remove('--current');
}

export const playgroundMovement = () => {
    fromEvent(document, 'keyup').pipe(
        filter(event => keysForFilter.includes(event.keyCode))
    ).subscribe(({ target, keyCode }) => {
        const currentActivePane = getCurrentActivePane();
        const nextTargets = { ...currentActivePane.dataset };
        switch (keyCode) {
            case keyCodes.down: {
                if (nextTargets['down']) {
                    toggleNewActivePane(nextTargets['down']);
                } else {
                    console.log('no way down');
                }
                break;
            };
            case keyCodes.right: {
                if (nextTargets['right']) {
                    toggleNewActivePane(nextTargets['right']);
                } else {
                    console.log('no way right');
                }
                break;
            };
            case keyCodes.top: {
                if (nextTargets['top']) {
                    toggleNewActivePane(nextTargets['top']);
                } else {
                    console.log('no way top');
                }
                break;
            };
            case keyCodes.left: {
                if (nextTargets['left']) {
                    toggleNewActivePane(nextTargets['left']);
                } else {
                    console.log('no way left');
                }
                break;
            };
            default: {
                break;
            }
        }
        console.log(nextTargets);
    });
};
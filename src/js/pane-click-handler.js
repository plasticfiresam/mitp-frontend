import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { getCurrentPane } from './get-current-pane';
// 
export const activatePaneHandler = () => {
    fromEvent(document, 'click').pipe(
        map(event => event.target),
        filter(target => target.classList.contains('action-pane') && !target.classList.contains('--disabled'))
    ).subscribe(eventTarget => {
        console.warn(`Click at pane with ID: ${eventTarget.dataset['paneId']}`);
    });

    fromEvent(document, 'keyup').pipe(
        filter(({keyCode}) => keyCode == 13),
    ).subscribe(() => {
        const currentPane = getCurrentPane();
        console.warn(`Click at pane with ID: ${currentPane.dataset['paneId']}`);
    });
};
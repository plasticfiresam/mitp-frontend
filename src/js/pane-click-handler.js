import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const activatePaneClickHandler = () => {
    fromEvent(document, 'click').pipe(
        map(event => event.target),
        filter(target => target.classList.contains('action-pane') && !target.classList.contains('--disabled'))
    ).subscribe(eventTarget => {
        console.log(`Click at pane with ID: ${eventTarget.dataset['paneId']}`);
    });
};
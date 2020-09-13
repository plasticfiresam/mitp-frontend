import { fromEvent } from "rxjs"
import { distinctUntilChanged } from "rxjs/operators";
import { toggleNewActivePane } from './playground-movement';

export const hoverHandler = () => {
    const panes = [...document.getElementsByClassName('action-pane')];

    panes.forEach(pane => {
        if (!pane.classList.contains('--disabled')) {
            handler(pane);
        }
    });
}

const handler = (pane) => {
    fromEvent(pane, 'mouseenter').pipe(distinctUntilChanged()).subscribe(({target}) => {
        const paneId = target.dataset.paneId;

        toggleNewActivePane(paneId);
    });
}
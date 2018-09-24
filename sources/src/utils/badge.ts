import pipe from 'ramda/es/pipe';

import { getUnits } from './converter';
import { calculateTotal, totalToBadge } from './total';

export const setBadge = text => chrome.browserAction.setBadgeText({ text })
export const setTotalToBadge = () => chrome.storage.local.get(
    pipe(
        calculateTotal,
        totalToBadge,
        getUnits,
        setBadge,
    )
)
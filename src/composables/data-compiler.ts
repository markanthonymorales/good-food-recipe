import database1 from '../data-storage/database1.json'
import database2 from '../data-storage/database2.json'

export function useStoradData() {
    return {...database1, ...database2};
};

import * as util from '../util.js'

//액션 타입 선언
const SAVE = 'reducers/SAVE';

//action함수
export const saveRepoInfo = (count) => ({ type: SAVE, count });

let savedRepoList = util.getStorageParsedItem('repositoryList')
const initialState = savedRepoList;

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SAVE:
            return action.count ;
        default:
            return state;
    }
};
 
export default reducers;
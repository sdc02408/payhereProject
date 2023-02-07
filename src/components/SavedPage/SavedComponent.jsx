import { useSelector, useDispatch } from "react-redux"
import * as util from '../../util.js'
import { saveRepoInfo } from "../../modeuls/reducers.js";

function SavedComponent() {
    const dispatch = useDispatch();
    const repositoryInfo = useSelector(state => state)

    const deleteRepo = (id) => {
        let savedRepoList = util.getStorageParsedItem('repositoryList')
   
        let deleteRepoList = savedRepoList.filter((savedRepo) => savedRepo.id !== id)
        util.setStorageStringItem('repositoryList', deleteRepoList)   
        dispatch(saveRepoInfo(deleteRepoList))

    }
    return (
        <div className='savedContainer'>
            <h3>등록된 레파지토리입니다.</h3>
            {
                repositoryInfo.reducers.length > 0
                    ?
                    repositoryInfo.reducers && repositoryInfo.reducers.map((i,index) => 
                        <li key={index} >
                            {i.name}/{i.repo} 
                            <button onClick={() => {deleteRepo(i.id)}}>삭제</button>
                        </li>

                    )
                    :
                    <div>레파지토리를 등록해주세요</div>
                }
        </div>
    )
}

export default SavedComponent
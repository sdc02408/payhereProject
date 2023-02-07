import '../../App.css'
import axios from 'axios'
import { useState } from 'react';
import * as util from '../../util.js'
import { useDispatch } from 'react-redux';
import { saveRepoInfo } from '../../modeuls/reducers';

function SearchComponent() {
    const dispatch = useDispatch();

    //레파지토리 검색 키워드
    const [searchRepo, setSearchRepo] = useState("")
    //검색된 레파지토리 
    const [repoList, setRepoList] = useState([])
  
    const onChangeRepo = (e) => {
        setSearchRepo(e.target.value)
    }

    const searchRepoSubmit = (e) => {
        e.preventDefault();
        if(searchRepo !== '')
        searchRepositoryApi()
    }

    const searchRepositoryApi = async () => {
        const token = ''; 
        const config = {
            headers : {
                Authorization: `Bearer ${token}`
            }
        };
    
        try{
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchRepo}`, config);
            setRepoList(response)
        } catch(error) {
            console.log(error)
        }
    } 

    const addRepo = (id,owner, repo) => {
        //localstorage에 등록할 레파지토리 정보
        let repoInfo = {
            id: id,
            name : owner,
            repo : repo
        }

        let savedRepoList = util.getStorageParsedItem('repositoryList')

        // 등록된 레파지토리가 없는경우
        if(savedRepoList === null ) {
            util.setStorageStringItem('repositoryList', [repoInfo])
            dispatch(saveRepoInfo([repoInfo]))
            
        } else if(savedRepoList.length >= 4){
            alert('4개 이상 등록할 수 없습니다.')
        } else {
            // 레파지토리 중복 검사
            if(savedRepoList.find(v => v.id === repoInfo.id)){
                alert('이미 등록된 레파지토리가 있습니다.')
            } else {
                savedRepoList.push(repoInfo)
                util.setStorageStringItem('repositoryList', savedRepoList)   
                dispatch(saveRepoInfo(savedRepoList))
            }
        }
    }

    const resetBtn = () => {
        setSearchRepo('')
        setRepoList([])
    }
    
    return (

        <div className='searchContainer'>
            <h3>레파지토리를 검색하세요</h3>
            <form onSubmit={searchRepoSubmit}>
                <input type="text" onChange={onChangeRepo} value={searchRepo}></input>
                <button type="submit">검색</button>
                <button onClick={resetBtn}>초기화</button>
            </form>

                {
                  repoList.data
                    ?
                    repoList.data && repoList.data.items.map((i,index) => 
                            <li key={index} >
                                {i.name} 
                                <button onClick={() => {addRepo(i.id, i.owner.login, i.name)}}>등록</button>
                            </li>

                        )
                    :
                    <div>검색된 리스트가 없습니다</div>
                }
        </div>
    )
}

export default SearchComponent

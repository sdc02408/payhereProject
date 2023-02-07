import { useEffect, useState } from 'react';
import '../../App.css'
import axios from 'axios'
import { useSelector } from "react-redux"
import Pagination from './Pagination';

function ListComponent() {

    //등록된 모든 레파지토리 이슈
    const [isssueList, setIssueList] = useState([])
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const repositoryInfo = useSelector(state => state)

    const getRepositoryIssues = async () => {
        try{
           
            let setApiList = repositoryInfo.reducers.map((id) => {
                return `https://api.github.com/repos/${id.name}/${id.repo}/issues?per_page=100`
            })

            //로컬스토리지에 저장된 레파지토리 정보로 Issue API 호출
            await axios.all(setApiList.map((issueApi) => {
                axios.get(issueApi).then((issueObj) => {
                    //등록된 레파지토리 이슈 저장
                    setIssueList(issue => 
                        [...issue, ...issueObj.data]
                    )
                }
                )
            }))

        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRepositoryIssues()
        return () => setIssueList([]);
    },[repositoryInfo.reducers])
    
    return (
        <div className='listContainer'>
            <h3>등록된 레자지토리의 이슈를 확인하세요</h3>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Issue 제목</td>
                        <td>Repository 이름</td>
                        <td>상세페이지 링크</td>
                    </tr>
                    {
                        isssueList.length > 0 ? 
                
                        isssueList && isssueList.slice(offset,offset+limit).map((i,index) => 
                            <tr key={index}>
                                <td>{i.title}</td>
                                <td>{i.repository_url.substring(i.repository_url.lastIndexOf('/') + 1)}</td>
                                <td><a href={i.html_url}>상세보기</a></td>
                            </tr>
                        )
                        :
                        <div>등록된 레파지토리가 없습니다</div>
                    }
                </tbody>
            </table>
                <Pagination
                  total={isssueList.length}
                  limit={limit}
                  page={page}
                  setPage={setPage}></Pagination>
               
        </div>
    )

}

export default ListComponent
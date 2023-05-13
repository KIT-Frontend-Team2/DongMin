import PlayListMock from "../../__mock__/playList.json";
import { useState } from "react";


function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  // console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
  const [data,setData] = useState(PlayListMock.playlist)
  // console.log(data)
  const AddData = (songTitle,singer)=>{
    const CopyData = [...data]
    CopyData.push({title:songTitle,singer:singer})
    setData(CopyData)
  }

  const DeleteData = (songTitle,singer)=>{
    const CopyData = [...data]
    let filtered = CopyData.filter(o => ((o.title !== songTitle)&&(o.singer !== singer)));
    setData(filtered)
  }

  const [title,setTitle] = useState('')
  const [singer,setSinger] =useState('')

  
  
  return (
    <>
      <h1>문제1</h1>
      <ul>
        {data.map((v,i)=>{

          return (
        
          <li key={i}>
            <h3>{v.title}</h3>
            <p>{v.singer}</p>
          </li>
          )
        })}
        <li>
          
        </li>
      </ul>
      <div>
        <p>
          곡명 : <input onChange={(e)=>{
                setTitle(e.target.value)
          }}/>
        </p>
        <p>
          가수/작곡 : <input onChange={(e)=>{
                setSinger(e.target.value)
          }}/>
        </p>
        <p>
          <button onClick={()=>{AddData(title,singer)}}>추가</button>
          <button onClick={()=>{DeleteData(title,singer)}}>삭제</button>
        </p>
      </div>
    </>
  );
}
export default State1;

import styled from "styled-components";
import React from "react";


function Comment({post,ReviseData,DeleteData}) {
  return (
    <S.CommentItem>
      {post.Comments.map((v,i)=>{
       return(
       <React.Fragment key={i}>
        <p >
          작성자: <span>{v.User.nickname}</span>
        </p>
        <p>
          댓글 내용: <span>{v.content}</span>
        </p>
        <button onClick={()=>{ReviseData(v.User.nickname)}}>댓글 수정</button>
        <button onClick={()=>{DeleteData(v.User.nickname,i)}}>댓글 삭제</button>

      </React.Fragment>)
      })}
      
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};

import { useParams } from "react-router-dom";
import productList from "../__mock__/products.json"
import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
function DetailPage() {
  const params = useParams();
  console.log(params.productNumber);
  // console.log(productList)
  const result = productList.products.some(val=>{return val.productNumber === params.productNumber;});
  console.log(result)
  // const dataActive = productList.products.some(item => item.age > 30);
  let dataActive = productList.products.filter( item => item.productNumber  === params.productNumber );
  console.log(dataActive)
  return (
    <div>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}
    {!result && (<Navigate to="/state" replace={true} />)}
    {!result === false ?
    <>
    <div>{params.productNumber}</div>
    <S.Item >
      <h4>{dataActive[0].productName}</h4>
      <p>상품번호: {dataActive[0].productNumber}</p>
      <p>가격: {parseInt(dataActive[0].productPrice,10).toLocaleString()}원</p>
      <p>사이즈: {dataActive[0].productSize}</p>
      <p>평점: {dataActive[0].productRating}</p>
      <p>리뷰: {dataActive[0].productReview}</p>
      <p>제품 상세: {dataActive[0].productDetail.productDetailInfo}</p>

    </S.Item>

    <S.Item >
      <ul>
        {dataActive[0].Review.map((v)=>{
          return(
            <>
              <li>{v.reviewer}</li>
              <li>{v.review}</li>
              <li>{v.rating}</li>

            </>
          )
        })}
      </ul>
    </S.Item></>: null}
    </div>
  );
}
export default DetailPage;
const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};

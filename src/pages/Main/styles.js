import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  img{
    width: 400px;
  }

  button {
    background: #fff;
    font-weight: bold;
    font-size: 24px;
    height: 40px;
    width: 80px;
    border-radius: 4px;
    margin: 10px;
  }
`

export const Container = styled.div`
background: #999;
height: 350px;
width: 320px;
border-radius: 4px;
`

export const Header = styled.header`
display: flex;
flex-direction: center;
justify-content: center;
align-items: center;
background: #fff;
height: 25%;
border-radius: 4px 4px 0 0 ;

font-size: 24px;
font-weight: bold;
`

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 50%;
padding: 15px;

font-size: 18px;

span{
  padding: 4px;
  height: 33%;
}

.title {
  font-weight: bold;
}

.griDiv {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 30%;
}


`

export const Feature = styled.div`
display: flex;
flex-direction: center;
justify-content: center;
align-items: center;
height: 25%;

font-size: 18px;

`



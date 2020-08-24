import styled from 'styled-components';

//ciekawy motyw dzielim miejsc na 4/12 i 8/12
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 auto;
    justify-content: flex-end;
    padding: 50px;

     form {
         max-width: 400px;
         flex-basis: 0px;
         margin-top: 20px;
    }`

export const HeaderBar = styled.div`
    height: 5vh;
    max-width: 400px;
    width: 100%;
    background-color: #67C9C3;
    text-align: center;
    line-height: 5vh;
    color: white;
    font-size: 35px;`
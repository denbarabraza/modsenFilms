import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 602px) {
    width: 100%;
    grid-area: 2 / 1 / 3 / 3;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
`;
export const InputContainer = styled.div`
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const InputItem = styled.input`
  width: 400px;
  height: 100%;
  padding-left: 10px;
  transition: all 0.2s ease 0s;
  font-family: 'Rockwell Condensed', sans-serif;
  font-size: 16px;
  line-height: 16px;
  border: 1px solid #939292;

  &:focus {
    border: 1px solid #212121;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
`;
export const DelIcon = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
`;

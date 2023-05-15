import styled from 'styled-components';

export const ButtonItemSearch = styled.button`
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease 0s;

  &:hover {
    opacity: 0.9;
  }
`;
export const SearchIMG = styled.img`
  width: 15px;
  height: 15px;
`;
export const ButtonItemCategories = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#F17900' : '#E5E4E8')};
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  text-align: center;
  margin: 2px;
  padding: 5px 10px;
  font-family: 'Rockwell Condensed', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: none;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(-1px);
    background: #212121;
    color: #ffffff;
  }
`;
export const ButtonItemOther = styled.button`
  background-color: rgb(241, 121, 0);
  text-align: center;
  margin: 2px;
  padding: 5px 10px;
  cursor: pointer;
  font-family: 'Rockwell Condensed', sans-serif;
  border: none;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
  font-size: 18px;
  line-height: 22px;

  color: #212121;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(-1px);
    background: #e5e4e8;
  }
`;

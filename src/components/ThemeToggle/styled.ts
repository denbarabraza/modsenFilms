import styled from 'styled-components';

const flexEndCenter = `
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ToggleContainer = styled.div<{ open: boolean }>`
  ${flexEndCenter};

  @media (max-width: 602px) {
    display: ${({ open }) => (open ? flexEndCenter : 'none')};
  }
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  user-select: none;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleSlider = styled.span`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.toggleBackground};
  border: 1px solid ${props => props.theme.colors.toggleBorder};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.toggleCircle};
    top: 2px;
    left: 3px;
    transition: transform 0.2s ease-in-out;
  }

  ${ToggleInput}:checked + & {
    background-color: ${props => props.theme.colors.toggleBackgroundChecked};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(25px);
  }
`;

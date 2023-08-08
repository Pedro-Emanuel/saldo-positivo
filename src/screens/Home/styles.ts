import styled from 'styled-components/native';
import theme from '../../theme/index';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_700};
    align-items: center;
    justify-content: 'center';
`;


export const GroupCard = styled.View`
    flex-direction: row;
    padding: 0 8px;
`;

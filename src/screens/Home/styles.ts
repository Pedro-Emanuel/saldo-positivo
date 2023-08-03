import styled from 'styled-components/native';
import theme from '../../theme/index';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_700};
    align-items: center;
    justify-content: 'center';
`;

export const TopBar = styled.View`
    background-color: ${theme.COLORS.GRAY_500};
    width: 100%;
    height: 25%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    shadow-color: #000;
    elevation: 8;
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top:52px;
    margin-left: 32px;
`;

export const Image = styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 50px;
`;

export const Text = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-left: 16px;
`;
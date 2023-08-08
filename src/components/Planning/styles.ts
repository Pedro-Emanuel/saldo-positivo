import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import theme from "../../theme";
import { CaretRight } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
    width: 344px;
    height: 188px;

    background-color: ${theme.COLORS.GRAY_600};
    border-radius: 8px;

    margin-top: 16px;
    padding: 0 8px;

    shadow-color: #000000;
    elevation: 8;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
`;

export const Title = styled.Text`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
`;

export const ArrowIcon = styled(CaretRight).attrs(({ theme }) => ({ 
    size: 20,
    color: theme.COLORS.WHITE
}))`
    margin-top: 12px;
`;
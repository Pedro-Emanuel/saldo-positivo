import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { RFPercentage } from 'react-native-responsive-fontsize';
import theme from "../../theme";
import { CaretRight } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
    width: ${RFPercentage(52.12)}px;
    height: ${RFPercentage(28.48)}px;

    background-color: ${theme.COLORS.GRAY_600};
    border-radius: 16px;

    margin-top: ${RFPercentage(2.42)}px;
    padding: 0 ${RFPercentage(2.42)}px;

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
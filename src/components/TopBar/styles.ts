import { styled } from "styled-components/native";
import  theme from '../../theme/index';

import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { GearSix, Eye, CaretRight, CaretLeft } from "phosphor-react-native"; 

export const Container = styled.View`
    background-color: ${theme.COLORS.GRAY_500};
    width: 100%;
    height: ${RFPercentage(28.48)}px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    shadow-color: #000;
    elevation: 8;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    margin-top: 16px;
    justify-content: space-between;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 50px;
`;

export const UserName = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-left: 12px;
`;

export const SettingsIcon = styled(GearSix).attrs(({theme}) => ({
    size: 22,
    color: theme.COLORS.WHITE,
    weight: 'fill'
}))`
    margin-left: 16px;
`;

export const SettingsButton = styled(TouchableOpacity)`
`;

export const EyeIcon = styled(Eye).attrs(({theme}) => ({
    size: 22,
    color: theme.COLORS.WHITE,
    weight: 'fill'
}))`
    margin-left: 140px;
`;

export const EyeButton = styled(TouchableOpacity)`
`;

export const Month = styled.Text`
    font-size:${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
    margin-right: 24px;
    margin-left: 24px;
`;

export const ArrowButton = styled(TouchableOpacity)``;

export const ArrowRight = styled(CaretRight).attrs(({theme}) => ({
    size: 20,
    color: theme.COLORS.WHITE
}))``;

export const ArrowLeft = styled(CaretLeft).attrs(({theme}) => ({
    size: 20,
    color: theme.COLORS.WHITE
}))``;

export const Period = styled.View`
    align-items: center;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 109px;
    margin-right: 109px;
`;

export const GeneralBalance = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    margin-top: 8px;
`;

export const Balance = styled.View`
    align-items: flex-start;
    margin-left: 40px;
`;

export const Value = styled.Text`
    font-size: ${theme.FONT_SIZE.XLL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
`;

export const SubTitle = styled.Text`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
`;
import { styled } from "styled-components/native";
import  theme from '../../theme/index';

import { TouchableOpacity } from "react-native";

import { GearSix, Eye } from "phosphor-react-native"; 

export const Container = styled.View`
    background-color: ${theme.COLORS.GRAY_500};
    width: 100%;
    height: 25%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    shadow-color: #000;
    elevation: 8;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    margin-top: 38px;
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
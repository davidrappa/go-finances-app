import React from 'react'
import { View, Text, Image } from 'react-native'

import * as S from './styles'
import SocialButton from './SocialButton'
import LogoSvg from "../../../assets/LOGO.svg";
import GoogleSvg from "../../../assets/GOOGLE.svg";
import AppleSvg from "../../../assets/APPLE.svg";

import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize';

const LoginScreen = (): JSX.Element => {
	const navigation = useNavigation();
	return (
		<S.Container>
			<S.GoFinance>
				<LogoSvg width={RFValue(120)} height={RFValue(68)} />
				<S.Title>
					Controle suas
					finanças de forma
					muito simples
				</S.Title>
				<S.Subtitle>
					Faça seu login com
					uma das contas abaixo
				</S.Subtitle>
			</S.GoFinance>
			<S.SocialLogin>
				<SocialButton name='Entrar com Google' handleLoginSocial={() => { navigation.navigate('HomeScreen'); }} svg={GoogleSvg} />
				<SocialButton name='Entrar com Apple' handleLoginSocial={() => { }} svg={AppleSvg} />
			</S.SocialLogin>
		</S.Container>
	)
}

export default LoginScreen
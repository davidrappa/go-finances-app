import React from 'react'
import { View, Text, Image } from 'react-native'

import LOGO from '../../../assets/LOGO.png'
import * as S from './styles'

import SocialButton from './SocialButton'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = (): JSX.Element => {
	const navigation = useNavigation();
	return (
		<S.Container>
			<S.GoFinance>
				<Image source={LOGO} />
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
				<SocialButton name='Entrar com Google' handleLoginSocial={() => { navigation.navigate('HomeScreen') }} />
				<SocialButton name='Entrar com Apple' handleLoginSocial={() => { }} />
			</S.SocialLogin>
		</S.Container>
	)
}

export default LoginScreen
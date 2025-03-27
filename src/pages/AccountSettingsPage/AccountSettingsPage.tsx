import { Helmet } from 'react-helmet'

import { TestDiv } from './styled'

const AccountSettingsPage: React.FC = () => {
    return <>
        <Helmet>
            <title>
                Настройки аккаунта
            </title>
        </Helmet>


    <TestDiv>Настройки аккаунта</TestDiv>
    </>
}

export default AccountSettingsPage
import { Helmet } from 'react-helmet'

import { TestDiv } from './styled'

const HomePage: React.FC = () => {
    return <>
        <Helmet>
            <title>
                Главная
            </title>
        </Helmet>


    <TestDiv>Главная</TestDiv>
    </>
}

export default HomePage
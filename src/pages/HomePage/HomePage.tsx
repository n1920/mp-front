import { Helmet } from 'react-helmet'

import { PageWrapper } from 'App.styled'

const HomePage: React.FC = () => {
    return <>
        <Helmet>
            <title>
                Главная
            </title>
        </Helmet>


    <PageWrapper>
        <h1>Главная</h1>
    </PageWrapper>
    </>
}

export default HomePage
import { Helmet } from 'react-helmet'

import ProductCard from 'blocks/ProductCard'
import { dummyProducts } from 'pages/dummyProducts'
import { PageWrapper } from 'App.styled'
import {
    ProductGroup,
    ProductGroupContainer,
} from './styled'

const HomePage: React.FC = () => {
    return <>
        <Helmet>
            <title>
                Главная
            </title>
        </Helmet>


    <PageWrapper>
        <ProductGroup>
            <h2>Рекомендуемые</h2>

            <ProductGroupContainer>
                {dummyProducts.map((p) => (
                    <ProductCard
                        {...p}
                        key={p.id}
                        />
                ))}
            </ProductGroupContainer>
        </ProductGroup>
    </PageWrapper>
    </>
}

export default HomePage
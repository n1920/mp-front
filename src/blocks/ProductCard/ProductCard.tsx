import { Link } from 'react-router-dom'

import Button from 'components/Button'

import { ReactComponent as HeartEmpty } from './img/heart-empty.svg'
import { 
    Wrapper,
    LikeWrapper,
    Image,
    PriceWrapper,
    PriceRegular,
    PriceRegularWhenDiscounted,
    PriceDiscounted,
    Title,
    Desc 
} from './styled'

interface I_ProductDetails {
    id: number
    slug?: string
    imgSrc: string
    priceRegular: number
    priceDiscounted?: number
    title: string
    desc: string
    hideLikes?: boolean
}

const ProductCard: React.FC<I_ProductDetails> = ({
    id,
    slug,
    imgSrc,
    priceRegular,
    priceDiscounted,
    title,
    desc,
    hideLikes = false,
}) => {

return (
    <Wrapper>
        {!hideLikes && (
            <LikeWrapper
                data-product-id={id}
                >
                    <HeartEmpty />

            </LikeWrapper>
        )}
        <Link to={`/product/${slug || id}`}>
            <Image src={imgSrc} />
        </Link>

        <PriceWrapper>
            {Number.isInteger(priceDiscounted) ? <>
                <PriceDiscounted>{priceDiscounted} руб</PriceDiscounted>
                <PriceRegularWhenDiscounted>{priceRegular} руб</PriceRegularWhenDiscounted>
            </> :(
                <PriceRegular>{priceRegular} руб</PriceRegular>
            )}
        </PriceWrapper>

        <Title className='h4'>
            <Link to={`/product/${slug || id }`}>
                {title}
            </Link>
        </Title>

        <Desc>{desc}</Desc>

        <Button>В корзину</Button>
    </Wrapper>
)    
}

export default ProductCard
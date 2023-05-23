import {Container} from "../../components/Container";
import {useProductsStore} from "../../store/products";
import {ProductItem} from "../../components/ProductItem";
import {NoContent} from "../../components/NoContent";

export const Lovely = () => {
    const {lovely} = useProductsStore()

    return (
        <Container>
            <div className='w-full flex flex-wrap justify-center gap-5 pt-8 pb-7 products'>
                {lovely?.length > 0 ? lovely?.map((i: any) => (
                    <ProductItem id={i.id} key={i.id} name={i.name} price={i.price} currency={i.currency}
                                 image={i.image}/>
                )) : (
                    <NoContent/>
                )}
            </div>
        </Container>
    )
}
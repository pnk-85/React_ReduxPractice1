import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_Product = [
  {id : 'p1', price:6, title:'my book', description:'my first ever book'},
  {id : 'p2', price:12, title:'my second book', description:'my super second book'},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_Product.map ((product) =>(
          <ProductItem
          key = {product.id}
          id ={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;

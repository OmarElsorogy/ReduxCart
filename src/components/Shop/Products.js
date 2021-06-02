import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 56.99,
    title: "Eloquent JavaScript",
    description:
      "This is a book about JavaScript, programming, and the wonders of the digital.",
  },
  {
    id: "p2",
    price: 42.99,
    title: "You Don't Know JS: Scope & Closures",
    description:
      "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language.",
  },
  {
    id: "p3",
    price: 49.99,
    title: "Learn JavaScript VISUALLY with Interactive Exercises",
    description:
      "It's a beautifully illustrated full-color JavaScript book that teaches the basics through Metaphors, Analogies and Easy Interactive Exercises (Works on PC, Mac, iPad, other tablets",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
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

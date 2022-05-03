import "./directory.styles.scss";
import CategoryIitem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryIitem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;

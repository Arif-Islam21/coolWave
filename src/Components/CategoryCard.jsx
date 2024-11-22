const CategoryCard = ({ item }) => {
  const { imageUrl, cate } = item;
  return (
    <div className="card bg-base-100 transform hover:scale-105 duration-500 hover:bg-amber-500 transition-transform shadow-xl">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <h2 className="text-2xl font-bold text-center my-4">{cate}</h2>
    </div>
  );
};

export default CategoryCard;

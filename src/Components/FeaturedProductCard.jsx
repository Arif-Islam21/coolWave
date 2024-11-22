const FeaturedProductCard = ({ item }) => {
  const { imageUrl, title, description } = item;
  return (
    <div className="card bg-base-100 min-h-[60vh] mb-8 shadow-xl">
      <figure>
        <img src={imageUrl} alt="Featured Product Card" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </h2>
        <p>
          {description.length > 40
            ? description.slice(0, 40) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral btn-block btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;

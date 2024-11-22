import CategoryCard from "../../Components/CategoryCard";
import SectionTitle from "../../Components/SectionTitle";

const Categories = () => {
  const images = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1524711212733-10ef1b0bec75?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cate: "Smartphones",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cate: "Smartwatches",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cate: "Laptops",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cate: "Headphones",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cate: "Home Devices",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cate: "Power Banks",
    },
  ];

  return (
    <div className="container mx-auto my-6">
      <SectionTitle
        title="Categories"
        description="Our favourite Categories goes here"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images?.map((item, idx) => (
          <CategoryCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

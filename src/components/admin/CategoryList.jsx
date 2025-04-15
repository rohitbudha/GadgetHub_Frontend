
const CategoryList = () => {
    const categories = [
      {
        id: 1,
        name: 'Earbuds',
        description: 'Latest gadgets and electronic devices.',
        imageUrl: 'https://res.cloudinary.com/dgcgqy5as/image/upload/v1744021023/xt9yu3rxuzpmmueg8h9m.webp',
      },
      {
        id: 2,
        name: 'Laptops',
        description: 'Stylish and comfortable furniture for your home.',
        imageUrl: 'https://res.cloudinary.com/dgcgqy5as/image/upload/v1744037287/lcbh3iqglwjfycv9h9cf.webp',
      },
      {
        id: 3,
        name: 'Smartphones',
        description: 'Trendy clothing and accessories for all.',
        imageUrl: 'https://res.cloudinary.com/dgcgqy5as/image/upload/v1743943556/uxbqtspsw1varpabqduh.webp',
      },
      {
        id: 4,
        name: 'Headphones',
        description: 'A wide range of books for all ages.',
        imageUrl: 'https://res.cloudinary.com/dgcgqy5as/image/upload/v1744037014/swbfmc9xan78gte6ccbv.webp',
      },
    ];
  
    return (
      <div className="ml-72 p-6 w-full">
        <h2 className="text-2xl font-semibold mb-4">Category List</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">S.N</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{cat.name}</td>
                <td className="border px-4 py-2">{cat.description}</td>
                <td className="border px-4 py-2">
                  <img src={cat.imageUrl} alt={cat.name} className="w-24 h-16 object-cover" />
                </td>
                <td className="border px-4 py-2 whitespace-nowrap space-x-2">
                  <a href="#" className="text-blue-500 hover:underline">Edit</a>
                  <a href="#" className="text-red-500 hover:underline">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CategoryList;

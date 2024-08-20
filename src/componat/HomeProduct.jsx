import React, { useContext, useEffect, useState } from 'react';
import FreaturedProItem from './slick/FreaturedProItem';
import LeatestPro from './LeatestPro';
import { apiData } from './ContextApi';

const HomeProduct = () => {
  const Data = useContext(apiData);
  const [category, setCategory] = useState([]);
  const [Cateadd, setCateadd] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [ allcate , setallcate ] = useState(false)
  const [ allshow , setallshow ] = useState([])
  useEffect(() => {
    setCategory([...new Set(Data.map((item) => item.category))]);
  }, [Data]);

  let handleCateAll = () =>{
    setallcate(true)
    setallshow(Data)
    setCateadd('')
    setSelectedIndex('')
  }
  const handleCate = (citem, index) => {
    const categoryFilter = Data.filter((item) => item.category === citem);
    setCateadd(categoryFilter);
    setSelectedIndex(index);
    setallcate(false)
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="Featured py-[60px]">
          <h2 className='text-[38px] font-[700] flex justify-center'>Featured Products</h2>
          <FreaturedProItem Data={Data} />
        </div>
        <div className="Featured py-[60px]">
          <h2 className='text-[38px] font-[700] flex justify-center'>Latest Products</h2>
          <ul className="my-[30px] flex items-center justify-between w-[50%] mx-auto">
            <li 
            onClick={handleCateAll}
            className={`text-[18px] font-[600] cursor-pointer ${
              allcate === true
                ? 'text-[#FB2E86] underline'
                : 'text-[#151875] hover:text-[#FB2E86] hover:underline'
            }`}
            >All</li>
            {category.map((item, index) => (
              <li
                key={item} // Use a unique value if possible
                onClick={() => handleCate(item, index)}
                className={`text-[18px] font-[600] cursor-pointer ${
                  selectedIndex === index
                    ? 'text-[#FB2E86] underline'
                    : 'text-[#151875] hover:text-[#FB2E86] hover:underline'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <LeatestPro allshow={allshow}  Cateadd={Cateadd} Data={Data} />
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;

import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from './ShopCard';


const ShopCategory = () => {
    const [toyCategory, setToyCategory] = useState([]);
    //const [toySubCategory, setSubToyCategory] = useState([]);
    const [toy, setToy] = useState([]);
    
    const [arrangeCategory, setArrangeCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);

    useEffect(() => {
        fetch(`https://toys-server-side.vercel.app/toyCategory`)
            .then(res => res.json())
            .then(data => setToyCategory(data))
    }, []);

    useEffect(() => {
        fetch(`https://toys-server-side.vercel.app/toySubCategory`)
            .then(res => res.json())
            .then(data => {
                const arrangeAllCategory = arrangeCategoryValue(data);
                setArrangeCategory(arrangeAllCategory);
            })
    }, []);

    useEffect(() => {
        fetch(`https://toys-server-side.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                // const show = showSubCategory(data);
                setToy(data);
                setSelectedCategory(data.slice(0,3))
            })
    }, [])


    const arrangeCategoryValue = (toySubCategory) => {
        const result = [];

        toySubCategory.reduce((acc, obj) => {
            if (!acc[obj.categoryId]) {
                acc[obj.categoryId] = [];
                result.push(acc[obj.categoryId]);
            }
            acc[obj.categoryId].push(obj);
            return acc;
        }, {});

        return result;
    }

    // const showSubCategory = (toys) => {
    //     const result = [];

    //     toys.reduce((acc, obj) => {
    //         if (!acc[obj.subCategoryId]) {
    //             acc[obj.subCategoryId] = [];
    //             result.push(acc[obj.subCategoryId]);
    //         }
    //         acc[obj.subCategoryId].push(obj);
    //         return acc;
    //     }, {});

    //     return result;
    // }

    // const arrangeAllCategory = arrangeCategoryValue(toySubCategory);
    //setArrangeCategory(arrangeAllCategory);
    // console.log(arrangeCategory);


    // console.log(toy.length);
    // console.log(toy);

    //const defaultToy = toy.slice(0, 3);
    
    const handleSelectedToy = subCategoryId => {
        //console.log(subCategoryId);
        fetch(`https://toys-server-side.vercel.app/toys/${subCategoryId}`)
            .then(res => res.json())
            .then(data => setSelectedCategory(data));
    }
    //console.log(toy);
    //console.log(defaultToy)
   // console.log("sc", selectedCategory);


    return (

        <div className='bg-[#e5e1e1] py-20'>
            <h2 className='text-3xl font-bold text-center mb-8'>Shop By Category</h2>
            <div className='bg-gray-100 w-3/4 mx-auto py-5 rounded  px-5'>
                

                <div className=''>
                    <Tabs forceRenderTabPanel defaultIndex={1} className=" mt-1">
                        <TabList>
                            {
                                toyCategory.map(c => <Tab key={c._id}>{c.categoryName}</Tab>)
                            }

                        </TabList>
                        {
                            arrangeCategory.map(inner => <TabPanel key={inner.index}>
                                <Tabs forceRenderTabPanel>
                                    <TabList>
                                        {
                                            inner.map(c => <Tab
                                                key={c._id}
                                                onClick={() => handleSelectedToy(c.subCategoryId)}
                                                >
                                                {c.subCategoryName}
                                                </Tab>)
                                        }
                                    </TabList>
                                    {
                                        inner.map(c => <TabPanel
                                            key={c._id}>
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2'>
                                                {
                                                    selectedCategory.map(sc => <ShopCard
                                                        key={sc._id}
                                                        sc={sc}>
                                                    </ShopCard>)
                                                }
                                            </div>
                                        </TabPanel>)
                                    }
                                </Tabs>
                            </TabPanel>)
                        }
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;
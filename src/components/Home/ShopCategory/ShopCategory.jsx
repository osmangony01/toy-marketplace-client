import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from './shopCard';


const ShopCategory = () => {
    const [toyCategory, setToyCategory] = useState([]);
    const [toySubCategory, setSubToyCategory] = useState([]);
    const [toy, setToy] = useState([]);

    const [arrangeCategory, setArrangeCategory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toyCategory`)
            .then(res => res.json())
            .then(data => setToyCategory(data))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/toySubCategory`)
            .then(res => res.json())
            .then(data => {
                const arrangeAllCategory = arrangeCategoryValue(data);
                setArrangeCategory(arrangeAllCategory);
            })
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
            .then(res => res.json())
            .then(data => {
                // const show = showSubCategory(data);
                setToy(data);
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

    const showSubCategory = (toys) => {
        const result = [];

        toys.reduce((acc, obj) => {
            if (!acc[obj.subCategoryId]) {
                acc[obj.subCategoryId] = [];
                result.push(acc[obj.subCategoryId]);
            }
            acc[obj.subCategoryId].push(obj);
            return acc;
        }, {});

        return result;
    }

    // const arrangeAllCategory = arrangeCategoryValue(toySubCategory);
    //setArrangeCategory(arrangeAllCategory);
    console.log(arrangeCategory);


    console.log(toy.length);
    console.log(toy);

    const defaultToy = toy.slice(0, 3);
    const [selectedCategory, setSelectedCategory] = useState(defaultToy);
    const handleSelectedToy = subCategoryId => {
        console.log(subCategoryId);
        fetch(`http://localhost:5000/toys/${subCategoryId}`)
            .then(res => res.json())
            .then(data => setSelectedCategory(data));
    }
    console.log(selectedCategory);


    return (

        <div className='bg-[#e5e1e1] py-20'>
            <h2 className='text-3xl font-bold text-center mb-8'>Shop By Category</h2>
            <div className='bg-gray-100 w-3/4 mx-auto py-5 rounded  px-5'>
                {/* <Tabs forceRenderTabPanel defaultIndex={1} >
                    <TabList>
                        <Tab>The Simpsons</Tab>
                        <Tab>Futurama</Tab>
                    </TabList>

                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab>Homer Simpson</Tab>
                                <Tab>Marge Simpson</Tab>
                                <Tab>Bart Simpson</Tab>
                                <Tab>Lisa Simpson</Tab>
                                <Tab>Maggie Simpson</Tab>
                            </TabList>
                            <TabPanel>
                                <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png" alt="Homer Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab>Philip J. Fry</Tab>
                                <Tab>Turanga Leela</Tab>
                                <Tab>Bender Bending Rodriguez</Tab>
                                <Tab>Amy Wong</Tab>
                                <Tab>Professor Hubert J. Farnsworth</Tab>
                                <Tab>Doctor John Zoidberg</Tab>
                            </TabList>
                            <TabPanel>
                                 <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" /> 
                            </TabPanel> 
                            <TabPanel>
                                <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                            </TabPanel>
                            <TabPanel>
                                <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry's best friend. Built in Tijuana, Mexico, he is the Planet Express Ship's cook.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
                            </TabPanel>
                            <TabPanel>
                                <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png" alt="Professor Hubert J. Farnsworth" />
                            </TabPanel>
                            <TabPanel>
                                <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                </Tabs> */}

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
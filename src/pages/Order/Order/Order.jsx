import { useState } from 'react';
// import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['Gaming', 'Side', 'Lounge', 'Rocking'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const gaming = menu.filter(item => item.category === 'Gaming');
    const side = menu.filter(item => item.category === 'Side');
    const lounge = menu.filter(item => item.category === 'Lounge');
    const rocking = menu.filter(item => item.category === 'Rocking');

    const orderCoverImg = 'https://aceofficesystems.com/cdn/shop/files/Zone-Too_Highlight-1.jpg?v=1692898448&width=1167'

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="FURNIFLEX"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Gaming</Tab>
                    <Tab>Side</Tab>
                    <Tab>Lounge</Tab>
                    <Tab>Rocking</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={gaming}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={side}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={lounge}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={rocking}></OrderTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;
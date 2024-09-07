import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    // Define image URLs for each category
    const categoryImages = {
        Gaming: 'https://t3.ftcdn.net/jpg/07/20/77/32/360_F_720773238_2AHbe2VcA3gBxllX67sN5SjN6nDuiwEl.jpg',
        Side: 'https://img.freepik.com/premium-photo/set-colored-modern-ergonomic-office-chairs-stand-row-near-black-wall-store-copy-space_217690-348.jpg',
        Lounge: 'https://www.ki.com/contentassets/57567082e6af4634af9b8da04d7aaeda/gladly-lounge-chair-banner-image-module-update.jpg',
        Rocking: 'https://png.pngtree.com/thumb_back/fw800/background/20240618/pngtree-rocking-chair-and-table-against-the-wall-interior-inside-image_15797547.jpg',
        Offered: 'https://static.vecteezy.com/system/resources/thumbnails/008/683/294/small_2x/interior-design-concept-sale-of-home-decorations-and-furniture-during-promotions-and-discounts-it-is-surrounded-by-beds-sofas-armchairs-and-advertising-spaces-banner-pastel-background-3d-render-photo.jpg'
    };

    const [menu] = useMenu();

    // Filter menu items by category
    const categories = ['Gaming', 'Side', 'Lounge', 'Rocking', 'Offered'];
    const menuItemsByCategory = categories.reduce((acc, category) => {
        acc[category] = menu.filter(item => item.category === category);
        return acc;
    }, {});

    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img='https://static.vecteezy.com/system/resources/thumbnails/008/683/294/small_2x/interior-design-concept-sale-of-home-decorations-and-furniture-during-promotions-and-discounts-it-is-surrounded-by-beds-sofas-armchairs-and-advertising-spaces-banner-pastel-background-3d-render-photo.jpg' title="Our Menu" />
            {/* Main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
            {/* Offered menu items */}
            <MenuCategory items={menuItemsByCategory['Offered']} title="Today's Offer" img={categoryImages['Offered']} />
            {/* Menu items by category */}
            {categories.filter(category => category !== 'Offered').map(category => (
                <MenuCategory
                    key={category}
                    items={menuItemsByCategory[category]}
                    title={category}
                    img={categoryImages[category]}
                />
            ))}
        </div>
    );
};

export default Menu;

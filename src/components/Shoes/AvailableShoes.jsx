import Card from '../UI/Card';
import ShoesItem from './ShoesItem/ShoesItem'
import classes from './AvailableShoes.module.css'
const DUMMY_SHOES = [
    {
        id: 's1',
        name: 'NIKE',
        description: 'Finest fish and veggies',
        price: 50.99,
    },
    {
        id: 's2',
        name: 'Adidas',
        description: 'A german specialty!',
        price: 110.5,
    },
    {
        id: 's3',
        name: 'GUCCI',
        description: 'American, raw, meaty',
        price: 80.99,
    },
    {
        id: 's4',
        name: 'SERVICE',
        description: 'Healthy...and green...',
        price: 90.99,
    },
];

const AvailableShoes = () => {
    const MealsList = DUMMY_SHOES.map((shoe) => (
        <ShoesItem
            key={shoe.id}
            name={shoe.name}
            description={shoe.description}
            price={shoe.price}
        />
    ))
    return (
        <section className={classes.shoes}>
            <Card>
                <ul>{MealsList}</ul>
            </Card>
        </section>
    );
};
export default AvailableShoes;
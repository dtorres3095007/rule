import { render, screen, cleanup} from '@testing-library/react'
import Card from './Card'
import {getPercentage} from '../assets/js/General'
import kanye_card from '../assets/img/kanye_card.png'

afterEach(()=> {
     cleanup();
});

test('Should render completed Card', () => {
    let data = {
        id : 1,
        name : "Damian Torres",
        description : "Ingeniero de sistemas",
        category : "environment",
        picture : {kanye_card},
        picture_card : {kanye_card},
        lastUpdated : "2021-02-26T23:44:50.326Z",
        votes : {
            positive : 50,
            negative : 50
        }
    }
    let {id,name,description,category,picture,picture_card,lastUpdated,votes} = data;

    render(
    <Card
        id = {id}
        name = {name}
        description = {description}
        category = {category}
        picture = {picture}
        picture_card = {picture_card}
        lastUpdated = {lastUpdated}
        votes = {votes}
    />
    );
    // let percetage = getPercentage(votes,'like');
    const todoElemnt = screen.getByTestId('card-1');
    expect(todoElemnt).toBeInTheDocument();
    // expect(todoElemnt).toHaveTextContent('Damian Torres');
    // expect(todoElemnt).toHaveTextContent(`${percetage.positive}%`);
    // expect(todoElemnt).toHaveTextContent(`${percetage.negative}%`);
});

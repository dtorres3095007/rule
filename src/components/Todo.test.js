import { render, screen, cleanup} from '@testing-library/react'
import Todo from './Todo'

afterEach(()=> {
     cleanup();
});

test('Should render non-completed todo', () => {
    const todo =    {id : 1, title : 'Wash dishes', completed : false};
    render(<Todo todo={todo}/>);
    const todoElemnt = screen.getByTestId('todo-1');
    expect(todoElemnt).toBeInTheDocument();
    expect(todoElemnt).toHaveTextContent('Wash dishes');
    expect(todoElemnt).not.toMatchSnapshot('<strike>');
});

test('Should render completed todo', () => {
    const todo =    {id : 2, title : 'Wash car', completed : true};
    render(<Todo todo={todo}/>);
    const todoElemnt = screen.getByTestId('todo-2');
    expect(todoElemnt).toBeInTheDocument();
    expect(todoElemnt).toHaveTextContent('Wash car');
    expect(todoElemnt).toMatchSnapshot('<strike>');
});
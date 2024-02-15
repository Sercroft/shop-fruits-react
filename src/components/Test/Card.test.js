import React from 'react';
import { render, screen } from '@testing-library/react';
import CardView from '../Generics/Card';

const fruitMock = {
  "name": "Apple",
  "price": "1.99",
  "quantity_available": "0",
  "price_per_kg": "2.99",
  "origin": "United States",
  "color_fruit": "Red",
  "image": "https://img.freepik.com/free-psd/3d-rendering-delicious-apple_23-2149929526.jpg?w=740&t=st=1707974853~exp=1707975453~hmac=161d6cfd4a92d62a382a990485033c10e688d4af9f3880c2e42fcced11e87206"
};

describe('CardView', () => {
  it('renders correctly with fruit data', () => {
    render(<CardView fruit={fruitMock} />);
    
    expect(screen.getByAltText(fruitMock.name)).toBeInTheDocument();
    expect(screen.getByText(`$ ${fruitMock.price}`)).toBeInTheDocument();
    expect(screen.getByText(`${fruitMock.quantity_available} units`)).toBeInTheDocument();
  });

  it('displays "Sold out" when quantity available is 0', () => {
    render(<CardView fruit={fruitMock} />);
    
    expect(screen.getByText('Sold out')).toBeInTheDocument();
  });

  it('displays "Available" when quantity available is greater than 0', () => {
    const fruitWithStock = { ...fruitMock, quantity_available: "5" };
    render(<CardView fruit={fruitWithStock} />);
    
    expect(screen.getByText('Available')).toBeInTheDocument();
  });
});

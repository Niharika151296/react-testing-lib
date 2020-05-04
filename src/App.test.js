import React from 'react';
import { render , within } from '@testing-library/react';
import App from './App';
import sum from './utilFunc/Sum';
import stringConcat from './utilFunc/StringConcat';
import empFilter from './utilFunc/EmployeeFilter';
 
let emp=[
  {
      id:1,
      name:'Niharika',
      department:'CSE'
  },
  {
      id:2,
      name:'Riya',
      department:'IT'
  }
]

describe('Testing utility function', () => {
  it('testing sum func', () => {
    expect(sum(3,6)).toBe(9);
  });

  it('testing concat func', () => {
    expect(stringConcat("Niharika","Kumari")).toBe("NiharikaKumari");
  });

  it('testing concat func', () => {
    expect(empFilter(emp,'IT')).toStrictEqual([{id:2,name:'Riya',department:'IT'}]);
  });
});

describe('App component is rendered correctly',()=>{
  it('App component contains instance of another component', () => {
    const { getByTestId } = render(<App/>);
    const app = getByTestId('app');
    const list = within(app).getAllByTestId('btn1');
    expect(list.length).toBe(1);
  });
})



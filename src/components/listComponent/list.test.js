import React from 'react';
import { render,  fireEvent } from '@testing-library/react';
import ListComponent from './listComponent';
import axios from 'axios';

jest.mock("axios", () => {
  return {
    get: jest.fn(() =>
      Promise.resolve({
        data: {
          data: 
           [
             {
              "id":"1",
              "employee_name":"Tiger Nixon",
              "employee_salary":"320800",
              "employee_age":"61",
              "profile_image":""
           },
           {
            "id":"2",
            "employee_name":"Niharika Sinha",
            "employee_salary":"100000",
            "employee_age":"23",
            "profile_image":""
           }]          
        }
      })
    )
  };
});

describe('list component testing', () => {
  it('renders without error', () => {
   const { getByTestId } = render(<ListComponent/>);
   const button = getByTestId("btn1");
  expect(button).toBeInTheDocument();
  });// button with id btn1 exists

  it('has the initial state msg is false', () => {
    const { getByTestId } = render(<ListComponent />);
    const paragraph = getByTestId("p1");
    expect(paragraph).toHaveTextContent("")
    }); //initial no text content before button is clicked

  it('the second button is disabled', () => {
      const {getByTestId} = render(<ListComponent />);
      const button2  = getByTestId('btn2');
      expect(button2).toBeDisabled()
    }); //second button is disabled before button is clicked

  it('text change when button is clicked', () => {
    const { getByTestId } = render(<ListComponent />);
    const button = getByTestId('btn1');
    fireEvent.click(button)
    expect(getByTestId('p1')).toHaveTextContent('Welcome')    
   }) //fireevent, and the text changes

  it('button enabled when button is clicked',()=> {
      const {getByTestId} = render(<ListComponent />);
      const button = getByTestId('btn1');
       fireEvent.click(button) 
      expect(getByTestId('btn2')).not.toBeDisabled()
  }); //1st button clicks enable the 2nd button

  it('button enabled when button is clicked',()=> {
    const {getByTestId} = render(<ListComponent />);
    const button = getByTestId('btn1');
     fireEvent.click(button) 
    expect(getByTestId('btn2')).not.toBeDisabled()
    const button2=getByTestId('btn2');
    fireEvent.click(button2)
}); //1st button clicks enable the 2nd button and makes it clickable

  it('input change changes value',() =>{   
     const {getByLabelText} = render(<ListComponent />);
     const input = getByLabelText('inputname')
     fireEvent.change(input, { target: { value: 'Niharika' } })
     expect(input.value).toBe('Niharika')
   })//value of input changes when change event is triggered

  it('input change changes para content',() =>{
     const {getByLabelText,getByTestId} = render(<ListComponent />);
     const input = getByLabelText('inputname')
     fireEvent.change(input, { target: { value: 'Niharika' } })
     expect(getByTestId('inputPara')).toHaveTextContent('Niharika')    
   }) //paragraph content changes according to change event

    it("api with url is called", async () => {
      const wrapper = render(<ListComponent />);
      const result =
        "http://dummy.restapiexample.com/api/v1/employees";
      expect(axios.get).toHaveBeenLastCalledWith(result);
    }); //api is called

    it("status originally is loading",  () => {
      const wrapper = render(<ListComponent />);
      const statusDiv=  wrapper.getByTestId("status");
      expect(statusDiv).toHaveTextContent("Loading");    
    }); // status originally is loading

    it("status changes to done after api call", async () => {
      const wrapper = render(<ListComponent />);
      const statusDiv= await wrapper.getByTestId("status");
      expect(statusDiv).toHaveTextContent("Done");     
    }); // status changes to done after api call

    it("api returns two lists", async () => {
      const wrapper = render(<ListComponent />);
      const list= await wrapper.findAllByTestId("listView");
      expect(list.length).toBe(2);     
    }); // list with size 2 is rendered

    it("1st list name is Tiger ", async () => {
      const {findAllByTestId} = render(<ListComponent />);
      const list= await findAllByTestId("nameList");
      expect(list[0]).toHaveTextContent("Name: Tiger Nixon")
   }); // 1st list item name is Tiger

   

})

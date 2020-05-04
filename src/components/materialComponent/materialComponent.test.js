import React from 'react';
import { render,  fireEvent , waitForElement, cleanup,findAllByTestId, getAllByTestId} from '@testing-library/react';
import MaterialComponent from './materialComponent';
import UserEvent from "@testing-library/user-event";


describe('material component testing', () => {

  afterEach(() => {
    cleanup();
  });
  it('renders without error', () => {
   const { getByTestId } = render(<MaterialComponent/>);
   const label = getByTestId("labelAge");
   expect(label).toBeInTheDocument();
  });// button with id btn1 exists

   it('select change changes value', async ()=>{   
      const changeHandler = jest.fn().mockImplementation(() => {
        console.log("changeHandler mock triggered");
      });
      let {
        getByText,
        getByTestId,
        getByRole,
        container
      } = render(<MaterialComponent onChange={changeHandler} />);
      const selectNode = getByTestId("select");
      const selectButton = getByRole("button");
      expect(selectButton).not.toBeNull();
      expect(selectNode).not.toBeNull();
      UserEvent.click(selectButton);
       await waitForElement(() => getByText("Thirty"), { container });
       const itemClickable = getByText("Thirty");
       UserEvent.click(itemClickable);
       expect(selectNode.value).toBe("30")
      const ageNode = getByTestId("age");
      expect(ageNode).toHaveTextContent(30);
    });

    it('no of options', async ()=>{   
      const changeHandler = jest.fn().mockImplementation(() => {
        console.log("changeHandler mock triggered");
      });
      let {
        getByTestId,
        getByRole,
        getAllByTestId,
        container
      } = render(<MaterialComponent onChange={changeHandler} />);
         const selectNode = getByTestId("select");
         const selectButton = getByRole("button");
         expect(selectButton).not.toBeNull();
         expect(selectNode).not.toBeNull();
         UserEvent.click(selectButton);
         await waitForElement(() => getAllByTestId("option"), { container });
         const items = getAllByTestId("option");
         expect(items.length).toBe(4);
      })
           
});
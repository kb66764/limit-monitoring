import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { TraderListElement } from "../../src/components/trader/TraderListElement";

// unit tests for the TraderListElement component
describe('TraderListElement component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {
        id: 1,
        trader: {
          id: 1,
          deskid: 1,
          tradername: 'John',
          job: 'CEO',
        },
        trades: [
          {
            id: 1,
            traderid: 1,
            amount: 200,
          },
          {
            id: 2,
            traderid: 1,
            amount: 400,
          }
        ],
        desks: [{id: 1}],
      }
      const wrapper = shallow(<TraderListElement {...props} />);
      assert.equal(wrapper.find('td').length, 7);
      assert.equal(wrapper.find('Button').length, 1);
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { TraderList } from "../../src/components/trader/TraderList";

// unit tests for the TraderList component
describe('TraderList component', () => {
  describe('render()', () => {
    it('should render the nothing', () => {
      const props = {
        page: 1,
        traders: [],
        desks: [],
        dispatch: () => {
        },
      }
      const wrapper = shallow(<TraderList {...props} />);
      assert.equal(wrapper.find('div').length, 0);
    });

    it('should render the traders list', () => {
      const props = {
        page: 1,
        traders: [
          {
            id: 1,
            tradername: 'John',
            job: 'CEO',
          }
        ],
        desks: [1, 2],
      }
      const wrapper = shallow(<TraderList {...props} />);
      assert.equal(wrapper.find('Table').length, 1);
      assert.equal(wrapper.find('Pagination').length, 1);
    });
  });
});

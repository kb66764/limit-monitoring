import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { TraderEdit } from "../../src/components/trader/TraderEdit";

// unit tests for the TraderEdit component
describe('TraderEdit component', () => {
  describe('render()', () => {
    it('should render the add trader form', () => {
      const props = {
        trader: {
          id: 0,
        },
        initialValues: {
          id: 0,
        },
        handleSubmit: () => {
        },
        invalid: true,
        submitting: false,
      }
      const wrapper = shallow(<TraderEdit {...props} />);
      assert.equal(wrapper.find('.page-trader-edit').length, 1);
      assert.equal(wrapper.find('PageHeader').children().text(), 'Trader add');
    });

    it('should render the edit trader form', () => {
      const props = {
        trader: {
          id: 1,
        },
        initialValues: {
          id: 1,
        },
        handleSubmit: () => {
        },
        invalid: false,
        submitting: false,
      }
      const wrapper = shallow(<TraderEdit {...props} />);
      assert.equal(wrapper.find('.page-trader-edit').length, 1);
      assert.equal(wrapper.find('PageHeader').children().text(), 'Trader edit');
    });
  });
});

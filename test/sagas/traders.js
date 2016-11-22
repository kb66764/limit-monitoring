import { call, put } from "redux-saga/effects";
import assert from "assert";
import { tradersFetchList, tradersAddEdit} from "../../src/sagas/traders";
import ApiTraders from "../../src/api/traders";

// unit tests for the traders saga
describe('Traders saga', () => {
  describe('tradersFetchList()', () => {
    const generator = tradersFetchList();
    it('should return the ApiTraders.getList call', () => {
      assert.deepEqual(generator.next().value, call(ApiTraders.getList));
    });
    it('should return the TRADERS_LIST_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'TRADERS_LIST_SAVE', traders: undefined}));
    });
    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('tradersAddEdit() - add', () => {
    const generator = tradersAddEdit({
      trader: {}, callbackSuccess: () => {
      }
    });
    it('should return the ApiTraders.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiTraders.addEdit));
    });
    it('should return the TRADERS_ADD_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'TRADERS_ADD_SAVE', trader: {}}));
    });
    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('tradersAddEdit() - edit', () => {
    const generator = tradersAddEdit({
      trader: {id: 1}, callbackSuccess: () => {
      }
    });
    it('should return the ApiTraders.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiTraders.addEdit));
    });
    it('should return the TRADERS_EDIT_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'TRADERS_EDIT_SAVE', trader: {id: 1}}));
    });
    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

});

import assert from "assert";
import traders from "../../src/reducers/traders";

// unit tests for the traders reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe('Traders reducer', () => {
  describe('TRADERS_LIST_SAVE', () => {
    it('should return a list of traders', () => {
      assert.deepEqual(
        traders({}, {
          type: 'TRADERS_LIST_SAVE',
          traders: [{
            id: 1,
            tradername: 'Some name',
            limit: 200,
          }],
        }), [{
          id: 1,
          tradername: 'Some name',
          limit: 200,
        }]
      );
    });
  });

  describe('TRADERS_ADD_SAVE', () => {
    it('should return a new trader array element', () => {
      assert.deepEqual(
        traders([{
          id: 1,
          tradername: 'Some name',
          limit: 100,
        }], {
          type: 'TRADERS_ADD_SAVE',
          trader: {
            id: 2,
            tradername: 'Other name',
            limit: 200,
          },
        }), [{
          id: 1,
          tradername: 'Some name',
          limit: 100,
        }, {
          id: 2,
          tradername: 'Other name',
          limit: 200,
        }]
      );
    });
  });

  describe('TRADERS_EDIT_SAVE', () => {
    it('should return an edited trader array element', () => {
      assert.deepEqual(
        traders([{
          id: 1,
          tradername: 'Some name',
          limit: 200,
        }, {
          id: 2,
          tradername: 'Other name',
          limit: 300,
        }], {
          type: 'TRADERS_EDIT_SAVE',
          trader: {
            id: 2,
            tradername: 'Changed name',
            limit: 500,
          },
        }), [{
          id: 1,
          tradername: 'Some name',
          limit: 200,
        }, {
          id: 2,
          tradername: 'Changed name',
          limit: 500,
        }]
      );
    });
  });
});

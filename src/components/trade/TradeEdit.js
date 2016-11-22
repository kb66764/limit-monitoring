import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { FormControl, HelpBlock, Row, Col } from "react-bootstrap";

// Trade add/edit page component
export class TradeEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {trade, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-trade-edit">
        <PageHeader>{'Trade ' + (trade.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="traderid" label="Trader Id" disabled="disabled" type="text" />
          <Field component={FormField} name="type" label="Trade Type" validate={true} />
          <Field component={FormField} name="amount" label="Amount"/>
          <Field component={FormField} name="counterparty" label="Counterparty"/>
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
            buttonSave="Save Trade"/>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'TRADES_ADD_EDIT',
        trade: {
          id: values.id || 0,
          traderid: Number(values.traderid),
          type: values.type,
          amount: Number(values.amount),
          counterparty: values.counterparty,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/trades'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const TradeEditForm = reduxForm({
  form: 'trade_edit',
  validate: function (values) {
    const errors = {};
    if (!values.tradename) {
      errors.tradename = 'Tradename is required';
    }
    return errors;
  },
})(TradeEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  let trade = state.trades.find(x => Number(x.id) === Number(own_props.params.id)) || {traderid: state.login.traderid};

  return {
    trade: trade,
    initialValues: trade,
  };
}
export default connect(mapStateToProps)(TradeEditForm);

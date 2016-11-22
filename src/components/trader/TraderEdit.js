import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";

// Trader add/edit page component
export class TraderEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {trader, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-trader-edit">
        <PageHeader>{'Trader ' + (trader.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="tradername" label="Tradername" validate={true}/>
          <Field component={FormField} name="limit" label="Limit"/>
          <Field component={FormField} name="deskid" label="Desk" />
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
            buttonSave="Save Trader"/>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'TRADERS_ADD_EDIT',
        trader: {
          id: values.id || 0,
          tradername: values.tradername,
          limit: values.limit,
          deskid: values.deskid,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/traders'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const TraderEditForm = reduxForm({
  form: 'trader_edit',
  validate: function (values) {
    const errors = {};
    if (!values.tradername) {
      errors.tradername = 'Tradername is required';
    }
    return errors;
  },
})(TraderEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const trader = state.traders.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    trader: trader,
    initialValues: trader,
  };
}
export default connect(mapStateToProps)(TraderEditForm);

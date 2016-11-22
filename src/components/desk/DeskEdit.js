import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";

// Desk add/edit page component
export class DeskEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {desk, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-desk-edit">
        <PageHeader>{'Desk ' + (desk.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="deskname" label="Deskname" validate={true}/>
          <Field component={FormField} name="limit" label="Limit"/>
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
            buttonSave="Save Desk"/>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'DESKS_ADD_EDIT',
        desk: {
          id: values.id || 0,
          deskname: values.deskname,
          limit: values.limit,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/desks'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const DeskEditForm = reduxForm({
  form: 'desk_edit',
  validate: function (values) {
    const errors = {};
    if (!values.deskname) {
      errors.deskname = 'Deskname is required';
    }
    return errors;
  },
})(DeskEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const desk = state.desks.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    desk: desk,
    initialValues: desk,
  };
}
export default connect(mapStateToProps)(DeskEditForm);

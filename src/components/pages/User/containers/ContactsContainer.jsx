import React from 'react';
import { connect } from 'react-redux';

import Contacts from '../components/Contacts/Contacts';

const AboutContainer = props => <Contacts {...props} />;

function mapStateToProps(state) {
  return {
    contacts: state.user.contacts,
  };
}
export default connect(mapStateToProps)(AboutContainer);

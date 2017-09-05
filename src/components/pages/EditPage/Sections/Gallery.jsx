import React from 'react';
import PropTypes from 'prop-types';

import { FieldFileUploader } from '../Fields';
import Section from './Section';
import FormRow from '../FormRow';

const Gallery = ({
  selectValues,
  onSubmit,
  ...props
}) => {
  return (
    <Section
      selectValues={{}}
      title="Галлерея"
      onSubmit={onSubmit}
    >
      <FormRow>
        <FieldFileUploader
          value={selectValues.PROPERTY_IMGS}
          field="PROPERTY_IMGS_PRE"
          title="Публичные фотографии"
          {...props}
        />
      </FormRow>
      <FormRow>
        <FieldFileUploader
          value={selectValues.PROPERTY_HIDE_IMGS}
          field="PROPERTY_HIDE_IMGS_PRE"
          title="Приватные фотографии"
          {...props}
        />
      </FormRow>
    </Section>
  );
};

Gallery.propTypes = {
  selectValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

Gallery.defaultProps = {
  selectValues: {},
  onSubmit: () => {},
};

export default Gallery;

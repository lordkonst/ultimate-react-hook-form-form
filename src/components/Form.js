import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

const Form = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <form className={styles.root} noValidate {...props}>
      {children}
    </form>
  );
};

export default Form;

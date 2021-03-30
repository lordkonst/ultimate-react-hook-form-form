import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      className={styles.root}
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Container className={styles.root} component="main" maxWidth="xs" {...props}>
      {children}
    </Container>
  );
};

export default MainContainer;

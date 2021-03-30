import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { CloudUpload, InsertDriveFile } from '@material-ui/icons';
import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#eee',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '10px',
    marginTop: '20px',
  },
  icon: {
    marginTop: '16px',
    color: '#888',
    fontSize: '42px',
  },
});

const FileInput = ({ control, name }) => {
  const styles = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop to upload files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={file.name} secondary={file.size} />
                </ListItem>
              );
            })}
          </List>
        </>
      )}
    />
  );
};

export default FileInput;

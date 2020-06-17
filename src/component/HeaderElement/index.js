import React from "react";
import { Chip, Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 3,
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  avatar: {
    backgroundColor: `red`,
  }
}));

function HeaderElement({ name, onClick }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar>{name.first_name[0]}{name.last_name[0]}</Avatar>}
        label={`${name.first_name} ${name.last_name}`}
        onDelete={onClick}
      />
    </div>
  );
}

export default HeaderElement;

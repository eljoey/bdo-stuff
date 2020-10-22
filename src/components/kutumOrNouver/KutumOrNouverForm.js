import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Send from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#404040',
    height: 'max-content',
    minWidth: '30%',
    margin: 'auto',
    padding: '25px',
    borderRadius: '5px',
  },
  title: {
    textAlign: 'center',
  },
  form: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing(1),
    color: 'white'
  },
  label: {
    color: '#3FA3C4'
  },
  select: {
    color: 'white',
  },
  sliderInput: {
    width: '50px',
    color: 'white'
  },
  button: {
    float: 'right',
    marginTop: '10px',
    color: 'white'
  }
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const CaphrasForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState({
    kutumEnhLevel: 'tri',
    kutumCaphrasLevel: '0',
    nouverEnhLevel: 'tri',
    nouverCaphrasLevel: '0'
  });
  const [rangeValue, setRangeValue] = useState(200);

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseAp = rangeValue;
    const kutumLvl = values.kutumEnhLevel;
    const kutumCaphra = values.kutumCaphrasLevel;
    const nouverLvl = values.nouverEnhLevel;
    const nouverCaphra = values.nouverCaphrasLevel;

    history.push(
      `/kutum-or-nouver/result?baseAp=${baseAp}&kutumLvl=${kutumLvl}&kutumCaphra=${kutumCaphra}&nouverLvl=${nouverLvl}&nouverCaphra=${nouverCaphra}`
    );
  };

  const handleRangeChange = (e, value) => {
    setRangeValue(value);
  };

  const handleInputChange = (e) => {
    setRangeValue(e.target.value === '' ? '' : Number(e.target.value));
  };

  const handleBlur = () => {
    if (rangeValue < 200) {
      setRangeValue(200);
    } else if (rangeValue > 300) {
      setRangeValue(300);
    }
  };

  const handleSelectChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.title}>Kutum or Nouver</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <Typography gutterBottom color='primary'>Select Sheet Ap with no offhand equipped</Typography>
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs>
              <Slider
                ValueLabelComponent={ValueLabelComponent}
                value={typeof rangeValue === 'number' ? rangeValue : 200}
                onChange={handleRangeChange}
                min={200}
                max={300}
                classname={classes.slider}
              />
            </Grid>
            <Grid item>
              <Input
                className={classes.sliderInput}
                value={rangeValue}
                margin='dense'
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: 200,
                  max: 300,
                  type: 'number',
                }}
              />
            </Grid>
          </Grid>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='kutumEnhLevel-label' className={classes.label}>Kutum Enhance Level</InputLabel>
          <Select
            labelId='kutumEnhLevel-label'
            id='kutumEnhLevel'
            name='kutumEnhLevel'
            value={values.kutumEnhLevel}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem value='tri'>Tri</MenuItem>
            <MenuItem value='tet'>Tet</MenuItem>
            <MenuItem value='pen'>Pen</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='kutumCaphrasLevel-label' className={classes.label}>Kutum Caphras Level</InputLabel>
          <Select
            labelId='kutumCaphrasLevel-label'
            id='kutumCaphrasLevel'
            name='kutumCaphrasLevel'
            value={values.kutumCaphrasLevel}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem value='0'>0</MenuItem>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
            <MenuItem value='6'>6</MenuItem>
            <MenuItem value='7'>7</MenuItem>
            <MenuItem value='8'>8</MenuItem>
            <MenuItem value='9'>9</MenuItem>
            <MenuItem value='10'>10</MenuItem>
            <MenuItem value='11'>11</MenuItem>
            <MenuItem value='12'>12</MenuItem>
            <MenuItem value='13'>13</MenuItem>
            <MenuItem value='14'>14</MenuItem>
            <MenuItem value='15'>15</MenuItem>
            <MenuItem value='16'>16</MenuItem>
            <MenuItem value='17'>17</MenuItem>
            <MenuItem value='18'>18</MenuItem>
            <MenuItem value='19'>19</MenuItem>
            <MenuItem value='20'>20</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='nouverEnhLevel-label' className={classes.label}>Nouver Enhance Level</InputLabel>
          <Select
            labelId='nouverEnhLevel-label'
            id='nouverEnhLevel'
            name='nouverEnhLevel'
            value={values.nouverEnhLevel}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem value='tri'>Tri</MenuItem>
            <MenuItem value='tet'>Tet</MenuItem>
            <MenuItem value='pen'>Pen</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='nouverCaphrasLevel-label' className={classes.label}>Nouver Caphras Level</InputLabel>
          <Select
            labelId='nouverCaphrasLevel-label'
            id='nouverCaphrasLevel'
            name='nouverCaphrasLevel'
            value={values.nouverCaphrasLevel}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem value='0'>0</MenuItem>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
            <MenuItem value='6'>6</MenuItem>
            <MenuItem value='7'>7</MenuItem>
            <MenuItem value='8'>8</MenuItem>
            <MenuItem value='9'>9</MenuItem>
            <MenuItem value='10'>10</MenuItem>
            <MenuItem value='11'>11</MenuItem>
            <MenuItem value='12'>12</MenuItem>
            <MenuItem value='13'>13</MenuItem>
            <MenuItem value='14'>14</MenuItem>
            <MenuItem value='15'>15</MenuItem>
            <MenuItem value='16'>16</MenuItem>
            <MenuItem value='17'>17</MenuItem>
            <MenuItem value='18'>18</MenuItem>
            <MenuItem value='19'>19</MenuItem>
            <MenuItem value='20'>20</MenuItem>
          </Select>
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.button}
          endIcon={<Send />}>
          Submit
          </Button>
      </form>
    </div>
  );
};

export default CaphrasForm;
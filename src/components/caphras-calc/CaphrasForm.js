import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Send from '@material-ui/icons/Send';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#404040',
    minWidth: '30%',
    margin: '25px auto 0 auto',
    padding: '25px',
    borderRadius: '5px',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  form: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    margin: theme.spacing(1),
    color: 'white'
  },
  select: {
    color: 'white',
  },
  label: {
    color: '#3FA3C4'
  },
  button: {
    float: 'right',
    marginTop: '10px',
    backgroundColor: '#3FA3C4',
    color: 'white'
  }
}));

const CaphrasForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState({
    itemType: 'BossMH',
    enhLvl: 'tri',
    region: 'na',
    currentCaphras: '0',
    desiredCaphras: '1'
  });
  const [error, setError] = useState({
    value: false,
    message: {
      currentCaphras: 'Must be lower than desired caphras',
      desiredCaphras: 'Must be higher than current caphras'
    }
  });

  useEffect(() => {
    if (values.currentCaphras >= values.desiredCaphras) {
      setError(initial => ({
        ...initial,
        value: true
      }));
      return;
    }

    setError(initial => ({
      ...initial,
      value: false
    }));
  }, [values]);

  const handleSelectChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });


  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const item = values.itemType;
    const enhLevel = values.enhLvl;
    const curLevel = values.currentCaphras;
    const desiredLevel = values.desiredCaphras;
    const region = values.region;

    history.push(
      `/caphras-calculator/result?item=${item}&enhLevel=${enhLevel}&curLevel=${curLevel}&desiredLevel=${desiredLevel}&region=${region}`
    );
  };

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.title}>Caphras Calculator</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormControl className={classes.formControl} >
          <InputLabel id='itemType-label' className={classes.label}>Item Type</InputLabel>
          <Select
            labelId='itemType-label'
            id='itemType'
            name='itemType'
            value={values.itemType}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem value='BossMH' >Boss Mainhand</MenuItem>
            <MenuItem value='BossAwak'>Boss Awakening</MenuItem>
            <MenuItem value='BossOffhand'>Boss Offhand</MenuItem>
            <MenuItem value='BossArmor'>Boss Armor</MenuItem>
            <MenuItem value='DimTree'>Dim Tree Armor</MenuItem>
            <MenuItem value='BlueMH/Awak'>Blue Mainhand/Awakening</MenuItem>
            <MenuItem value='BlueArmor'>Blue Armor</MenuItem>
            <MenuItem value='GreenMH/Awak'>Green Mainhand/Awakening</MenuItem>
            <MenuItem value='GreenOffhand'>Green Offhand</MenuItem>
            <MenuItem value='GreenArmor'>Green Armor</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id='enhLvl-label' className={classes.label}>Enhance Level</InputLabel>
          <Select
            labelId='enhLvl-label'
            id='enhLvl'
            name='enhLvl'
            value={values.enhLvl}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem value='tri'>Tri</MenuItem>
            <MenuItem value='tet'>Tet</MenuItem>
            <MenuItem value='pen'>Pen</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='region-label' className={classes.label}>Region</InputLabel>
          <Select
            labelId='region-label'
            id='region'
            name='region'
            value={values.region}
            onChange={handleSelectChange}
            className={classes.select}
          >
            <MenuItem value='na'>NA</MenuItem>
            <MenuItem value='eu'>EU</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} error={error.value}>
          <InputLabel id='currentCaphras-label' className={classes.label}>Current Caphras Level</InputLabel>
          <Select
            labelId='currentCaphras-label'
            id='currentCaphras'
            name='currentCaphras'
            value={values.currentCaphras}
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
          </Select>
          <FormHelperText color='warning'>
            {error.value ? error.message.currentCaphras : ''}
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} error={error.value}>
          <InputLabel id='desiredCaphras-label' className={classes.label}>Desired Caphras Level</InputLabel>
          <Select
            labelId='desiredCaphras-label'
            id='desiredCaphras'
            name='desiredCaphras'
            value={values.desiredCaphras}
            onChange={handleSelectChange}
            className={classes.select}
          >

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
          <FormHelperText color='warning'>
            {error.value ? error.message.desiredCaphras : ''}
          </FormHelperText>
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          className={classes.button}
          endIcon={<Send />}>
          Submit
          </Button>
      </form>
    </div>
  );
};

export default CaphrasForm;
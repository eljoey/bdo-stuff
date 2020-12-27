import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Send from '@material-ui/icons/Send';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#404040',
    height: 'max-content',
    minWidth: '30%',
    margin: '25px auto',
    padding: '25px',
    borderRadius: '5px',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      padding: '5px'
    }
  },
  title: {
    textAlign: 'center',
  },
  form: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  itemSelect: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  formControl: {
    margin: theme.spacing(1),
    color: 'white',
    minWidth: 200,
    [theme.breakpoints.down('xs')]: {
      minWidth: 100
    }
  },
  select: {
    color: 'white',
  },
  label: {
    color: '#3FA3C4',
    [theme.breakpoints.down('xs')]: {
      fontSize: '.85rem'
    }
  },
  button: {
    float: 'right',
    marginTop: '10px',
    color: 'white'
  }
}));

const defaultFormValues = {
  characterClass: {
    name: 'dark knight',
  },
  mainHand: {
    name: 'Kzarka',
    enhLevel: 16
  },
  offhand: {
    name: 'Kutum',
    enhLevel: 16
  },
  awakening: {
    name: 'Dandelion',
    enhLevel: 16
  },
  gloves: {
    name: "Bheg's",
    enhLevel: 16
  },
  helm: {
    name: "Griffon's",
    enhLevel: 16
  },
  armor: {
    name: "Dim",
    enhLevel: 16
  },
  boots: {
    name: "Urugon's",
    enhLevel: 16
  },
  ring: {
    name: 'Ring of Crescent Guardian',
    enhLevel: 1
  },
  necklace: {
    name: 'Ogre Ring',
    enhLevel: 1
  },
  earring: {
    name: 'Tungrad Earring',
    enhLevel: 1
  },
  belt: {
    name: 'Tungrad Belt',
    enhLevel: 1
  },

};

const UpgradeForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState(defaultFormValues);
  const [region, setRegion] = useState('na');

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem(
      'formData',
      JSON.stringify({
        data: values,
        region,
      })
    );

    history.push('/upgrade-calculator/results');
  };

  const handleSelectChange = (e, key) => {
    let value = e.target.value;
    if (key === 'enhLevel') {
      value = Number(value);
    }

    setValues({
      ...values,
      [e.target.name]: {
        ...values[e.target.name],
        [key]: value
      }
    });
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.title}>Item Upgrade Calculator</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='characterClass-label' className={classes.label}>Class</InputLabel>
            <Select
              labelId='characterClass-label'
              id='characterClass'
              name='characterClass'
              value={values.characterClass.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value='dark knight'>Dark Knight</MenuItem>
              <MenuItem value='sorceress'>Sorceress</MenuItem>
              <MenuItem value='berserker'>Berserker</MenuItem>
              <MenuItem value='ranger'>Ranger</MenuItem>
              <MenuItem value='tamer'>Tamer</MenuItem>
              <MenuItem value='valkyrie'>Valkyrie</MenuItem>
              <MenuItem value='warrior'>Warrior</MenuItem>
              <MenuItem value='witch'>Witch</MenuItem>
              <MenuItem value='wizard'>Wizard</MenuItem>
              <MenuItem value='musa'>Musa</MenuItem>
              <MenuItem value='maehwa'>Maehwa</MenuItem>
              <MenuItem value='kunoichi'>Kunoichi</MenuItem>
              <MenuItem value='ninja'>Ninja</MenuItem>
              <MenuItem value='striker'>Striker</MenuItem>
              <MenuItem value='mystic'>Mystic</MenuItem>
              <MenuItem value='lahn'>Lahn</MenuItem>
              <MenuItem value='archer'>Archer</MenuItem>
              <MenuItem value='shai'>Shai</MenuItem>
              <MenuItem value='guardian'>Guardian</MenuItem>
              <MenuItem value='hashashin'>Hashashin</MenuItem>
              <MenuItem value='nova'>Nova</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='region-label' className={classes.label}>Region</InputLabel>
            <Select
              labelId='region-label'
              id='region'
              name='region'
              value={region}
              onChange={handleRegionChange}
              className={classes.select}
            >
              <MenuItem value='na'>NA</MenuItem>
              <MenuItem value='eu'>EU</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='mainHand-label' className={classes.label}>Mainhand</InputLabel>
            <Select
              labelId='mainHand-label'
              id='mainHand'
              name='mainHand'
              value={values.mainHand.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value='Kzarka'>Kzarka</MenuItem>
              <MenuItem value='Offin'>Offin Tett</MenuItem>
              <MenuItem value='Blackstar'>Blackstar</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='mainHandEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='mainHandEnhLevel-label'
              id='mainHandEnhLevel'
              name='mainHand'
              value={values.mainHand.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='16'>Pri</MenuItem>
              <MenuItem value='17'>Duo</MenuItem>
              <MenuItem value='18'>Tri</MenuItem>
              <MenuItem value='19'>Tet</MenuItem>
              <MenuItem value='20'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='offhand-label' className={classes.label}>Offhand</InputLabel>
            <Select
              labelId='offhand-label'
              id='offhand'
              name='offhand'
              value={values.offhand.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value='Kutum'>Kutum</MenuItem>
              <MenuItem value='Nouver'>Nouver</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='offhandEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='offhandEnhLevel-label'
              id='offhandEnhLevel'
              name='offhand'
              value={values.offhand.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='16'>Pri</MenuItem>
              <MenuItem value='17'>Duo</MenuItem>
              <MenuItem value='18'>Tri</MenuItem>
              <MenuItem value='19'>Tet</MenuItem>
              <MenuItem value='20'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='awakening-label' className={classes.label}>Awakening</InputLabel>
            <Select
              labelId='awakening-label'
              id='awakening'
              name='awakening'
              value={values.awakening.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value='Dandelion'>Dandelion</MenuItem>
              <MenuItem value='Dragon'>Dragon Slayer</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='awakeningEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='awakeningEnhLevel-label'
              id='awakeningEnhLevel'
              name='awakening'
              value={values.awakening.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='16'>Pri</MenuItem>
              <MenuItem value='17'>Duo</MenuItem>
              <MenuItem value='18'>Tri</MenuItem>
              <MenuItem value='19'>Tet</MenuItem>
              <MenuItem value='20'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='gloves-label' className={classes.label}>Gloves</InputLabel>
            <Select
              labelId='gloves-label'
              id='gloves'
              name='gloves'
              value={values.gloves.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value="Bheg's">Bheg's</MenuItem>
              <MenuItem value="Leebur's">Leebur's</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='glovesEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='glovesEnhLevel-label'
              id='glovesEnhLevel'
              name='gloves'
              value={values.gloves.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='16'>Pri</MenuItem>
              <MenuItem value='17'>Duo</MenuItem>
              <MenuItem value='18'>Tri</MenuItem>
              <MenuItem value='19'>Tet</MenuItem>
              <MenuItem value='20'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='helm-label' className={classes.label}>Helm</InputLabel>
            <Select
              labelId='helm-label'
              id='helm'
              name='helm'
              value={values.helm.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value="Griffon's">Griffon's</MenuItem>
              <MenuItem value="Giath's">Giath's</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='helmEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='helmEnhLevel-label'
              id='helmEnhLevel'
              name='helm'
              value={values.helm.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='16'>Pri</MenuItem>
              <MenuItem value='17'>Duo</MenuItem>
              <MenuItem value='18'>Tri</MenuItem>
              <MenuItem value='19'>Tet</MenuItem>
              <MenuItem value='20'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='armor-label' className={classes.label}>Armor</InputLabel>
            <Select
              labelId='armor-label'
              id='armor'
              name='armor'
              value={values.armor.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value='Dim'>Dim Tree's</MenuItem>
              <MenuItem value='Red'>Red Nose</MenuItem>
              <MenuItem value='Blackstar'>Blackstar Armor</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='armorEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='armorEnhLevel-label'
              id='armorEnhLevel'
              name='armor'
              value={values.armor.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='16'>Pri</MenuItem>
              <MenuItem value='17'>Duo</MenuItem>
              <MenuItem value='18'>Tri</MenuItem>
              <MenuItem value='19'>Tet</MenuItem>
              <MenuItem value='20'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='boots-label' className={classes.label}>Boots</InputLabel>
            <Select
              labelId='boots-label'
              id='boots'
              name='boots'
              value={values.boots.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value="Urugon's">Urugon's</MenuItem>
              <MenuItem value="Muskan's">Muskan's</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='bootsEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='bootsEnhLevel-label'
              id='bootsEnhLevel'
              name='boots'
              value={values.boots.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='16'>Pri</MenuItem>
              <MenuItem value='17'>Duo</MenuItem>
              <MenuItem value='18'>Tri</MenuItem>
              <MenuItem value='19'>Tet</MenuItem>
              <MenuItem value='20'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='ring-label' className={classes.label}>Worst Ring</InputLabel>
            <Select
              labelId='ring-label'
              id='ring'
              name='ring'
              value={values.ring.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value='Ring of Crescent Guardian'>
                Ring of Crescent Guardian
            </MenuItem>
              <MenuItem value='Tungrad Ring'>Tungrad Ring</MenuItem>
              <MenuItem value='Ring of Cadry Guardian'>
                Ring of Cadry Guardian
            </MenuItem>
              <MenuItem value='Eye of the Ruins Ring'>Eye of the Ruins Ring</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='ringEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='ringEnhLevel-label'
              id='ringEnhLevel'
              name='ring'
              value={values.ring.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='1'>Pri</MenuItem>
              <MenuItem value='2'>Duo</MenuItem>
              <MenuItem value='3'>Tri</MenuItem>
              <MenuItem value='4'>Tet</MenuItem>
              <MenuItem value='5'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='earring-label' className={classes.label}>Worst Earring</InputLabel>
            <Select
              labelId='earring-label'
              id='earring'
              name='earring'
              value={values.earring.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value='Tungrad Earring'>Tungrad Earring</MenuItem>
              <MenuItem value='Narc Ear Accessory'>Narc Ear Accessory</MenuItem>
              <MenuItem value='Black Distortion Earring'>Black Distortion Earring</MenuItem>
              <MenuItem value='Ethereal Earrings'>Ethereal Earrings</MenuItem>
              <MenuItem value='Dawn Earring'>Dawn Earring</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='earringEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='earringEnhLevel-label'
              id='earringEnhLevel'
              name='earring'
              value={values.earring.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='1'>Pri</MenuItem>
              <MenuItem value='2'>Duo</MenuItem>
              <MenuItem value='3'>Tri</MenuItem>
              <MenuItem value='4'>Tet</MenuItem>
              <MenuItem value='5'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='necklace-label' className={classes.label}>Necklace</InputLabel>
            <Select
              labelId='necklace-label'
              id='necklace'
              name='necklace'
              value={values.necklace.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value='Ogre Ring'>Ogre Ring</MenuItem>
              <MenuItem value='Deboreka Necklace'>Deboreka Necklace</MenuItem>
              <MenuItem value="Laytenn's Power Stone">Laytenn's Power Stone</MenuItem>
              <MenuItem value="Serap's Necklace">Serap's Necklace</MenuItem>
              <MenuItem value="Sicil's Necklace">Sicil's Necklace</MenuItem>
              <MenuItem value='Tungrad Necklace'>Tungrad Necklace</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='necklaceEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='necklaceEnhLevel-label'
              id='necklaceEnhLevel'
              name='necklace'
              value={values.necklace.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='1'>Pri</MenuItem>
              <MenuItem value='2'>Duo</MenuItem>
              <MenuItem value='3'>Tri</MenuItem>
              <MenuItem value='4'>Tet</MenuItem>
              <MenuItem value='5'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.itemSelect}>
          <FormControl className={classes.formControl} >
            <InputLabel id='belt-label' className={classes.label}>Belt</InputLabel>
            <Select
              labelId='belt-label'
              id='belt'
              name='belt'
              value={values.belt.name}
              onChange={(e) => handleSelectChange(e, 'name')}
              className={classes.select}
            >
              <MenuItem value="Basilisk's Belt">Basilisk's Belt</MenuItem>
              <MenuItem value='Tungrad Belt'>Tungrad Belt</MenuItem>
              <MenuItem value='Valtarra Eclipsed Belt'>
                Valtarra Eclipsed Belt
            </MenuItem>
              <MenuItem value='Centaurus Belt'>Centaurus Belt</MenuItem>
              <MenuItem value="Orkinrad's Belt">Orkinrad's Belt</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} >
            <InputLabel id='beltEnhLevel-label' className={classes.label}>Enhance Level</InputLabel>
            <Select
              labelId='beltEnhLevel-label'
              id='beltEnhLevel'
              name='belt'
              value={values.belt.enhLevel}
              onChange={(e) => handleSelectChange(e, 'enhLevel')}
              className={classes.select}
            >
              <MenuItem value='1'>Pri</MenuItem>
              <MenuItem value='2'>Duo</MenuItem>
              <MenuItem value='3'>Tri</MenuItem>
              <MenuItem value='4'>Tet</MenuItem>
              <MenuItem value='5'>Pen</MenuItem>
            </Select>
          </FormControl>
        </div>
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

export default UpgradeForm;
import React from 'react';
import { Select, Button, Icon } from 'react-materialize';
import { useHistory } from 'react-router-dom';
import './UpgradeForm.css';

const UpgradeForm = () => {
  const history = useHistory();
  const selectOptions = {
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const region = e.target.region.value;
    const itemData = {
      characterClass: {
        name: e.target.class.value,
      },
      mainHand: {
        name: e.target.mainhand.value,
        enhLevel: Number(e.target.mainhandEnhLevel.value),
      },
      offhand: {
        name: e.target.offhand.value,
        enhLevel: Number(e.target.offhandEnhLevel.value),
      },
      awakening: {
        name: e.target.awakening.value,
        enhLevel: Number(e.target.awakeningEnhLevel.value),
      },
      gloves: {
        name: e.target.gloves.value,
        enhLevel: Number(e.target.glovesEnhLevel.value),
      },
      helm: {
        name: e.target.helm.value,
        enhLevel: Number(e.target.helmEnhLevel.value),
      },
      armor: {
        name: e.target.armor.value,
        enhLevel: Number(e.target.armorEnhLevel.value),
      },
      boots: {
        name: e.target.boots.value,
        enhLevel: Number(e.target.bootsEnhLevel.value),
      },
      ring: {
        name: e.target.ring.value,
        enhLevel: Number(e.target.ringEnhLevel.value),
      },
      earring: {
        name: e.target.earring.value,
        enhLevel: Number(e.target.earringEnhLevel.value),
      },
      necklace: {
        name: e.target.necklace.value,
        enhLevel: Number(e.target.necklaceEnhLevel.value),
      },
      belt: {
        name: e.target.belt.value,
        enhLevel: Number(e.target.beltEnhLevel.value),
      },
    };
    localStorage.setItem(
      'formData',
      JSON.stringify({
        data: itemData,
        region,
      })
    );

    history.push('/upgrade-calculator/results');
  };

  return (
    <div
      style={{
        height: '100%',
        border: 'solid 1px white',
        marginTop: '8px',
        marginBottom: '8px',
        backgroundColor: '#616161',
      }}
    >
      <h5 className='center-align white-text' style={{ marginBottom: '45px' }}>
        Input your Item:
      </h5>
      <form onSubmit={handleSubmit}>
        <Select
          s={12}
          id='class'
          label='class'
          multiple={false}
          options={selectOptions}
          value='dark knight'
        >
          <option value='dark knight'>Dark Knight</option>
          <option value='sorceress'>Sorceress</option>
          <option value='berserker'>Berserker</option>
          <option value='ranger'>Ranger</option>
          <option value='tamer'>Tamer</option>
          <option value='valkyrie'>Valkyrie</option>
          <option value='warrior'>Warrior</option>
          <option value='witch'>Witch</option>
          <option value='wizard'>Wizard</option>
          <option value='musa'>Musa</option>
          <option value='maehwa'>Maehwa</option>
          <option value='kunoichi'>Kunoichi</option>
          <option value='ninja'>Ninja</option>
          <option value='striker'>Striker</option>
          <option value='mystic'>Mystic</option>
          <option value='lahn'>Lahn</option>
          <option value='archer'>Archer</option>
          <option value='shai'>Shai</option>
          <option value='guardian'>Guardian</option>
          <option value='hashashin'>Hashashin</option>
        </Select>
        <Select
          s={12}
          id='region'
          label='Region'
          multiple={false}
          options={selectOptions}
          value='na'
        >
          <option value='na'>North America</option>
          <option value='eu'>Europe</option>
        </Select>
        <div>
          <Select
            s={7}
            id='mainhand'
            label='Mainhand'
            multiple={false}
            options={selectOptions}
            value='Kzarka'
          >
            <option value='Kzarka'>Kzarka</option>
            <option value='Offin'>Offin Tett</option>
            <option value='Blackstar'>Blackstar</option>
          </Select>

          <Select
            s={5}
            id='mainhandEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='16'
          >
            <option value='16'>Pri</option>
            <option value='17'>Duo</option>
            <option value='18'>Tri</option>
            <option value='19'>Tet</option>
            <option value='20'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='offhand'
            label='Offhand'
            multiple={false}
            options={selectOptions}
            value='Kutum'
          >
            <option value='Kutum'>Kutum</option>
            <option value='Nouver'>Nouver</option>
          </Select>

          <Select
            s={5}
            id='offhandEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='16'
          >
            <option value='16'>Pri</option>
            <option value='17'>Duo</option>
            <option value='18'>Tri</option>
            <option value='19'>Tet</option>
            <option value='20'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='awakening'
            label='Awakening'
            multiple={false}
            options={selectOptions}
            value='Dandelion'
          >
            <option value='Dandelion'>Dandelion</option>
            <option value='Dragon'>Dragon Slayer</option>
          </Select>

          <Select
            s={5}
            id='awakeningEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='16'
          >
            <option value='16'>Pri</option>
            <option value='17'>Duo</option>
            <option value='18'>Tri</option>
            <option value='19'>Tet</option>
            <option value='20'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='gloves'
            label='Gloves'
            multiple={false}
            options={selectOptions}
            value="Bheg's"
          >
            <option value="Bheg's">Bheg's</option>
            <option value="Leebur's">Leebur's</option>
          </Select>

          <Select
            s={5}
            id='glovesEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='16'
          >
            <option value='16'>Pri</option>
            <option value='17'>Duo</option>
            <option value='18'>Tri</option>
            <option value='19'>Tet</option>
            <option value='20'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='helm'
            label='Helm'
            multiple={false}
            options={selectOptions}
            value="Griffon's"
          >
            <option value="Griffon's">Griffon's</option>
            <option value="Giath's">Giath's</option>
          </Select>

          <Select
            s={5}
            id='helmEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='16'
          >
            <option value='16'>Pri</option>
            <option value='17'>Duo</option>
            <option value='18'>Tri</option>
            <option value='19'>Tet</option>
            <option value='20'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='armor'
            label='Armor'
            multiple={false}
            options={selectOptions}
            value='Dim'
          >
            <option value='Dim'>Dim Tree's</option>
            <option value='Red'>Red Nose</option>
            <option value='Blackstar'>Blackstar Armor</option>
          </Select>

          <Select
            s={5}
            id='armorEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='16'
          >
            <option value='16'>Pri</option>
            <option value='17'>Duo</option>
            <option value='18'>Tri</option>
            <option value='19'>Tet</option>
            <option value='20'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='boots'
            label='Boots'
            multiple={false}
            options={selectOptions}
            value="Urugon's"
          >
            <option value="Urugon's">Urugon's</option>
            <option value="Muskan's">Muskan's</option>
          </Select>

          <Select
            s={5}
            id='bootsEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='16'
          >
            <option value='16'>Pri</option>
            <option value='17'>Duo</option>
            <option value='18'>Tri</option>
            <option value='19'>Tet</option>
            <option value='20'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='ring'
            label='Worst Ring'
            multiple={false}
            options={selectOptions}
            value='Ring of Crescent Guardian'
          >
            <option value='Ring of Crescent Guardian'>
              Ring of Crescent Guardian
            </option>
            <option value='Tungrad Ring'>Tungrad Ring</option>
            <option value='Ring of Cadry Guardian'>
              Ring of Cadry Guardian
            </option>
            <option value='Eye of the Ruins Ring'>Eye of the Ruins Ring</option>
          </Select>

          <Select
            s={5}
            id='ringEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='1'
          >
            <option value='1'>Pri</option>
            <option value='2'>Duo</option>
            <option value='3'>Tri</option>
            <option value='4'>Tet</option>
            <option value='5'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='earring'
            label='Worst Earring'
            multiple={false}
            options={selectOptions}
            value='Tungrad Earring'
          >
            <option value='Tungrad Earring'>Tungrad Earring</option>
            <option value='Narc Ear Accessory'>Narc Ear Accessory</option>
            <option value='Black Distortion Earring'>
              Black Distortion Earring
            </option>
            <option value='Ethereal Earrings'>Ethereal Earrings</option>
            <option value='Dawn Earring'>Dawn Earring</option>
          </Select>

          <Select
            s={5}
            id='earringEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='1'
          >
            <option value='1'>Pri</option>
            <option value='2'>Duo</option>
            <option value='3'>Tri</option>
            <option value='4'>Tet</option>
            <option value='5'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='necklace'
            label='Necklace'
            multiple={false}
            options={selectOptions}
            value='Ogre Ring'
          >
            <option value='Ogre Ring'>Ogre Ring</option>
            <option value='Deboreka Necklace'>Deboreka Necklace</option>
            <option value="Laytenn's Power Stone">Laytenn's Power Stone</option>
            <option value="Serap's Necklace">Serap's Necklace</option>
            <option value="Sicil's Necklace">Sicil's Necklace</option>
            <option value='Tungrad Necklace'>Tungrad Necklace</option>
          </Select>

          <Select
            s={5}
            id='necklaceEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='1'
          >
            <option value='1'>Pri</option>
            <option value='2'>Duo</option>
            <option value='3'>Tri</option>
            <option value='4'>Tet</option>
            <option value='5'>Pen</option>
          </Select>
        </div>
        <div>
          <Select
            s={7}
            id='belt'
            label='Belt'
            multiple={false}
            options={selectOptions}
            value="Basilisk's Belt"
          >
            <option value="Basilisk's Belt">Basilisk's Belt</option>
            <option value='Tungrad Belt'>Tungrad Belt</option>
            <option value='Valtarra Eclipsed Belt'>
              Valtarra Eclipsed Belt
            </option>
            <option value='Centaurus Belt'>Centaurus Belt</option>
            <option value="Orkinrad's Belt">Orkinrad's Belt</option>
          </Select>

          <Select
            s={5}
            id='beltEnhLevel'
            label='Enhance Level'
            multiple={false}
            options={selectOptions}
            value='1'
          >
            <option value='1'>Pri</option>
            <option value='2'>Duo</option>
            <option value='3'>Tri</option>
            <option value='4'>Tet</option>
            <option value='5'>Pen</option>
          </Select>
        </div>

        <div className='center-align' style={{ marginBottom: '10px' }}>
          <Button node='button' type='submit' waves='light'>
            Submit
            <Icon right>send</Icon>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpgradeForm;

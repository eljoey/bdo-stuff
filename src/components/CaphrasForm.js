import React from 'react';
import { Select, Button, Icon } from 'react-materialize';
import { useHistory } from 'react-router-dom';

const CaphrasForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = e.target.item.value;
    const enhLevel = e.target.enhLevel.value;
    const curLevel = e.target.curLevel.value;
    const desiredLevel = e.target.desiredLevel.value;
    const region = e.target.region.value;

    history.push(
      `/caphras-calculator/result?item=${item}&enhLevel=${enhLevel}&curLevel=${curLevel}&desiredLevel=${desiredLevel}&region=${region}`
    );
  };

  return (
    <div
      style={{
        height: '100vh',
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
          id='item'
          label='Item type to Enhance'
          multiple={false}
          options={selectOptions}
          value='BossMH'
        >
          <option value='BossMH'>Boss Mainhand</option>
          <option value='BossAwak'>Boss Awakening</option>
          <option value='BossOffhand'>Boss Offhand</option>
          <option value='BossArmor'>Boss Armor</option>
          <option value='DimTree'>Dim Tree Armor</option>
          <option value='BlueMH/Awak'>Blue Mainhand/Awakening</option>
          <option value='BlueArmor'>Blue Armor</option>
          <option value='GreenMH/Awak'>Green Mainhand/Awakening</option>
          <option value='GreenOffhand'>Green Offhand</option>
          <option value='GreenArmor'>Green Armor</option>
        </Select>

        <Select
          s={12}
          id='enhLevel'
          label='Item Enhance Level'
          multiple={false}
          options={selectOptions}
          value='tri'
        >
          <option value='tri'>Tri</option>
          <option value='tet'>Tet</option>
          <option value='pen'>Pen</option>
        </Select>
        <Select
          s={12}
          id='curLevel'
          label='Current Caphras Level'
          multiple={false}
          options={selectOptions}
          value='0'
        >
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
        </Select>
        <Select
          s={12}
          id='desiredLevel'
          label='Desired Caphras Level'
          multiple={false}
          options={selectOptions}
          value='1'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
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
        <div className='center-align'>
          <Button node='button' type='submit' waves='light'>
            Submit
            <Icon right>send</Icon>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CaphrasForm;

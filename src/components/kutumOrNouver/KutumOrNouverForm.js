import React, { useState } from 'react';
import { Select, Button, Icon, Range } from 'react-materialize';
import { useHistory } from 'react-router-dom';
import './KutumOrNouverForm.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const CaphrasForm = () => {
  const history = useHistory();
  const [rangeValue, setRangeValue] = useState(200);
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
    const baseAp = rangeValue;
    const kutumLvl = e.target.kutumLvl.value;
    const kutumCaphra = e.target.kutumCaphra.value;
    const nouverLvl = e.target.nouverLvl.value;
    const nouverCaphra = e.target.nouverCaphra.value;

    history.push(
      `/kutum-or-nouver/result?baseAp=${baseAp}&kutumLvl=${kutumLvl}&kutumCaphra=${kutumCaphra}&nouverLvl=${nouverLvl}&nouverCaphra=${nouverCaphra}`
    );
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
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
        Input your Items:
      </h5>
      <form onSubmit={handleSubmit}>
        <p className='baseApLabel center-align teal-text text-lighten-1'>
          Select sheet Ap with no offhand equipped
        </p>

        <RangeSlider
          max='300'
          min='200'
          name='points'
          size='sm'
          value={rangeValue}
          onChange={handleRangeChange}
        />

        <Select
          s={12}
          id='kutumLvl'
          label='Kutum Enhance Level'
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
          id='kutumCaphra'
          label='Kutum Caphras Level'
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
          <option value='20'>20</option>
        </Select>
        <Select
          s={12}
          id='nouverLvl'
          label='Nouver Enhance Level'
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
          id='nouverCaphra'
          label='Nouver Caphras Level'
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
          <option value='20'>20</option>
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

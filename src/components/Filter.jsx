import React from 'react';
import PropTypes from 'prop-types';

function Filter(props) {
  const {func, range} = props;
  const handleChange = ({target}) => {
    const {checked, value} = target;
    if (checked && range === value) {
      target.removeAttribute(checked);
      func('');
    }
    func(value);
  };

  return (
    <aside>
      <h5>Refine sua busca</h5>
      <p>Por preço</p>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          <input
            type="radio"
            name="price"
            value='40'
            checked={range === '40'}
            onChange={handleChange}
          />
          Até R$40
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="40-60"
            checked={range === '40-60'}
            onChange={handleChange}
          />
          R$40 A R$60
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="60-100"
            checked={range === '60-100'}
            onChange={handleChange}
          />
          R$60 A R$100
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="100-200"
            checked={range === '100-200'}
            onChange={handleChange}
          />
          R$100 A R$200
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="200-500"
            checked={range === '200-500'}
            onChange={handleChange}
          />
          R$200 A R$500
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value=">500"
            checked={range === '>500'}
            onChange={handleChange}
          />
          Acima de R$500
        </label>
      </form>
    </aside>
  );
}

Filter.propTypes = {
  func: PropTypes.func.isRequired,
  range: PropTypes.string.isRequired,
};

export default Filter;

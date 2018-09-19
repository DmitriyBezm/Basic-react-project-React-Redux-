import React from 'react';
import {connect} from 'react-redux';
import './styles.scss';

const List = ({data}) => {
  return (
    <ul className="list">
      {data.map(({id, title, description}) => (
        <li className="list__item" key={id}>
          <h3 className="list__title">{title}</h3>
          <p className="list__text">{description}</p>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({data, filter: {code}}) => ({
  data: (code === 'all') ? data : data.filter(item => item.code === code),
})

export default connect(mapStateToProps)(List)
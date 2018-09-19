import React from 'react';
import classnames from 'classnames';
import './styles.scss';

export default function FilterButton(props) {
  const {active, className} = props;
  const styles = classnames({
    filterButton: true,
    filterButton_active: active,
    [className]: className,
  });

  return (
    <button className={styles} type="button">
      <span className="filterButton__line">
        <i className="filterButton__filling" />
      </span>
      <span className="filterButton__line">
        <i className="filterButton__filling" />
      </span>
    </button>
  );
}

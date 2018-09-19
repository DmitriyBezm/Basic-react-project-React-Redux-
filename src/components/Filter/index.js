import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FilterButton from '../FilterButton';
import FadeInOut from '../../components/FadeInOut';
import FadeInChain from '../../components/FadeInChain';
import {setFilter, resetFilter} from '../../actions/index';
import Options from './Options'
import './styles.scss';

const propTypes = {
  onSetFilter: PropTypes.func.isRequired,
};

const ALL_CODE = 'all';

class ProjectsFilter extends Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = {
      openFilter: false,
      defaultFilterTitle: 'All',
      currentFilterSection: null,
      currentOptions: [],
      isAnimating: false,
    };
  }

  setFilter = ({code, title}) => {
    const {onSetFilter} = this.props;

    this.setState({
      openFilter: !this.state.openFilter,
      currentOptions: [],
    });

    onSetFilter({code, title})
  };

  toggleFilter = () => {
    if (this.state.isAnimating) return;

    this.setState({
      openFilter: !this.state.openFilter,
      currentOptions: [],
    });
  };

  openOptions = (item) => {
    if (this.isAnimating) return;

    const {onResetFilter} = this.props;

    if (item.code === ALL_CODE) {
      this.setState({
        openFilter: !this.state.openFilter,
        currentFilterSection: null,
        currentOptions: [],
      });

      onResetFilter();

    } else {
      this.setState({
        currentOptions: item.options,
        currentFilterSection: item.code,
      });
    }
  };

  holdUI = () => {
    this.setState({isAnimating: true});
  };

  unholdUI = () => {
    this.setState({isAnimating: false});
  };

  renderHeadings = () => {
    const {filtersList, code} = this.props;

    const allFiltersList = [
      ...filtersList,
      {
        code: ALL_CODE,
        title: 'All',
      }
    ]

    const list = code === ALL_CODE ? filtersList : allFiltersList;

    return (
      <FadeInChain
        className="desktopFilter__buttons"
        component="div"
        isActive={this.state.openFilter}
        onEnterStart={this.holdUI}
        onEnterEnd={this.unholdUI}
        onLeaveStart={this.holdUI}
        onLeaveEnd={this.unholdUI}
      >
        {list.map((section, index) => (
          <div className="desktopFilter__category" key={index}>
            <button
              className="desktopFilter__current-button"
              onClick={() => this.openOptions(section)}
              children={section.title}
            />
          </div>
        ))}
      </FadeInChain>
    );
  };

  renderOptions = () => {
    const {filtersList} = this.props;
    const {currentOptions: options, currentFilterSection} = this.state;

    return filtersList.map(({code}, index) => (
      <FadeInOut
        component="div"
        className="desktopFilter__options"
        key={index}
        onEnterStart={this.holdUI}
        onEnter={this.unholdUI}
        isActive={code === currentFilterSection}
        duration={0.175}
        children={ <Options options={options} onSelect={this.setFilter}/> }
      />
    ));
  };

  render() {
    const {title, className} = this.props;
    const {openFilter, defaultFilterTitle} = this.state;

    return (
      <div className={`desktopFilter ${className || ''}`}>
        <div className="desktopFilter__sections">
          <div className="desktopFilter__category desktopFilter__category_main">
            <div
              className="desktopFilter__current-button desktopFilter__current-button_main"
              onClick={this.toggleFilter}
              role="button"
              tabIndex={0}
            >
              <FilterButton active={openFilter} className="desktopFilter__button" />
              {title ? title : defaultFilterTitle}
            </div>
          </div>
          {this.renderHeadings()}
        </div>

        {this.renderOptions()}
      </div>
    );
  }
}

const mapStateToProps = ({filter: {categories, title, code}}) => ({
  filtersList: categories,
  title,
  code,
});

const mapDispatchToProps = dispatch => ({
  onSetFilter: (id) => {
    dispatch(setFilter(id));
  },
  onResetFilter: () => {
    dispatch(resetFilter());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsFilter);

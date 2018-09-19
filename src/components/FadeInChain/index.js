import React, {Component, Children, cloneElement} from 'react';
import AnimationUtils from '../../animations/index';
import {TimelineLite, TweenMax} from 'gsap';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import makeTransition from '../../HOC/makeTransition';

const propTypes = {
  onEnterStart: PropTypes.func,
  onEnterEnd: PropTypes.func,
  onLeaveStart: PropTypes.func,
  onLeaveEnd: PropTypes.func,
};

class FadInChain extends Component {
  static propTypes = propTypes;

  animations = AnimationUtils;
  childs = [];
  duration = 0.1;

  componentWillEnter(cb) {
    const {onEnterStart} = this.props;
    if (typeof onEnterStart === 'function') onEnterStart();

    this.timeline = new TimelineLite({onComplete: cb});

    this.childs.forEach((child, index) => {
      this.timeline.add(TweenMax.fromTo(
        child,
        this.duration + index * 0.02,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
      ));
    });
  }

  componentDidEnter() {
    const {onEnterEnd} = this.props;
    if (typeof onEnterEnd === 'function') onEnterEnd();
  }

  componentWillLeave(cb) {
    const {onLeaveStart} = this.props;

    if (this.timeline) {
      this.timeline.eventCallback('onReverseComplete', cb).reverse();
    }

    if (typeof onLeaveStart === 'function') onLeaveStart();
  }

  componentDidLeave() {
    const {onLeaveEnd} = this.props;
    this.timeline.clear();
    if (typeof onLeaveEnd === 'function') onLeaveEnd();
  }

  _saveRef = (node, index) => {
    this.childs[index] = ReactDOM.findDOMNode(node);
  };

  _getChilds = (child, index) => cloneElement(child, {
    ...child.props,
    ref: node => this._saveRef(node, index),
  });

  render() {
    const {children} = this.props;
    return Children.map(children, this._getChilds);
  }
}

export default makeTransition(FadInChain);

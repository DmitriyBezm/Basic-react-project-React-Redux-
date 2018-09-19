import makeTransition from '../../HOC/makeTransition';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import AnimationUtils from '../../animations';
import {isDOMTypeElement} from '../../utils';

const PropTypes = {
  duration: propTypes.number,
  onLeaveStart: propTypes.func,
  onLeave: propTypes.func,
  onEnter: propTypes.func,
  onEnterStart: propTypes.func,
};

class FadeInOut extends Component {
  static propTypes = PropTypes;
  animations = AnimationUtils;

  componentWillEnter(cb) {
    const {onEnterStart, duration, content} = this.props;
    let node = content && content.current || this.content;

    if (typeof onEnterStart === 'function') onEnterStart(this.content);

    if (!node) return cb();
    this.animations.fadeIn(node, cb, duration);
  }

  componentDidEnter() {
    const {onEnter} = this.props;
    if (typeof onEnter === 'function') onEnter(this.content);
  }

  componentWillLeave(cb) {
    const {duration, onLeaveStart, content} = this.props;
    let node = content && content.current || this.content;

    if (typeof onLeaveStart === 'function') onLeaveStart();

    if (!node) return cb();
    this.animations.fadeOut(node, cb, duration);
  }

  componentDidLeave() {
    const {onLeave} = this.props;
    if (typeof onLeave === 'function') onLeave(this.content);
  }

  saveRef = (node) => {
    const {content} = this.props;
    if (content && content.current) return;
    this.content = node;
  };

  render() {
    if (isDOMTypeElement(this.props.children)) return this.props.children;
    const {children} = this.props;
    const childProps = {...children.props, innerRef: this.saveRef};

    return React.cloneElement(children, childProps);
  }
}

export default makeTransition(FadeInOut);

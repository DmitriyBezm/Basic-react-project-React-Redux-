import React, {Component} from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import propTypes from 'prop-types';

export default function makeTransition(Content) {
  class TransitionComponent extends Component {
    static propTypes = {
      isActive: propTypes.bool,
      component: propTypes.string,
      innerref: propTypes.func,
    };

    static defaultProps = {
      component: 'div',
    };

    static displayName = `MakeTransition (${Content.name})`;

    render() {
      const {isActive, children, component, className, ...rest} = this.props;

      return (
        <TransitionGroup component={component} className={className ? className : ''}>
          {isActive ? <Content {...rest}>{children}</Content> : null}
        </TransitionGroup>
      )
    }
  }

  return TransitionComponent
}

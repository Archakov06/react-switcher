import React from 'react'

import './styles.css'

export default class Shnayga extends React.Component {

  static defaultProps = {
    checked: false,
    onClick: () => {},
    disabled: false,
    className: '',
    offColor: '#e6e6e6',
    onColor: '#468cff',
    size: 'normal'
  }

  constructor(props) {
    super(props);
    this.state = {checked: this.props.checked};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({checked: nextProps.checked});
  }

  handleClick = (e) => {
    e.preventDefault();
    if(!this.props.disabled) {
      console.log(this.state);
      this.props.onClick();
      this.setState({checked: !this.state.checked});
    }
  };

  render() {

    const className = [
      'shnayga',
      this.props.className,
      'shnayga--' + this.props.size,
      this.state.checked ? 'shnayga--checked' : '',
      this.props.disabled ? 'shnayga--disabled' : ''
    ].join(' ').replace(/\s{2,}/g,' ').trim();

    const bgColor = this.props.onColor && this.state.checked ? {backgroundColor: this.props.onColor} : {backgroundColor: this.props.offColor};

    return (
      <div style={ bgColor } className={ className } onClick={ this.handleClick }></div>
    );
  }

  static propTypes = {
    checked: React.PropTypes.bool,
    size: React.PropTypes.string,
    onClick: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    offColor: React.PropTypes.string,
    onColor: React.PropTypes.string,
    className: React.PropTypes.string
  }

}
export default class InputItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  _onChange (evt) {
    const value = Number(evt.target.value)
    if (value <= 200) {
      this.setState({
        value
      })
    }
  }

  render () {
    return (
      <input type="number"
        value={this.state.value}
        onChange={this._onChange.bind(this)}/>
    )
  }
}

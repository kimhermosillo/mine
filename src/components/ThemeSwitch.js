import React, { Component } from 'react'

class ThemeSwitch extends Component {
    render () {
        if (!this.supported) {
            return null
        }
        return (
        <div>
            <button aria-pressed={this.isActive()} onClick={this.toggle}>
            dark theme:
            <span aria-hidden='true'>{this.isActive() ? 'on' : 'off'}</span>
            </button>
            <style media={this.isActive() ? this.css.trim() : this.css}>
            {this.css}


            this.css = `
             html { filter: invert(100%) background: #fefefe }
            * { background-color: inherit }
            img:not([src*='.svg']), video { filter: invert(100%) }`
            </style>
        </div>
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            active: 'false'
        }

        this.store = type.of localStorage === 'undefined' ? null : localStorage


        isActive = () => this.state.active

        toggle = () => {
            this.setState({
                active: !this.isActive()
            })
        }

    }

    componentDidMount() {
        if(this.store) {
            this.setState({
                active: this.store.getItem('ThemeSwitch') || false
            })
        }
    }

    componentDidUpdate() {
        if (this.store) {
            this.store.setItem('ThemeSwitch', this.state.active)
        }
    }

}

export default ThemeSwitch
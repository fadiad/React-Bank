import React, { PureComponent } from 'react'
import '../styles/Category.css'

export default class Category extends PureComponent {
    render() {
        return (
            <div className='category'>
                <div> {this.props.category}</div>
                <div>{this.props.spends}</div>
            </div>
        )
    }
}

import React, { Component } from 'react';

class InputSkill extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        console.log('input', props)
    }
    render() { 
        const { skill } = this.props;
        return ( 
            <React.Fragment>
            <input 
                className={`checkbox__input checkbox__input--${skill}`} 
                id={skill} 
                type="checkbox" 
                name="skill_option" 
                value={skill}
                onClick={this.props.skillSelect}
                />
            <label 
                className={`checkbox__label checkbox__label--${skill}`} 
                htmlFor={skill}>
                    {skill}
            </label>
            </React.Fragment>
         );
    }
}
 
export default InputSkill;
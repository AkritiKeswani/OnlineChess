import React from 'react';

export default class SettingsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {easyMode: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({easyMode: event.target.checked});
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Show legal moves?
                    <input type="checkbox" 
                    value={this.state.easyMode}
                    onChange={this.handleChange} />
                </label>
                <br />
            <input type="submit" value="OK!" />
            </form>
        );
    }
}
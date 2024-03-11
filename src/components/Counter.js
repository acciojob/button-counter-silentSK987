import { Component } from 'react';
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increamentCount = () => {
        const curr = this.state.count;
        this.setState({ count: curr + 1 })
    }
    render() {
        return (
            <>
                <p>Button clicked {this.state.count} times</p>
                <button onClick={this.increamentCount}>Click me</button>
            </>

        )
    }

}
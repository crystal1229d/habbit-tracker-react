import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();   // DOM요소에 바로 접근X. 리액트에서 제공하는 Ref이용 
    formRef = React.createRef();

    onSubmit = event => {
        event.preventDefault(); // onSubmit 발생시 브라우저 기본 동작(리프레쉬) 방지
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    };

    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Enter Your Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
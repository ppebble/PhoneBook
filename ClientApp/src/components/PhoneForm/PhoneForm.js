import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
    name: '',
    phone : '',
    }
    handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
        
    });
    }
    handleSubmit = (e) => {
        e.preventDefault();//페이지 리롣이 방지
        this.props.onCreate(this.state);//상태값을 onCreate를 통하여 부모(Home.js)에 전달
        this.setState({ //상태 초기화
            name: '',
            phone : '',
        })
    }
    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <input
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
        />
        <input
            placeholder="전화번호"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
        />
        <div>{this.state.name}  ::  {this.state.phone}</div>
        <button type="submit">Regist</button>
        </form>
    );
    }
}

export default PhoneForm;
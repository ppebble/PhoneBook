import React, { Component } from 'react';
import PhoneForm from './PhoneForm/PhoneForm';
import PhoneInfoList from './PhoneForm/PhoneInfoList';

export class Home extends Component {
  static displayName = Home.name;
  id = 1
  state = {
    information : [
      {
        id: 0,
        name: 'LEE',
        phone : '010-9417-4320'
      }
    ],
    keyword : ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleCreate=(data) =>{
    const {information} = this.state;
    this.setState({
      information : information.concat({id:this.id++, ...data })
    })
  }
  handleRemove = (id) =>{
    const {information} = this.state;
    this.setState({
      information : information.filter(info=> info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information : information.map(
        info => id=== info.id ? {...info, ...data} : info // 새 객체를 만들어 데이터를 덮어씀 : 데이터 현상유지
      )
    })
  }

  render () {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <p>
          <input placeholder="Search . . . " onChange={this.handleChange} value={keyword}/>
        </p>
        <PhoneInfoList data={filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate}></PhoneInfoList>
      </div>
    );
  }
}

import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component{
    static defaultProps={
        list:[],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.data !== this.props.data; //다음 받아올 데이터가 현재 데이터랑 다른 배열일 때 true
    }
    render(){
        const {data, onRemove, onUpdate} = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate} />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}
export default PhoneInfoList;
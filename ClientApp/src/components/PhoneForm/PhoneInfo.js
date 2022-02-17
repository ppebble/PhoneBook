import React, {Component} from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        info:{
            name:'이름',
            phone:'010-0000-0000',
            id:0
        },
    }
    state = {//수정버튼을 눌렀을 때 editing 값을 true로 설정. true일 때는  text 타입의 값을 input타입으로 보여준다.
        editing : false,
        //input의 값은 유동적,  input 값을 담기 위해 각 필드 값도 설정
        name : '',
        phone: '',
    }
    shouldComponentUpdate(nextProps, nextState){
        if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info){
            return false;
        }
        return true;
    }
    handleRemove = () =>{//삭제버튼이 클릭되면 onRemove에 id를 넣어 호출
        const{info, onRemove} = this.props;
        onRemove(info.id);
    }
    handleToggleEdit = () =>{
        const{editing} = this.state;
        this.setState({ editing: !editing}); //editing 반전
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }//input에서 onChange 이벤트가 발생될 때 호출되는 함수
    
    componentDidUpdate(prevProps, prevState){
        //여기서는 eiditing 값이 바뀔 때 처리할 로직이 적혀있습니다.
        // 수정을 눌렀을 땐 기존의 값이 input타입 , 수정을 적용할 땐 input 값을 부모에 전달해줌
        const {info, onUpdate}= this.props;
        if(!prevState.editing && this.state.editing){
            this.setState({
                name: info.name,
                phone : info.phone
            })
        }
        if(prevState.editing && !this.state.editing){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render() {
        const style={
        border: '1px solid black',
        padding: '8px',
        argin : '8px'
            };
        const { editing } = this.state;

        if(editing){
            return(
                <div style={style}>
            <div>
            <input
                value={this.state.name}
                name="name"
                placeholder="이름"
                onChange={this.handleChange}
            />
            </div>
            <div>
            <input
                value={this.state.phone}
                name="phone"
                placeholder="전화번호"
                onChange={this.handleChange}
            />
            </div>
            <button onClick={this.handleToggleEdit}>적용</button>
            <button onClick={this.handleRemove}>삭제</button>
        </div>

            )
        }
        const {
            name, phone
            } = this.props.info;
            
            return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
            );
        }
        }
        
export default PhoneInfo;
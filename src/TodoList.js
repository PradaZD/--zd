import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);//super指的是父类，继承父类
        this.state = {
            inputValue: '',
            list: []
        }
    }
    handleAddList = () => {
        if (this.state.inputValue !== null && this.state.inputValue !== '') {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            })

        }

    }
    handleDeleteList = (index) => {
        const list = [...this.state.list];//拷贝
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        const { list } = this.state;
        return (
            <>
                <div>
                    {/* onChange事件监听，监听输入框中内容的变化 */}
                    <input
                        style={{ marginRight: 5 }}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleAddList}>提交</button>

                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => this.handleDeleteList(index)}
                                >{item}
                                </li>
                            )
                        })

                    }
                </ul>

            </>
        );
    }
}


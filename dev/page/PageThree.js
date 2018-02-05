import React, { Component } from 'react';
import { Button } from "antd";


class PageThree extends Component {

    addPlayer() {
        console.log('添加玩家');
    }
    render() {
        return (
            <div style={{ position: 'absolute', left: 150, top: 10, color: 'red' }}>
                <h1>this is a PageThree(该页添加玩家)</h1>
                <Button type="primary" onClick={this.addPlayer}>添加玩家</Button>
            </div>

        )
    }
}

export default PageThree;
import React, { Component } from 'react';
import { Button } from "antd";


class PageFour extends Component {
    addAD(){
        console.log('添加广告');
    }
    render() {
        return (
            <div style={{ position: 'absolute', left: 150, top: 10, color: 'red' }}>
                <h1>this is a PageFour(该页添加广告)</h1>
                <Button type='primary' onClick={this.addAD}>添加广告</Button>
            </div>

        )
    }
}

export default PageFour;
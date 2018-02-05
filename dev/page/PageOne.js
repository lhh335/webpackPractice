import React, { Component } from 'react';
import { Button } from 'antd';

class PageOne extends Component {

    componentDidMount() {

    }
    addAdmin() {
        console.log('添加管理员');
        var sourceData = {

        }
        console.log(fetch, 2222);
        fetch('/page/one', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(sourceData)
        }).then((res) => res.json()).then((data) => {
            console.log(data);
        })
    }
    render() {
        return (
            <div style={{ position: 'absolute', left: 150, top: 10, color: 'red' }}>
                <h1>this is a PageOne(在该页添加管理员)</h1>
                <Button type="primary" onClick={this.addAdmin}>添加管理员</Button>
            </div>
        )
    }
}

export default PageOne;
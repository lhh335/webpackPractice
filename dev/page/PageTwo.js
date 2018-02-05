
import React, { Component } from 'react';
import { Button } from 'antd';

class PageTwo extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', left: 150, top: 10, color: 'red' }}>
                <h1>this is a PageTwo(该页添加推广员)</h1>
                <Button type="primary" onClick={this.addPromoter}>添加推广员</Button>
            </div>
        )
    }
}

export default PageTwo;
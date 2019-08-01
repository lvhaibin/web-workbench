import * as React from 'react';
import { Button } from 'antd';

export default class Message extends React.Component{
    render() {
        return[
            <Button key="message" type="danger">message2</Button>,
            <Button key="message1" type="danger">message1</Button>
        ]
    }
};

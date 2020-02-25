import React, { Component } from 'react';
import {Form, Icon, Input, Button, Row, Col} from 'antd';
import io from "socket.io-client";

export class ChatPage extends Component {
    state= {
        chatMessage: ""
    }

    componentDidMount() {
        let server = "http://localhost:5000";

        this.socket = io(server);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <p style={{fontSize:'2rem', textAlign: 'center'}}>Real Time Chat</p>
                </div>

                <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <div className="infinite-container">
                        {/* {this.props.chats && (
                            <div>{this.renderCards()}</div>
                        )} */}
                        <div
                            ref={el => {
                                this.messagesEnd = el;
                            }}
                            style={{float: "left", clear: "both"}}
                        />
                    </div>

                    <Row>
                        <Form layout="inline">
                            <Col span={18}>
                                <Input id="message" prefix={<Icon type="message" style={{color: 'rgba(0,0,0,.25)'}} />} placeholder="Let's start talking" type="text" value={this.state.chatMessage} />
                            </Col>
                            <Col span={2}>

                            </Col>
                            <Col span={4}>
                                <Button type="primary" style={{width: '100%'}} htmlType="submit">
                                    <Icon type="enter"/>
                                </Button>
                            </Col>
                        </Form>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default ChatPage

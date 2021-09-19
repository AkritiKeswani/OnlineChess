import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class RoomCard extends Component {
    render() {
        return (
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.descr}</Card.Text>
                    <Button variant="primary" to={this.props.link}>Join Room</Button>
                </Card.Body>
            </Card>
        )
    }
}
import React from 'react';
import TowerDay from '../../components/TowerDay';
import { Container, Row, Col } from 'reactstrap';

export default class Days extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentDay: props.currentDay };
    }

    static getDerivedStateFromProps(props, state) {
        return { currentDay: props.currentDay };
    }

    isSpecialDay(day){
        return this.props.days.filter(d => d.day === day).length > 0;
    }

    render() {
        const days = this.props.days.map((d, index) => {
            return <Col key={index}><TowerDay currentDay={this.state.currentDay} day={d.day} onClick={this.props.onClick} key={'day' + d.day} /></Col>
        });
        const today = (new Date()).getDate();
        return (
            <div>
                <p>The Standard lighting colours are <b>'Red and White'</b></p>
                {(this.props.isSameMonth || !this.isSpecialDay(today)) && <p><a href='.' onClick={e => { e.preventDefault(); this.props.onClick(today) }}>Today</a></p>}                
                <p>Special Days of {this.props.month}</p>
                <Container>
                    <Row>{days}</Row>
                </Container>
            </div>
        );
    }
}

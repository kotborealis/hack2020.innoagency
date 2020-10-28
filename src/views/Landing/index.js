import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles.module.css';
import {counterIncrement} from '../../features/appSlice';
import {Button, Header, Icon, Label} from 'semantic-ui-react';

export const ViewLanding = () => {
    const counter = useSelector(state => state.app.counter);
    const dispatch = useDispatch();

    return <div>
        <Header as='h1' className={styles.header}>Hello world</Header>
        <Label>
            <Icon name='mail' /> {counter}
        </Label>
        <span><Button primary onClick={() => dispatch(counterIncrement())}><Icon name='plus'/></Button></span>
    </div>;
}
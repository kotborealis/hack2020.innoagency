import {Segment} from 'semantic-ui-react';
import {Grid} from 'semantic-ui-react';
import {Divider} from 'semantic-ui-react';
import React from 'react';

export const FormSegmentOr = ({left, right, divider = 'или'}) => (<Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
        <Divider vertical>{divider}</Divider>
        <Grid.Row verticalAlign='middle'>
            <Grid.Column>
                {left}
            </Grid.Column>
            <Grid.Column>
                {right}
            </Grid.Column>
        </Grid.Row>
    </Grid>
</Segment>);
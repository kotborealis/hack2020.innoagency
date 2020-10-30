import React from 'react';
import {Header} from 'semantic-ui-react';
import {MosHeader} from '../../components/MosHeader';
import {MosBody} from '../../components/MosBody';

export const ViewLanding = () => {
    return <>
        <MosHeader/>
        <MosBody>
            <Header>Landing</Header>
        </MosBody>
    </>;
}
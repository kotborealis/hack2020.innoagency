import React from 'react';
import {MosHeader} from '../../components/MosHeader';
import {MosBody} from '../../components/MosBody';
import {PetForm} from '../../components/PetForm';
import {Header} from 'semantic-ui-react';

export const ViewAddPet = () => {
    return <>
        <MosHeader/>
        <MosBody>
            <Header as={'h1'}>Добавление животного</Header>
            <PetForm/>
        </MosBody>
    </>;
}
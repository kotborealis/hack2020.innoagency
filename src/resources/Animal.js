import { Resource } from 'rest-hooks';

export class AnimalResource extends Resource {
    id = undefined;
    name = '';

    pk() {
        return this.id?.toString();
    }

    static urlRoot = '/api/v1/animal/'
}

export const AnimalResourceFixtures = {
    basic: [
        {
            request: AnimalResource.detailShape(),
            params: { id: 123 },
            result: {
                id: 123,
                name: 'hi doggie'
            }
        }
    ]
};
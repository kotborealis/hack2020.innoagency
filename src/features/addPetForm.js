import {createSlice} from '@reduxjs/toolkit';

const addPetFormSlice = createSlice({
    name: 'addPetForm',
    initialState: {
        common_info: {
            card_number: undefined,
            animal: {
                age: {
                    year: undefined,
                    month: undefined,
                    day: undefined
                },
                weight: undefined,
                name: undefined,
                gender: undefined,
                breed: undefined,
                color: undefined,
                fur: undefined,
                ears: undefined,
                tail: undefined,
                size: undefined,
            },
            description: undefined
        }
    },
    reducers: {},
});

export const {} = addPetFormSlice.actions;
export const addPetFormReducer = addPetFormSlice.reducer;
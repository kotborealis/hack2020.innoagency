import React from 'react';
import {Header, Checkbox, Dropdown, Form, Icon, Button, Segment, Step} from 'semantic-ui-react';
import {
    petBreedsOptions,
    petColorsOptions,
    petEarsOptions,
    petFurOptions,
    petGenders,
    petKinds, petSizeOptions, petTailOptions,
    administrativeDistrictsOptions, outCausesOptions, sheltersOptions
} from '../../models/dicts';
import {FormSegmentOr} from '../FormSegmentOr';
import {current} from '@reduxjs/toolkit';

export const PetForm = () => {
    const [state, setState] = React.useState({});

    const petBreeds = petBreedsOptions?.[state.common_info?.kind] || [];
    const petColors = petColorsOptions?.[state.common_info?.kind] || [];
    const petFur = petFurOptions?.[state.common_info?.kind] || [];
    const petEars = petEarsOptions;
    const petTail = petTailOptions;
    const petSize = petSizeOptions;

    const [treatments, setTreatments] = React.useState([{}]);
    const [vaccinations, setVaccinations] = React.useState([{}]);

    const handleChange = (e, {name, value}) => {
        const nameStack = name.split('.');
        const root = {...state};
        let currentState = root;
        for(let key of nameStack.slice(0, -1)){
            if(!currentState[key]) currentState[key] = {};
            currentState = currentState[key];
        }
        currentState[nameStack.pop()] = value;
        setState(root);
    };

    console.log({
        ...state,
        treatment_info: treatments,
        vaccination_info: vaccinations,
    });

    return (
        <Form>
            <Segment.Group>
                <Segment>
                    <Header as={'h2'}>Общие сведения</Header>
                    <Form.Input fluid label='Карточка учета животного, №' name='common_info.card_number'
                                onChange={handleChange}
                                placeholder='0000a-00'/>

                    <Segment.Group><Segment>
                        <Header as={'h3'}>Биологические сведения</Header>
                        <Form.Select
                            onChange={handleChange}
                            fluid label='Вид' name='common_info.kind' options={petKinds} placeholder={'Вид'}/>
                        <Form.Input fluid label='Возраст, год' name='common_info.animal.age.year' placeholder='1990'
                                    onChange={handleChange}/>
                        <Form.Input fluid label='Возраст, месяц' name='common_info.animal.age.month' placeholder={'1'}
                                    onChange={handleChange}/>
                        <Form.Input fluid label='Возраст, день' name='common_info.animal.age.day' placeholder={'1'}
                                    onChange={handleChange}/>
                        <Form.Input fluid label='Вес' name='common_info.animal.weight' placeholder={'1'}
                                    onChange={handleChange}/>
                        <Form.Input fluid label='Кличка' name='common_info.name' placeholder={'Кличка'}
                                    onChange={handleChange}/>
                        <Form.Select fluid label='Пол' name='common_info.animal.gender' options={petGenders}
                                     onChange={handleChange}
                                     placeholder={'Пол'}/>
                        <label>Порода</label>
                        <Dropdown placeholder={'Порода'} name="common_info.animal.breed" fluid search selection
                                  onChange={handleChange}
                                  options={petBreeds}/>
                        <label>Окрас</label>
                        <Dropdown placeholder={'Окрас'} name="common_info.animal.color" fluid search selection
                                  onChange={handleChange}
                                  options={petColors}/>
                        <label>Шерсть</label>
                        <Dropdown placeholder={'Шерсть'} name="common_info.animal.fur" fluid search selection
                                  onChange={handleChange}
                                  options={petFur}/>
                        <label>Уши</label>
                        <Dropdown placeholder={'Уши'} name="common_info.animal.ears" fluid search selection
                                  onChange={handleChange}
                                  options={petEars}/>
                        <label>Хвост</label>
                        <Dropdown placeholder={'Хвост'} name="common_info.animal.tail" fluid search selection
                                  onChange={handleChange}
                                  options={petTail}/>
                        <label>Размер</label>
                        <Dropdown placeholder={'Размер'} name="common_info.animal.size" fluid search selection
                                  onChange={handleChange}
                                  options={petSize}/>
                    </Segment></Segment.Group>

                    <Form.Input fluid label='Особые приметы' name='common_info.description'
                                onChange={handleChange}
                                placeholder={'Особые приметы'}/>
                    <Form.Input fluid label='Вольер №' name='common_info.cage_number' placeholder={'Клетка'}
                                onChange={handleChange}/>
                </Segment>

                <Segment>
                    <Header as={'h2'}>Дополнительные сведения</Header>
                    <Form.Input fluid label='Идентификационная метка' name='additional_info.identification_mark'
                                onChange={handleChange}
                                placeholder={'Идентификационная метка'}/>
                    <Form.Input fluid label='Дата стериализации' name='additional_info.sterilization.date'
                                onChange={handleChange}
                                placeholder={'Дата стерилизации'}/>
                    <Checkbox label='Факт стериализации'/>
                    <Form.Input fluid label='Комментарий' name='additional_info.sterilization.comment'
                                onChange={handleChange}
                                placeholder={'Комментарий'}/>
                    <Form.Input fluid label='Ветеринар (ФИО)' name='additional_info.veterinarian_fullname'
                                onChange={handleChange}
                                placeholder={'Ветеринар (ФИО)'}/>
                    <Checkbox label='Социализировано' name='additional_info.socialization' onChange={handleChange}/>
                </Segment>

                <Segment>
                    <Header as={'h2'}>Сведения об отлове</Header>
                    <Form.Input fluid label='Заказ-наряд/акт о поступлении животного' name='catching_info.admission_act'
                                onChange={handleChange}
                                placeholder={'Заказ-наряд/акт о поступлении животного'}/>
                    <Form.Input fluid label='Заказ-наряд/акт о поступлении животного, дата'
                                name='catching_info.admission_date' onChange={handleChange}
                                placeholder={'Заказ-наряд/акт о поступлении животного, дата'}/>
                    <label>Администранивный округ</label>
                    <Dropdown placeholder={'Администранивный округ'} name="catching_info.district" fluid search
                              selection
                              onChange={handleChange}
                              options={administrativeDistrictsOptions}/>
                    <Form.Input fluid label='Акт отлова №' name='catching_info.catching_act'
                                onChange={handleChange}
                                placeholder={'Акт отлова №'}/>
                    <Form.Input fluid label='Адрес места отлова' name='catching_info.address'
                                onChange={handleChange}
                                placeholder={'Адрес места отлова'}/>
                </Segment>

                <Segment>
                    <Header as={'h2'}>Сведения о новых владельцах</Header>
                    <FormSegmentOr
                        left={<>
                            <Form.Input fluid label='Юридическое лицо' name='new_owners_info.legal_entity'
                                        onChange={handleChange}
                                        placeholder={'Юридическое лицо'}/>
                            <Form.Input fluid label='Опекун, ФИО' name='new_owners_info.guardian'
                                        onChange={handleChange}
                                        placeholder={'Опекун, ФИО'}/>
                        </>}
                        right={
                            <Form.Input fluid label='Физичесокое лицо, ФИО' name='new_owners_info.individual'
                                        onChange={handleChange}
                                        placeholder={'Физичесокое лицо, ФИО'}/>
                        }
                    />
                </Segment>

                <Segment>
                    <Header as={'h2'}>Движение животного</Header>
                    <FormSegmentOr
                        divider={<Icon name='angle double right'/>}
                        left={<>
                            <Header as={'h2'}>Прибытие</Header>
                            <Form.Input fluid label='Дата поступления в приют' name='pet_movement.date_in'
                                        onChange={handleChange}
                                        placeholder={'Дата поступления в приют'}/>
                            <Form.Input fluid label='Акт №' name='pet_movement.act'
                                        placeholder={'Акт №'}/>
                        </>}
                        right={<>
                            <Header as={'h2'}>Выбытие</Header>
                            <Form.Input fluid label='Дата выбытия из приюта' name='pet_movement.date_out'
                                        onChange={handleChange}
                                        placeholder={'Дата выбытия из приюта'}/>
                            <Form.Input fluid label='Причина выбытия' name='pet_movement.out_case'
                                        onChange={handleChange}
                                        placeholder={'Причина выбытия'}/>
                            <label>Причина выбытия</label>
                            <Dropdown placeholder={'Причина выбытия'} name='pet_movement.out_case' fluid search
                                      onChange={handleChange}
                                      selection
                                      options={outCausesOptions}/>
                            <Form.Input fluid label='Акт/договор №' name='pet_movement.act_contract'
                                        onChange={handleChange}
                                        placeholder={'Акт/договор №'}/>
                        </>}
                    />
                </Segment>

                <Segment>
                    <Header as={'h2'}>Ответственные за животное</Header>
                    <label>Приют</label>
                    <Dropdown placeholder={'Приют'} name='responsible_for_pet.shelter' fluid search selection
                              onChange={handleChange}
                              options={sheltersOptions}/>
                    <Form.Input fluid label='Сотрудник по уходу за животным' name='responsible_for_pet.caretaker'
                                onChange={handleChange}
                                placeholder={'Сотрудник по уходу за животным'}/>

                    <Header as={'h2'}>Сведения об обработке от экто- и эндопаразитов</Header>
                    <Segment.Group>
                        {treatments.map((treatment, i) => <Segment>
                            <Form.Input fluid label='Дата'
                                        onChange={(e, {value}) =>
                                            setTreatments([...treatments.slice(0, i), {
                                                ...treatment,
                                                date: value
                                            }, ...treatments.slice(i + 1)])}
                                        value={treatment.date}
                                        placeholder={'Дата'}/>
                            <Form.Input fluid label='Название препарата'
                                        onChange={(e, {value}) =>
                                            setTreatments([...treatments.slice(0, i), {
                                                ...treatment,
                                                drug_name: value
                                            }, ...treatments.slice(i + 1)])}
                                        value={treatment.drug_name}
                                        placeholder={'Название препарата'}/>
                            <Form.Input fluid label='Доза'
                                        onChange={(e, {value}) =>
                                            setTreatments([...treatments.slice(0, i), {
                                                ...treatment,
                                                dose: value
                                            }, ...treatments.slice(i + 1)])}
                                        value={treatment.dose}
                                        placeholder={'Доза'}/>
                        </Segment>)}
                    </Segment.Group>
                    <Button primary onClick={() => setTreatments([...treatments, {}])}>
                        <Icon name='plus'/> Добавить обработку
                    </Button>
                </Segment>

                <Segment>
                    <Header as={'h2'}>Сведения о вакцинации</Header>

                    <Segment.Group>
                        {vaccinations.map((vaccination, i) => <Segment>
                            <Form.Input fluid label='Дата'
                                        onChange={(e, {value}) =>
                                            setVaccinations([...vaccinations.slice(0, i), {
                                                ...vaccination,
                                                date: value
                                            }, ...vaccinations.slice(i + 1)])}
                                        value={vaccination.date}
                                        placeholder={'Дата'}/>
                            <Form.Input fluid label='Вид вакцины'
                                        onChange={(e, {value}) =>
                                            setVaccinations([...vaccinations.slice(0, i), {
                                                ...vaccination,
                                                name: value
                                            }, ...vaccinations.slice(i + 1)])}
                                        value={vaccination.name}
                                        placeholder={'Вид вакцины'}/>
                            <Form.Input fluid label='№ серии'
                                        onChange={(e, {value}) =>
                                            setVaccinations([...vaccinations.slice(0, i), {
                                                ...vaccination,
                                                series: value
                                            }, ...vaccinations.slice(i + 1)])}
                                        value={vaccination.series}
                                        placeholder={'№ серии'}/>
                        </Segment>)}
                    </Segment.Group>
                    <Button primary onClick={() => setVaccinations([...vaccinations, {}])}>
                        <Icon name='plus'/> Добавить вакцинацию
                    </Button>
                </Segment>

                <Segment>
                    <Header as={'h2'}>Сведения о состоянии здоровья</Header>
                    <Form.Input fluid label='Дата осмотра' name='health_info.date'
                                onChange={handleChange}
                                placeholder={'Дата осмотра'}/>
                    <Form.Input fluid label='Анамез' name='health_info.anamesis'
                                onChange={handleChange}
                                placeholder={'Анамез'}/>
                </Segment>

            </Segment.Group>

            <Form.Button content='Отправить'/>
        </Form>
    );
};
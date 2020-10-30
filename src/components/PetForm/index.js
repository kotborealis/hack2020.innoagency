import React from 'react';
import {Header, Checkbox, Dropdown, Form, Icon, Button, Segment} from 'semantic-ui-react';
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

export const PetForm = () => {
    const [petKind, setPetKind] = React.useState(undefined);
    const petBreeds = petBreedsOptions?.[petKind] || [];
    const petColors = petColorsOptions?.[petKind] || [];
    const petFur = petFurOptions?.[petKind] || [];
    const petEars = petEarsOptions;
    const petTail = petTailOptions;
    const petSize = petSizeOptions;

    const [treatments, setTreatments] = React.useState([{}]);
    const [vaccinations, setVaccinations] = React.useState([{}]);

    return (
        <Form>
            <Segment.Group>
                <Segment>
                    <Header as={'h2'}>Общие сведения</Header>
                    <Form.Input fluid label='Карточка учета животного, №' id='common_info.card_number'
                                placeholder='0000a-00'/>

                    <Segment.Group><Segment>
                        <Header as={'h3'}>Биологические сведения</Header>
                        <Form.Select
                            onChange={(e, {value}) =>
                                setPetKind(value)
                            }
                            fluid label='Вид' id='common_info.kind' options={petKinds} placeholder={'Вид'}/>
                        <Form.Input fluid label='Возраст, год' id='common_info.animal.age.year' placeholder='1990'/>
                        <Form.Input fluid label='Возраст, месяц' id='common_info.animal.age.month' placeholder={'1'}/>
                        <Form.Input fluid label='Возраст, день' id='common_info.animal.age.day' placeholder={'1'}/>
                        <Form.Input fluid label='Вес' id='common_info.animal.weight' placeholder={'1'}/>
                        <Form.Input fluid label='Кличка' id='common_info.name' placeholder={'Кличка'}/>
                        <Form.Select fluid label='Пол' id='common_info.animal.gender' options={petGenders}
                                     placeholder={'Пол'}/>
                        <label>Порода</label>
                        <Dropdown placeholder={'Порода'} id="common_info.animal.breed" fluid search selection
                                  options={petBreeds}/>
                        <label>Окрас</label>
                        <Dropdown placeholder={'Окрас'} id="common_info.animal.color" fluid search selection
                                  options={petColors}/>
                        <label>Шерсть</label>
                        <Dropdown placeholder={'Шерсть'} id="common_info.animal.fur" fluid search selection
                                  options={petFur}/>
                        <label>Уши</label>
                        <Dropdown placeholder={'Уши'} id="common_info.animal.ears" fluid search selection
                                  options={petEars}/>
                        <label>Хвост</label>
                        <Dropdown placeholder={'Хвост'} id="common_info.animal.tail" fluid search selection
                                  options={petTail}/>
                        <label>Размер</label>
                        <Dropdown placeholder={'Размер'} id="common_info.animal.size" fluid search selection
                                  options={petSize}/>
                    </Segment></Segment.Group>

                    <Form.Input fluid label='Особые приметы' id='common_info.description'
                                placeholder={'Особые приметы'}/>
                    <Form.Input fluid label='Вольер №' id='common_info.cage_number' placeholder={'Клетка'}/>
                </Segment>

                <Segment>
                    <Header as={'h2'}>Дополнительные сведения</Header>
                    <Form.Input fluid label='Идентификационная метка' id='additional_info.identification_mark'
                                placeholder={'Идентификационная метка'}/>
                    <Form.Input fluid label='Дата стериализации' id='additional_info.sterilization.date'
                                placeholder={'Дата стерилизации'}/>
                    <Checkbox label='Факт стериализации'/>
                    <Form.Input fluid label='Комментарий' id='additional_info.sterilization.comment'
                                placeholder={'Комментарий'}/>
                    <Form.Input fluid label='Ветеринар (ФИО)' id='additional_info.veterinarian_fullname'
                                placeholder={'Ветеринар (ФИО)'}/>
                    <Checkbox label='Социализировано' id='additional_info.socialization'/>
                </Segment>

                <Segment>
                    <Header as={'h2'}>Сведения об отлове</Header>
                    <Form.Input fluid label='Заказ-наряд/акт о поступлении животного' id='catching_info.admission_act'
                                placeholder={'Заказ-наряд/акт о поступлении животного'}/>
                    <Form.Input fluid label='Заказ-наряд/акт о поступлении животного, дата'
                                id='catching_info.admission_date'
                                placeholder={'Заказ-наряд/акт о поступлении животного, дата'}/>
                    <label>Администранивный округ</label>
                    <Dropdown placeholder={'Администранивный округ'} id="catching_info.district" fluid search selection
                              options={administrativeDistrictsOptions}/>
                    <Form.Input fluid label='Акт отлова №' id='catching_info.catching_act'
                                placeholder={'Акт отлова №'}/>
                    <Form.Input fluid label='Адрес места отлова' id='catching_info.address'
                                placeholder={'Адрес места отлова'}/>
                </Segment>

                <Segment>
                    <Header as={'h2'}>Сведения о новых владельцах</Header>
                    <FormSegmentOr
                        left={<>
                            <Form.Input fluid label='Юридическое лицо' id='new_owners_info.legal_entity'
                                        placeholder={'Юридическое лицо'}/>
                            <Form.Input fluid label='Опекун, ФИО' id='new_owners_info.guardian'
                                        placeholder={'Опекун, ФИО'}/>
                        </>}
                        right={
                            <Form.Input fluid label='Физичесокое лицо, ФИО' id='new_owners_info.individual'
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
                            <Form.Input fluid label='Дата поступления в приют' id='pet_movement.date_in'
                                        placeholder={'Дата поступления в приют'}/>
                            <Form.Input fluid label='Акт №' id='pet_movement.act'
                                        placeholder={'Акт №'}/>
                        </>}
                        right={<>
                            <Header as={'h2'}>Выбытие</Header>
                            <Form.Input fluid label='Дата выбытия из приюта' id='pet_movement.date_out'
                                        placeholder={'Дата выбытия из приюта'}/>
                            <Form.Input fluid label='Причина выбытия' id='pet_movement.out_case'
                                        placeholder={'Причина выбытия'}/>
                            <label>Причина выбытия</label>
                            <Dropdown placeholder={'Причина выбытия'} id='pet_movement.out_case' fluid search selection
                                      options={outCausesOptions}/>
                            <Form.Input fluid label='Акт/договор №' id='pet_movement.act_contract'
                                        placeholder={'Акт/договор №'}/>
                        </>}
                    />
                </Segment>

                <Segment>
                    <Header as={'h2'}>Ответственные за животное</Header>
                    <label>Приют</label>
                    <Dropdown placeholder={'Приют'} id='responsible_for_pet.shelter' fluid search selection
                              options={sheltersOptions}/>
                    <Form.Input fluid label='Сотрудник по уходу за животным' id='responsible_for_pet.caretaker'
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
                                            setTreatments([...treatments.slice(0, i), {
                                                ...vaccination,
                                                date: value
                                            }, ...vaccination.slice(i + 1)])}
                                        value={vaccination.date}
                                        placeholder={'Дата'}/>
                            <Form.Input fluid label='Вид вакцины'
                                        onChange={(e, {value}) =>
                                            setTreatments([...treatments.slice(0, i), {
                                                ...vaccination,
                                                name: value
                                            }, ...vaccination.slice(i + 1)])}
                                        value={vaccination.name}
                                        placeholder={'Вид вакцины'}/>
                            <Form.Input fluid label='№ серии'
                                        onChange={(e, {value}) =>
                                            setTreatments([...treatments.slice(0, i), {
                                                ...vaccination,
                                                series: value
                                            }, ...vaccination.slice(i + 1)])}
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
                    <Form.Input fluid label='Дата осмотра' id='health_info.date'
                                placeholder={'Дата осмотра'}/>
                    <Form.Input fluid label='Анамез' id='health_info.anamesis'
                                placeholder={'Анамез'}/>
                </Segment>

            </Segment.Group>
        </Form>
    );
};
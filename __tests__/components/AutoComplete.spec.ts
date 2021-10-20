import { shallowMount } from '@vue/test-utils';
import { JSONUser } from '../../src/types/resources/JSONPlaceholderResponse';
import { Autocomplete } from '../../src/components';

describe('', () => {
    let wrapper: any;
    let vm: any;
    let users: JSONUser[];
    beforeEach(() => {
        users = [
            {
                id: 1,
                name: 'Test',
                username: 'user',
                email: 'mail@mail.ru',
            },
            {
                id: 2,
                name: 'TestSlot',
                username: 'user2',
                email: 'mail2@mail.ru',
            },
            {
                id: 3,
                name: 'itemNijnii',
                username: 'user3',
                email: 'mail3@mail.ru',
            },
        ];

        wrapper = shallowMount(Autocomplete, {
            propsData: {
                items: users,
                loading: false,
                searchBy: 'name',
                selected: null,
            },
            scopedSlots: {
                listItem: function (props: any) {
                    return this.$createElement('p', [props.item.name]);
                },
            },
        });

        vm = wrapper.vm;
        vm.isFocus = true;
    });

    it('should work slots', function () {
        const contentBlock = wrapper.find('.content-block');
        expect(contentBlock.html()).toContain(users[1].name);
    });

    it('should correct select item', function () {
        const item = wrapper.findAll('.list-item').at(1);
        expect(wrapper.emitted().select).toBeFalsy();

        item.trigger('click');

        //проверка, что тыкнут нужный элемент
        expect(wrapper.emitted().select[0][0].id).toBe(users[1].id);
        //а так же что инпут изменился
        expect(wrapper.emitted().searchInput[0][0]).toBe(users[1].name);
    });

    it('should navigation work correct', function () {
        //на wrapper.contains ругается, ничего лучше, чем такой дурацкий матчер я не нашел
        //тут просто смотрим, что нет фокуса
        expect(wrapper.find('.focus-item')).toEqual({
            selector: '.focus-item',
        });
        wrapper.trigger('keydown', {
            key: 'ArrowDown',
        });
        expect(vm.indexActive).toBe(0);

        wrapper.trigger('keydown', {
            key: 'ArrowUp',
        });
        //поднимется вверх
        expect(vm.indexActive).toBe(2);
    });
});

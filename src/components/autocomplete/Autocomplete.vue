<template>
    <div @click.stop="onClick" @keydown="keyDownNavigation">
        <div v-if="isFocus" class="overlay"></div>
        <div class="autocomplete" :style="{ zIndex: isFocus ? 51 : 49 }">
            <div class="search-block">
                <input
                    @input="onSearchInput"
                    v-model="searchInput"
                    type="text"
                    class="search-field"
                    placeholder="Search"
                    ref="searchRef"
                />

                <magnify-icon class="search-icon" />
            </div>

            <template v-if="isFocus">
                <div v-if="loading">
                    <h1>Loading</h1>
                </div>
                <ul
                    ref="listRef"
                    v-else
                    class="content-block"
                    style="padding: 0; background-color: white"
                >
                    <li
                        tabindex="0"
                        v-for="(item, idx) of items"
                        class="list-item"
                        :class="getClassNameItem(item, idx)"
                        :key="item.id"
                        @click.stop="selectItem(item)"
                    >
                        <slot name="listItem" v-bind:item="item"> </slot>
                    </li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator';
import MagnifyIcon from '@/components/icons/MagnifyIcon.vue';
import { focusRef } from '@/types/focusRef';
@Component({
    components: { MagnifyIcon },
})
export default class Autocomplete extends Vue {
    @Prop() items!: any[];
    @Prop() loading!: boolean;
    @Prop() searchBy!: string;
    @Model('select') selected!: any;
    searchInput = '';
    isFocus = false;
    indexActive: null | number = null;
    isUploadItems = false;
    get searchRef(): focusRef {
        return this.$refs.searchRef as focusRef;
    }

    @Watch('isFocus')
    getListRef(): focusRef {
        return this.$refs.listRef as focusRef;
    }

    onClick(event: any): void {
        if (event?.target?.className === 'overlay') {
            this.isFocus = false;
        } else {
            if (!this.isUploadItems) {
                this.isUploadItems = true;
                this.$emit('loadData');
            }
            this.isFocus = true;

            this.searchRef.focus();
        }
    }

    onSearchInput(event: InputEvent): void {
        this.$emit('select', null);
        this.$emit('searchInput', (event.target as HTMLInputElement).value);
    }

    selectItem(item: any): void {
        this.$emit('select', item);
        this.searchInput = item[this.searchBy];
        this.$emit('searchInput', item[this.searchBy]);
        this.isFocus = false;
    }

    getClassNameItem(item: any, idx: number): string {
        if (this.selected === item) {
            return 'active-item';
        }
        if (this.indexActive === idx) {
            return 'focus-item';
        }
        return '';
    }

    keyDownNavigation(e: KeyboardEvent): void {
        const isArrowDown = e.key === 'ArrowDown';
        const isArrowUp = e.key === 'ArrowUp';
        const isEnter = e.key === 'Enter';
        if (isArrowDown || isArrowUp) {
            //сверху находится 0 индекс, снизу -1 (ниже по формуле минусовый индекс сделаю последним)
            //поэтому если нажать вниз, то надо прибавлять 1, чтобы активный элемент спустился вниз,
            // и наоборот вычитать 1, чтобы подняться вверх
            const offset = isArrowDown ? 1 : -1;
            //проверка на инициализацию активного элемента
            if (this.indexActive === null) {
                this.indexActive = isArrowDown ? -1 : 0;
            }
            //если получивщийся индекс выходит за пределы масива, то сделать нулевым
            this.indexActive = (this.indexActive + offset) % this.items.length;
            //если отрицательный, то сделать последним
            if (this.indexActive < 0) {
                this.indexActive = this.items.length - 1;
            }
            this.getListRef().childNodes[this.indexActive].focus();
        }
        if (isEnter && this.indexActive !== null) {
            this.selectItem(this.items[this.indexActive]);
        }
    }
}
</script>

<style scoped lang="scss">
.autocomplete {
    margin: 20px;
    position: relative;
    width: 400px;
}

.search-block {
    background-color: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 10px;
    display: flex;
    border-bottom: 1px solid grey;
}

.search-field {
    width: 100%;
    border: none;
    outline: none;
    height: 36px;
    font-size: 16px;
    color: grey;
    transition: all 0.2s;
    &:focus {
        color: black;
    }
}

.search-icon {
    color: silver;
    width: 36px;
    height: 36px;
    margin-right: 5px;
    order: -1;
    transition: all 0.2s;
}

.search-field:focus + .search-icon {
    color: grey;
}

.content-block {
    max-height: 250px;
    overflow-y: auto;
    margin: 0;
    left: 0;
    right: 0;
    position: absolute;
}

.active-item {
    background-color: #2196f3;
    color: white;
}

.focus-item {
    background-color: #e0e0e0;
}

.list-item {
    padding-top: 10px;
    font-size: 17px;
    cursor: pointer;
    list-style: none;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    &:focus {
        outline: none;
    }
}

.overlay {
    z-index: 50;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
}
</style>

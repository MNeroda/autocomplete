<template>
    <div style="display: flex">
        <autocomplete
            v-model="selected"
            :items="filteredItems"
            @searchInput="onAutocompleteSearchInput"
            @loadData="loadData"
            :loading="loading"
            searchBy="name"
        >
            <template v-slot:listItem="user">
                <div style="display: flex; padding: 5px">
                    <img class="user-avatar" :src="getUrlAvatar(user.item)" />
                    <div style="padding: 5px">
                        <div style="font-size: 18px">{{ user.item.name }}</div>
                        <div style="font-size: 14px; color: #777777">
                            {{ user.item.email }}
                        </div>
                    </div>
                </div>
            </template>
        </autocomplete>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Autocomplete from '@/components/autocomplete/Autocomplete.vue';
import { JSONPlaceholderResource } from '@/resources/JSONPlaceholderResource';
import { JSONPhoto, JSONUser } from '@/types/resources/JSONPlaceholderResponse';

const jsonResource = new JSONPlaceholderResource();
@Component({
    components: { Autocomplete },
})
export default class Home extends Vue {
    users: JSONUser[] = [];
    filteredItems: JSONUser[] = [];
    avatars: JSONPhoto[] = [];
    selected: JSONUser | null = null;
    loading = true;

    //Я считаю, что этот метод фильтрации объектов не должен
    //быть в компоненте Autocomplete потому, что такие фильтры привязанны к конкретным
    //объектам и реализациям фильтров. При таком подходе без проблем можно сделать фильтр и на фронте
    //и на бэке (через вебсокеты или cancelToken у axios),
    //а для переиспользования компонента Autocomplete он ничего не должен знать
    //о том, что именно он должен рендерить
    //и ещё, я такие комментарии в реальных проектах бы не писал =)
    onAutocompleteSearchInput(event: string): void {
        if (!this.selected && this.users.length && !this.loading) {
            this.filteredItems = this.users.filter((item) =>
                item.name
                    .trim()
                    .toLowerCase()
                    .includes(event.trim().toLowerCase())
            );
        }
    }

    async loadData(): Promise<void> {
        this.users = await jsonResource.getUsers();
        this.filteredItems = this.users;
        this.avatars = await jsonResource.getAvatars();
        this.loading = false;
    }

    getUrlAvatar(user: JSONUser): string {
        const index = this.avatars.findIndex((avatar) => avatar.id === user.id);
        if (index > -1) {
            return this.avatars[index].thumbnailUrl;
        }
        return 'https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-300x293.png';
    }
}
</script>

<style scoped lang="scss">
.user-avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
</style>

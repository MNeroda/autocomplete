import { BaseResource } from '@/resources/BaseResource';
import { JSONPhoto, JSONUser } from '@/types/resources/JSONPlaceholderResponse';

export class JSONPlaceholderResource extends BaseResource {
    constructor() {
        super('https://jsonplaceholder.typicode.com/');
    }

    getUsers(): Promise<JSONUser[]> {
        return this.axios.get('users').then((res) => res.data);
    }

    getAvatars(): Promise<JSONPhoto[]> {
        return this.axios
            .get('photos', {
                params: {
                    _limit: 10,
                },
            })
            .then((res) => res.data);
    }
}

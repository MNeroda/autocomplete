<template>
    <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMagnify } from '@mdi/js';

@Component({
    components: { SvgIcon },
})
export default class MagnifyIcon extends Vue {
    path = mdiMagnify;
}
</script>

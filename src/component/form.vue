<template>
    <div>
        <label>
            <input type="checkbox" v-model="hideAll"/>
            <span class="description">「全員」を表示しない</span>
            <span class="note">
                「全員に公開」の記事を一覧から取り除いた、「更新順」「作成順」のリンクをナビゲーションに追加します
            </span>
        </label>
    </div>
</template>
<script lang="ts">
    import {Component, Watch, Vue} from 'vue-property-decorator'
    import Event from '../modules/FormEvent'

    @Component
    export default class form extends Vue {
        hideAll: boolean = true

        @Watch('hideAll')
        onHideAll(newValue: boolean, oldValue: boolean) {
            this.$emit(Event.changeHideAll, newValue, oldValue)
        }
    }
</script>
<style scoped>
    div {
        padding: 8px;
    }
    label {
        cursor: pointer;
    }
    .description {
        white-space: nowrap;
    }
    .note {
        display: block;
        font-size: 80%;
        margin: 8px 8px 0 8px;
        width: 200px;
    }
</style>
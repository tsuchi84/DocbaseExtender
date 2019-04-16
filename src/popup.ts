import Vue from 'vue';
import Form from './component/form.vue';
import './resource/popup.css';
import LocalStorageKey from "./modules/LocalStorageKey";
import FormEvent from './modules/FormEvent'

const form = new Vue(Form).$mount('#form');
form.$on(FormEvent.changeHideAll, (value: boolean) => {
    const values: LocalStorageKey.HideAllGroup =  {
        hideAllGroup: value
    }
    chrome.storage.local.set(values)
    console.log(values)
})

chrome.storage.local.get(LocalStorageKey.defaultValue, (values) => {
    form.$data.hideAll = values.hideAllGroup;
    console.log(values)
})

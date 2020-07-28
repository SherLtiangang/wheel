import Vue from 'vue'
import Icon from './components/Icon/icon'
import Button from './components/Button/button'
import ButtonGroup from './components/Button/button-group'
import Input from './components/Input/input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hello'
    },
    methods: {
        inputChange(e){
            console.log(e.target.value);
        }
    }
})
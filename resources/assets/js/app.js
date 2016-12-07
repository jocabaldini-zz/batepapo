
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

//Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data: {
        roomId: roomId,
        userId: userId,
        content: '',
        users: [],
        messages: []
    },
    mounted(){
        Echo.join(`room.${roomId}`)
            .listen('SendMessage', (e) => {
                this.messages.push(e);
            })
            .here((users) => {
                this.users = users;
            })
            .joining((user) => {
                this.users.push(user);
                jQuery.notify(`<strong>${user.name}</strong> entrou no chat.`, {allow_dismiss: true})
            })
            .leaving((user) => {
                this.removeUser(user);
            })
    },
    methods: {
        sendMessage(){
            Vue.http.post(`/chat/rooms/${this.roomId}/message`, {
                'content': this.content
            });
        },
        removeUser(user){
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
        },
        createPhoto(email){
            let a = `http://www.gravatar.com/avatar/${md5(email)}.jpg`;
            return `http://www.gravatar.com/avatar/${md5(email)}.jpg`;
        }
    }
});

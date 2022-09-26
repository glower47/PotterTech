<template>
  <div>

    <div class="dialog-center-point" :class="{'show-dialog': showChat}">
        <div class="dialog-content" :class="{'show-dialog': showChat}">
            hello, cu ce te putem ajuta?
        </div>
    </div>

    <button class="floating-button" :class="{'chat-btn-active': showChat}" @click="showOrHideChat()">
        <svg id="open-svg" :class="{'show-svg': showChat}" viewBox="0 0 100 100" y="0" x="0" width="90%" height="100%">
            <g>
                <path  
                    id="button-first-envelope"
                    d="M72.903 14.078H15.427c-4.247 0-7.927 3.078-7.927 7.326v29.952c0 4.247 3.679 8.055 7.927 8.055h6.24v14.091c6.611-2.188 11.916-7.48 13.731-14.091h37.505c4.247 0 7.319-3.808 7.319-8.055V21.403c0-4.247-3.072-7.325-7.319-7.325z"
                />
                <path 
                    id="button-second-envelope"
                    d="M85.889 26.057v25.576c0 6.863-6.067 12.434-12.986 12.434H38.902c-1.068 2.833-2.531 4.585-4.335 6.619.7.213 1.442-.008 2.212-.008h28.297c1.815 7.556 6.647 13.057 14.203 15.244V70.678h3.066c5.74 0 10.156-3.966 10.156-9.705v-27.15c-.001-4.132-2.834-7.504-6.612-7.766z" 
                />
                <g>
                    <circle id="button-circle-1" r="4.5" cy="37.5" cx="23.2"></circle>
                    <circle id="button-circle-2" r="4.5" cy="37.5" cx="43"></circle>
                    <circle id="button-circle-3" r="4.5" cy="37.5" cx="62.8"></circle>
                </g>
            </g>
        </svg>
        <svg id="exit-svg" :class="{'show-svg': !showChat}" viewBox="0 0 100 100" y="0" x="0" width="100%" height="100%">
            <g>
                <path d="M16.3 29.6h8.1v52.3h-8.1z" fill="#e0e0e0" style="fill:rgb(86, 153, 210);" />
                <path d="M75.1 29.6h8.1v52.3h-8.1z" fill="#e0e0e0" style="fill:rgb(86, 153, 210);" />
                <path fill="#849b87" d="M88.1 48.7H11.9c-2.4 0-4.4-2-4.4-4.4V22.5c0-2.4 2-4.4 4.4-4.4h76.2c2.4 0 4.4 2 4.4 4.4v21.8c0 2.4-2 4.4-4.4 4.4z" style="fill:rgb(216, 235, 249);" />
                <path stroke-miterlimit="10" stroke-width="1.5" stroke="#fff" fill="#849b87" d="M87 46.1H13c-1.6 0-2.8-1.3-2.8-2.8V23.6c0-1.6 1.3-2.8 2.8-2.8h74c1.6 0 2.8 1.3 2.8 2.8v19.7c.1 1.5-1.2 2.8-2.8 2.8z" style="stroke:rgb(29, 63, 114);fill:rgb(216, 235, 249);" />
            <g >
                <path fill="#fff" d="M37.2 34.4h-5.4V38h6.3v2.2H29V26.8h9.1V29h-6.3v3.2h5.4v2.2z" style="fill:rgb(29, 63, 114);" ></path>
                <path fill="#fff" d="M46.2 31.4l2.5-4.7H52l-4 6.7 4.1 6.8h-3.3l-2.6-4.8-2.6 4.8h-3.3l4.1-6.8-4-6.7h3.2l2.6 4.7z" style="fill:rgb(29, 63, 114);" ></path>
                <path fill="#fff" d="M58 40.3h-2.8V26.8H58v13.5z" style="fill:rgb(29, 63, 114);" ></path>
                <path fill="#fff" d="M72.3 29h-4.2v11.3h-2.8V29h-4.1v-2.3h11.1V29z" style="fill:rgb(29, 63, 114);"></path>
            </g>
        </g>
        </svg>
    </button>

  </div>
</template>

<script>
    import BasePageVue from '../components/BasePage.vue';

    export default {
        name: 'FloatingChat',
        extends: BasePageVue,
        components: {
        }, 
        data() {
            return {
                showChat: false,
            }
        },
        methods: {
            showOrHideChat: function() {
                this.showChat = !this.showChat;
            }
        },

    }
</script>

<style>
    .floating-button {
        display: block;
        position: fixed;
        bottom: 28px;
        right: 28px;
        height: 56px;
        width: 56px;
        z-index: 1000;
        border-radius: 50%;
        background-color: var(--color1);
        border: none;
        box-shadow: 0px 6px 10px -4px var(--color1);
        transition-duration: 0.5s;
    }

    .chat-btn-active {
        border-radius: 25% 4px 25% 4px;
        background-color: var(--color4);
    }

    .floating-button svg {
        fill: white;
        transition-duration: 0.5s;
    }

    .show-svg {
        opacity: 0;
    }

    #button-first-envelope {
        fill: var(--color3);
    }

    #button-second-envelope {
        fill: var(--color2);
    }

    #button-circle-1 {
        fill: var(--color1);
        animation: floating-2 2s infinite linear;
    }

    #button-circle-2 {
        fill: var(--color1);
        animation: floating 2s infinite ease-in-out;
    }

    #button-circle-3 {
        fill: rgb(82, 53, 0);
        animation: floating-2 2s infinite linear;
    }

    #exit-svg {
        margin-top: -80px;
    }

    .dialog-center-point {
        display: block;
        position: fixed;
        width: 0px;
        height: 0px;
        top: 50%;
        right: 50%;
        z-index: 0;
        background-color: black;
    }

    .dialog-center-point .dialog-content {
        display: block;
        opacity: 0;
        position: relative;
        height: 300px;
        width: 300px;
        margin-left: -150px;
        margin-top: -150px;
        background-color: var(--color2);
        box-shadow: 0px 6px 16px -4px var(--color1);
        padding: 24px;
        box-sizing: border-box;
        border-radius: 4px;
        transform: translateY(20px);
        transition: 0.5s all ease;
    }

    .show-dialog { 
        z-index: 2;
    }

    .dialog-center-point .show-dialog {
        border-radius: 20px 4px 20px 4px;
        transform: translateY(0px);
        opacity: 1;
    }

    @keyframes floating {
        0% { transform: translate(0,  0px); }
        75%  { transform: translate(0, 4px); }
        25%  { transform: translate(0, -4px); }
        100%   { transform: translate(0, -0px); }   
    }

    @keyframes floating-2 {
        0% { transform: translate(0,  0px); }
        25%  { transform: translate(0, 4px); }
        75%  { transform: translate(0, -4px); }
        100%   { transform: translate(0, -0px); }   
    }

</style>
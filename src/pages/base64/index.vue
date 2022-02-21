<style>
.card {
    padding: 2rem;
    margin: auto;
    max-width: 1248px;
    border-radius: 0.5rem;
    background-color: var(--primary-dark-color);
    width: 100%;
}
.flex-box {
    display: -webkit-flex;
    display: flex;
}
.center {
    margin: auto;
}
.flex-box-item {
    flex: 1;
}
.flex-box-item-2 {
    flex: 2;
}
.flex-box-item-3 {
    flex: 3;
}
.flex-box-item-4 {
    flex: 4;
}
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: var(--accent-color);
    color: var(--primary-color);
    font-weight: 700;
    transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: background-color, border-color, color, fill, stroke,
        opacity, box-shadow, transform, filter, backdrop-filter,
        -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    fill: currentColor;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-style: none;
    white-space: nowrap;
    margin: 0.5em;
}

textarea {
    width: 100%;
}
</style>
<template>
    <div>
        <div>
            <h2>Base64加解密</h2>
        </div>
        <div class="card">
            <div class="flex-box">
                <div class="flex-box-item-3">
                    <div>源</div>
                    <textarea name id cols="0" rows="13" v-model="leftText"></textarea>
                </div>
                <div class="flex-box-item center">
                    <div>
                        <button class="button" @click="decode">解密</button>
                    </div>
                    <div>
                        <button class="button" @click="switchData">交换</button>
                    </div>
                    <div>
                        <button class="button" @click="encode">加密</button>
                    </div>
                    <div>
                      <button class="button" @click="clearCode">清空</button>
                    </div>
                </div>
                <div class="flex-box-item-3">
                    <div>结果</div>
                    <textarea name id cols="30" rows="13" v-model="rightText"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
    data() {
        return {
            leftText: "",
            rightText: ""
        }
    },
    methods: {
        /**
         * 解码
         */
        decode() {
           //编码的字符串中含有“-”或者“_”、中文乱码问题
            this.rightText = decodeURIComponent(escape(window.atob(this.leftText).replace(/-/g, "+").replace(/_/g, "/")));
        },
        /**
         * 编码
         */
        encode() {
            this.rightText = window.btoa(this.leftText)
        },
        /**
         * 左右交换数据
         */
        switchData() {
            var temp = this.rightText
            this.rightText = this.leftText
            this.leftText = temp
        },
        clearCode() {
          this.rightText = ''
          this.leftText = ''
       }
    }
})
</script>

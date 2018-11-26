<template>
    <div class="x-audio-wrap" :class="{inline:!block}" ref="wrap" @click="play">
        <div class="x-sector" :class="{play:animate}">
            <div class="x-dot"></div>
        </div>
        <div class="x-time">{{duration&&showDuration?duration:text}}</div>
    </div>
</template>
<script>
export default {
    name:'m-audio',
    props:{
        src:{
            type:String,
            default:''
        },
        text:{
            type:String,
            default:"轻触播放"
        },
        showDuration:{
            type:Boolean,
            default:true
        },
        block:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return{
            audio:null,
            animate:false,
            timer:null,
            duration:null
        }
    },
    mounted(){
        this.audio=new Audio()
        this.audio.src=this.src
        this.audio.addEventListener('canplaythrough',()=>{
            this.duration=this.format(this.audio.duration)
        })
        this.audio.onplay=()=>{
            this.animate=true
            this.timer=setInterval(() => {
                this.animate=false
                setTimeout(()=>{
                    this.animate=true
                },50)
            }, 1250);
        }
        this.audio.onpause=()=>{
            this.animate=false
            this.timer&&clearInterval( this.timer)
        }
        this.audio.onended=()=>{
            this.animate=false
            this.timer&&clearInterval( this.timer)
        }
        window.audioList.push(this.audio)//所有实例加入全局变量
    },
    methods:{
        play(){
            window.audioList.forEach(audio=>{//开始前先关闭所有可能正在运行的实例
                audio.pause()
            })
            if(this.audio.paused){
                this.audio.play()
            }else{
                this.audio.pause()
            }
        },
        format(s){
            var t='';
            if(s > -1){
                var min = Math.floor(s/60) % 60;
                var sec = s % 60;

                if(min < 10){t += "0";}
                t += min + "'";
                if(sec < 10){t += "0";}
                t += sec.toFixed(2);
            }
            t=t.replace('.','\"')
            return t;
        },
    }
}
</script>
<style lang="scss" scoped>
.x-audio-wrap{
    height: 30px;
    width: 110px;
    border-radius: 15px;
    // border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    .x-sector{
        height: 7px;
        width: 7px;
        border-radius:4px 10px;
        border-right: 2px solid #ddd;
        border-top: 2px solid #ddd;
        transform: rotate(45deg);
        position: relative;
        margin-left: 10px;
        .x-dot{
            height: 4px;
            width: 4px;
            border-radius: 4px;
            background: #ddd;
            position: absolute;
            top: 4px;
        }
    }
    .x-sector::before{
        content: "";
        height: 9px;
        width: 9px;
        border-radius:4px 12px;
        border-right: 2px solid #ddd;
        border-top: 2px solid #ddd;
        transform: rotate(0deg);
        position: absolute;
        right: -7px;
        top: -7px;
    }
    .x-sector::after{
        content: "";
        height: 12px;
        width: 12px;
        border-radius:4px 14px;
        border-right: 2px solid #ddd;
        border-top: 2px solid #ddd;
        transform: rotate(0deg);
        position: absolute;
        right: -13px;
        top: -13px;
    }
    
    .x-time{
        color: #999;
        font-size: 12px;
        margin-right: 10px;
    }
    &.inline{
        display: inline-flex
    }
}

@keyframes play-dot{
    from{
        background: #ddd
    }
    to{
        background: #5cadff
    }
}
@keyframes play-sector{
    from{
        border-color: #ddd
    }
    to{
        border-color: #5cadff
    }
}
.x-sector.play{
    animation: play-sector 0.3s 0.1s ease-in-out;
}
.x-sector.play::before{
    animation: play-sector 0.3s 0.2s ease-in-out;
}
.x-sector.play::after{
    animation: play-sector 0.3s 0.3s ease-in-out;
}
.x-sector.play .x-dot{
    animation: play-dot 0.3s ease-in-out;
}
</style>

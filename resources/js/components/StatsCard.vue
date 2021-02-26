<template>
  <card class="card-stats" :show-footer-line="true">
    <div class="row">
      <div class="col card-counter" :class="color">
        <slot>

                <i :class="icon"></i>
                <span class="count-numbers" v-if="title">{{subTitle}}</span>
                <span class="count-name" v-if="subTitle">{{title}}</span>


        </slot>
      </div>


    </div>


  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'stats-card',
    components: {
      Card
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      icon: String,
      title: String,
      subTitle: String,
        color: String,
      iconClasses: [String, Array]
    }
  };
</script>
<style>

    .card {
        border: none !important;
    }
    .card-counter{
        box-shadow: 2px 2px 10px #DADADA;
        margin: 5px;
        padding: 20px 10px;
        background-color: #fff;
        height: 170px;
        border-radius: 5px;
        transition: .3s linear all;
    }

    .card-counter:hover{
        box-shadow: 4px 4px 20px #DADADA;
        transition: .3s linear all;
    }

    .card-counter.primary{
        background-color: #007bff;
        color: #FFF;
    }

    .card-counter.danger{
        background-color: #ef5350;
        color: #FFF;
    }

    .card-counter.success{
        background-color: #66bb6a;
        color: #FFF;
    }

    .card-counter.info{
        background-color: #26c6da;
        color: #FFF;
    }

    .card-counter i{
        font-size: 7em;
        opacity: 0.2;
    }

    .card-counter .count-numbers{
        position: absolute;
        right: 40px;
        top: 20px;
        font-size: 32px;
        display: block;
    }

    .card-counter .count-name{
        position: absolute;
        right: 35px;
        top: 65px;

        text-transform: capitalize;
        opacity: 0.5;
        display: block;
        font-size: 18px;
    }

</style>

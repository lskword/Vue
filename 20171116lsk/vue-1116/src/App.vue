<template>
<div id="app">
  <img src="./assets/logo.png">
  <router-view/>
  <el-tooltip :content="'Switch value: ' + value5" placement="top">
    <el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0">
    </el-switch>
  </el-tooltip>
  <div class="block">
    <span class="demonstration">默认不区分颜色</span>
    <el-rate v-model="value1"></el-rate>
  </div>
  <div class="block">
    <span class="demonstration">区分颜色</span>
    <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>
  </div>
  <template>
    <Form :model="setting" :label-width="100">
        <FormItem label="Automatic switching">
            <Switch v-model="setting.autoplay">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </Switch>
        </FormItem>
        <FormItem label="Circular indicator">
            <Switch v-model="setting.radiusDot">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </Switch>
        </FormItem>
        <FormItem label="Automatic switching speed">
            <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
        </FormItem>
        <FormItem label="Indicator position">
            <RadioGroup v-model="setting.dots" type="button">
                <Radio label="inside">interior</Radio>
                <Radio label="outside">exterior</Radio>
                <Radio label="none">Don't show</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Switch the arrow">
            <RadioGroup v-model="setting.arrow" type="button">
                <Radio label="hover">Hover displayed when</Radio>
                <Radio label="always">Always show</Radio>
                <Radio label="never">Don't show</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Indicator trigger mode">
            <RadioGroup v-model="setting.trigger" type="button">
                <Radio label="click">Click</Radio>
                <Radio label="hover">Hover</Radio>
            </RadioGroup>
        </FormItem>
    </Form>
    <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>

</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      value5: true,
      value1: null,
      value2: null,
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

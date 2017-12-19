  // 主窗口组件
  var AppHead = {
    template:`<div>app head</div>`
  }
  //主窗口单元组件
  var AppMainUnit ={
    template:`<div>app main unit</div>`
  }
  // 主窗口组件
  var AppMain = {
    template:`
    <div>
    app main
    <app-main-unit></app-main-unit>
    <app-main-unit></app-main-unit>
    <app-main-unit></app-main-unit>
    </div>`,
    components:{
      AppMainUnit
    }
  }
  // 侧边栏单元组件
  var  AppSideUnit = {
    template:`<div>app side</div>`
  }
  //侧边栏组件
  var AppSide= {
    template:`
    <div>
    app
    <app-side-unit></app-side-unit>
    <app-side-unit></app-side-unit>
    <app-side-unit></app-side-unit>
    </div>`,
    components:{
      AppSideUnit
    }
  }
  var vm = new Vue({
    el:"#app",
    components:{
      AppHead,
      AppMain,
      AppSide
    }
  })

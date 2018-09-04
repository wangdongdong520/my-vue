<template>
    <div>
        <h1>主页面</h1>
        欢迎!<b @click="login">点这里登录</b>

        <div id="test1">
          <!--
                1.在这里调用组件。
                2.vue初始化实例配置项，挂载到#app,并调用了子组件（自定义组件first_component），通过在子组件内
                提前定义props:['pass_c']接收它的父组件传下来的值,a是初始化vue实例配置项的变量（相当于是‘自定
                义组件first_component’的父组件）， 这种方式就是组件解耦使用。
          -->
          <p>{{a1}}</p>
          <first_component :pass_c="a"></first_component>
          <div style="border:1px solid greenyellow;padding:20px">
            <h2>is 与 :is 的用法 ,区别如下：</h2>
            <div is="e"></div>
            <div :is="f"></div>

          </div>
        </div>
    </div>
</template>

<script>


  var four_component = {
    // 自定义组件4
    template: `<h2>:is -- 要在new Vue定义一个变量才能用 :is='f' 在#app 模板调用,否则报错 'undefined'</h2>`
  };

  var third_component = {
    // 自定义组件3
    template: `<h2>is -- 要在components注册这个组件，才能用 is 引用second_component组件</h2>`
  };

  var second_component = {
    // 自定义组件2
    template: `<div>
                          <div>
                                  <del>{{ c }} </del> <br>
                                  <del>{{ pass_d }} </del>
                          </div>
                      </div>`,
    data() {
      return {
        c: "c_value come form second"
      };
    },
    props: ["pass_d"]
  };

  var first_component = {
    // 自定义组件1
    //注意这里template 最外层只能有一个div，不能出现并列两个div
    template: `<div>
                          <div style="border:1px solid red;padding:20px;">
                                  <h2 style="color:red;">first_component: </h2><b>{{ b }}</b><br><b>{{ pass_c }}</b>
                          </div> 
                          <div style="border:1px solid green;padding:20px;">
                                  <h2 style="color:red;">second_component: </h2>
                                  <second_component :pass_d="d"></second_component>
                          </div>
                    </div>`, // 定义组件的模板
    data() {
      // 必须是函数
      return {
        // 返回的变量可以直接在模板上使用
        b: "b_value come from first",
        d: "d_value come from first"
      };
    },
    props: ["pass_c"], // 用于接收其父组件的传值
    components: {
      // 还可以调用子组件
      second_component: second_component
    }
  };


export default {
  components: { first_component: first_component,e:third_component},
  data(){
      return {
         a1:"AAAA",
          a : 'a_value come from new Vue',
          f : four_component  // 用:is 引用four_component组件，要先定义一个变量
      }
  },
  // data:{
  //   a : 'a_value come from new Vue',
  //   f : four_component  // 用:is 引用four_component组件，要先定义一个变量
  // },
  methods: {
    login() {
      this.$router.replace("/login");
    }
  }
};


</script>


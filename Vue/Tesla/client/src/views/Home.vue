<template>
    <div class="header">
      <Header />
    </div>
    <div class="img1" @click="log">
      <div class="box" :style="des1">
        <div class="des">
          <div class="modelName">Model 3</div>
          <div class="booking">预约试驾</div>
        </div>
  
        <el-row class="button">
          <el-button type="info" class="buttonDetail b1" @click="customize">定制我的 Model 3</el-button>
          <el-button class="buttonDetail b2" @click="customize">了解 Model 3</el-button>
        </el-row>
      </div>
    </div>
    <div class="img2">
      <div class="box" :style="des2">
        <div class="des">
          <div class="modelName">Model Y</div>
          <div class="booking">预约试驾</div>
        </div>
  
        <el-row class="button">
          <el-button type="info" class="buttonDetail b1">定制我的 Model Y</el-button>
          <el-button class="buttonDetail b2">了解 Model Y</el-button>
        </el-row>
      </div>
    </div>
    <div class="img3">
      <div class="box" :style="des3">
        <div class="des">
          <div class="modelName">Model S</div>
          <div class="booking">预约试驾</div>
        </div>
  
        <el-row class="button">
          <el-button type="info" class="buttonDetail b1">定制我的 Model S</el-button>
          <el-button class="buttonDetail b2">了解 Model S</el-button>
        </el-row>
      </div>
    </div>
    <div class="img4">
      <div class="box" :style="des4">
        <div class="des">
          <div class="modelName">Model X</div>
          <div class="booking">预约试驾</div>
        </div>
  
        <el-row class="button">
          <el-button type="info" class="buttonDetail b1" @click="customize">定制我的 Model X</el-button>
          <el-button class="buttonDetail b2">了解 Model X</el-button>
        </el-row>
      </div>
    </div>
    <div class="img5">
      <div class="box" :style="des5">
        <div class="des">
          <div class="modelName">太阳能设备和 Powerwall</div>
          <div class="booking">全方位能源供应</div>
        </div>
  
        <el-row class="button">
          <el-button type="info" class="buttonDetail b1" @click="customize">了解更多</el-button>
        </el-row>
      </div>
    </div>
    <div class="img6">
      <div class="box" :style="des6" @click="log">
        <div class="des">
          <div class="modelName">充电产品和精品配件</div>
          <div class="booking">a</div>
        </div>
  
        <el-row class="button">
          <el-button type="info" class="buttonDetail b1" @click="customize">立即购买</el-button>
        </el-row>
      </div>
  
      <div class="botton">
        Tesla © 2022
        沪ICP备2021004806号-1
        沪公网安备 31011502017892 号
        营业执照
        隐私和法律
        联系我们
        工作机会
        最新消息
      </div>
    </div>
  </template>
    
  <script setup>
  // import Header from "../components/Header.vue";
  import { onMounted, reactive } from "vue";
  import { useRouter } from "vue-router";
  
  const router =useRouter()
  
  const log=()=>{
    console.log(213);
  }
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll); // 监听页面滚动
  });
  // 变量
  let des1 = reactive({
    opacity: 1
  });
  let des2 = reactive({
    opacity: 0
  });
  let des3 = reactive({
    opacity: 0
  });
  let des4 = reactive({
    opacity: 0
  });
  let des5 = reactive({
    opacity: 0
  });
  let des6 = reactive({
    opacity: 0
  });
  
  // 定制车辆
  const customize=()=>{
    router.push({
      path:'/design'
    })
  }
  
  
  // 方法
  const handleScroll = () => {
    // let scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop; //兼容不同的浏览器
    const clientHeight = document.documentElement.clientHeight; // 获取3可视区高度
    // console.log(clientHeight);
    if (scrollTop < clientHeight / 2) {
      des1.opacity = 1 - scrollTop / (clientHeight / 2);
      des2.opacity = 0;
      des3.opacity = 0;
      des4.opacity = 0;
      des5.opacity = 0;
      des6.opacity = 0;
    } else if (clientHeight / 2 <= scrollTop && scrollTop < clientHeight) {
      des1.opacity = 0;
      des2.opacity = (scrollTop - clientHeight / 2) / (clientHeight / 2);
    } else if (clientHeight <= scrollTop && scrollTop < (clientHeight * 3) / 2) {
      des2.opacity = 1 - (scrollTop - clientHeight) / (clientHeight / 2);
      des1.opacity = 0;
      des6.opacity = 0;
      des3.opacity = 0;
      des4.opacity = 0;
      des5.opacity = 0;
    } else if (
      (clientHeight * 3) / 2 <= scrollTop &&
      scrollTop < clientHeight * 2
    ) {
      des2.opacity = 0;
      des3.opacity = (scrollTop - (clientHeight * 3) / 2) / (clientHeight / 2);
    } else if (
      2 * clientHeight <= scrollTop &&
      scrollTop < (clientHeight * 5) / 2
    ) {
      des3.opacity = 1 - (scrollTop - clientHeight * 2) / (clientHeight / 2);
      des1.opacity = 0;
      des2.opacity = 0;
      des6.opacity = 0;
      des4.opacity = 0;
      des5.opacity = 0;
    } else if (
      (5 / 2) * clientHeight <= scrollTop &&
      scrollTop < clientHeight * 3
    ) {
      des3.opacity = 0;
      des4.opacity = (scrollTop - (clientHeight * 5) / 2) / (clientHeight / 2);
    } else if (
      3 * clientHeight <= scrollTop &&
      scrollTop < (clientHeight * 7) / 2
    ) {
      des4.opacity = 1 - (scrollTop - clientHeight * 3) / (clientHeight / 2);
      des1.opacity = 0;
      des2.opacity = 0;
      des3.opacity = 0;
      des6.opacity = 0;
      des5.opacity = 0;
    } else if (
      (7 / 2) * clientHeight <= scrollTop &&
      scrollTop < clientHeight * 4
    ) {
      des4.opacity = 0;
      des5.opacity = (scrollTop - (clientHeight * 7) / 2) / (clientHeight / 2);
    } else if (
      4 * clientHeight <= scrollTop &&
      scrollTop < (clientHeight * 9) / 2
    ) {
      des1.opacity = 0;
      des2.opacity = 0;
      des3.opacity = 0;
      des4.opacity = 0;
      des6.opacity = 0;
      des5.opacity = 1 - (scrollTop - clientHeight * 4) / (clientHeight / 2);
    } else if (
      (9 / 2) * clientHeight <= scrollTop &&
      scrollTop < clientHeight * 5
    ) {
      des1.opacity = 0;
      des2.opacity = 0;
      des3.opacity = 0;
      des4.opacity = 0;
      des5.opacity = 0;
      des6.opacity = (scrollTop - (clientHeight * 9) / 2) / (clientHeight / 2);
    }
  };
  </script>
    
    <style lang="less" scoped>
  .header {
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .box {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
  .img1 {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/20bf4269-45ae-4473-8133-00c144d7265b/bvlatuR/std/2880x1800/Homepage-Model-3-Hero-Desktop-CN?quality=auto-medium&format=auto");
    background-size: 100% 135%;
    background-position: 0px -130px;
    .box {
      opacity: 100%;
      .des {
        padding-top: 6%;
        .modelName {
          font-size: 33px;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 580;
        }
        .booking {
          margin-top: 10px;
          text-align: center;
        }
      }
  
      .button {
        margin-top: 25%;
        display: flex;
        justify-content: center;
        z-index: 1000;
        .buttonDetail {
          width: 250px;
          height: 38px;
        }
        .b1 {
          background: #23281d;
        }
        .b2 {
          color: #3e4045;
        }
      }
    }
  }
  .img2 {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.cn/delivery/public/image/tesla/6eaf68ac-240a-4aa7-8500-05918f77927b/bvlatuR/std/0x0/6eaf68ac-240a-4aa7-8500-05918f77927b");
    background-size: 100% 130%;
    background-position: 0px -130px;
    .box {
      opacity: 100%;
      .des {
        padding-top: 6%;
        .modelName {
          font-size: 33px;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 580;
        }
        .booking {
          margin-top: 10px;
          text-align: center;
        }
      }
  
      .button {
        margin-top: 25%;
        display: flex;
        justify-content: center;
        .buttonDetail {
          width: 250px;
          height: 38px;
        }
        .b1 {
          background: #23281d;
        }
        .b2 {
          color: #3e4045;
        }
      }
    }
  }
  .img3 {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD");
    background-size: 100% 140%;
    background-position: 0px -140px;
    .box {
      opacity: 100%;
      .des {
        padding-top: 6%;
        .modelName {
          font-size: 33px;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 580;
        }
        .booking {
          margin-top: 10px;
          text-align: center;
        }
      }
  
      .button {
        margin-top: 25%;
        display: flex;
        justify-content: center;
        .buttonDetail {
          width: 250px;
          height: 38px;
        }
        .b1 {
          background: #23281d;
        }
        .b2 {
          color: #3e4045;
        }
      }
    }
  }
  .img4 {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD");
    background-size: 100% 130%;
    background-position: 0px -140px;
    .box {
      opacity: 100%;
      .des {
        padding-top: 6%;
        .modelName {
          font-size: 33px;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 580;
        }
        .booking {
          margin-top: 10px;
          text-align: center;
        }
      }
  
      .button {
        margin-top: 25%;
        display: flex;
        justify-content: center;
        .buttonDetail {
          width: 250px;
          height: 38px;
        }
        .b1 {
          background: #23281d;
        }
        .b2 {
          color: #3e4045;
        }
      }
    }
  }
  .img5 {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.cn/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/0x0/27d0055c-b0bf-476c-b3aa-ec59d314f871");
    background-size: 100% 180%;
    background-position: 0px -250px;
    .box {
      opacity: 100%;
      .des {
        padding-top: 6%;
        .modelName {
          font-size: 33px;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 580;
        }
        .booking {
          margin-top: 10px;
          text-align: center;
        }
      }
  
      .button {
        margin-top: 25%;
        display: flex;
        justify-content: center;
        .buttonDetail {
          width: 250px;
          height: 38px;
        }
        .b1 {
          background: #23281d;
        }
        .b2 {
          color: #3e4045;
        }
      }
    }
  }
  .img6 {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.cn/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046");
    background-position: 0px -140px;
    background-size: 100% 140%;
    .box {
      opacity: 100%;
      .des {
        padding-top: 6%;
        .modelName {
          font-size: 33px;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          font-weight: 580;
        }
        .booking {
          margin-top: 10px;
          text-align: center;
          opacity: 0;
        }
      }
  
      .button {
        margin-top: 25%;
        display: flex;
        justify-content: center;
        .buttonDetail {
          width: 250px;
          height: 38px;
        }
        .b1 {
          background: #23281d;
        }
        .b2 {
          color: #3e4045;
        }
      }
    }
    .botton {
      position: absolute;
      font-size: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: -500%;
    }
  }
  </style>
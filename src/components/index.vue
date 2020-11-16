<template>
  <div class='dashboard'>
    <div class='title'></div>
    <div class='doughnut'>
      <!-- <doughnut></doughnut> -->
    </div>
    <div class='point'>
      <!-- <point></point> -->
    </div>
    <div class='line'>
      <!-- <line-chart></line-chart> -->
    </div>
    <!-- <div class='line-y-ca'></div> -->
    <div class='map'>
      <!-- <bar></bar> -->
    </div>
    <div class='bar'>
      <Map></Map>
    </div>
    <div class='pie-char'>
      <!-- <pie></pie> -->
    </div>
    <div class='gauge'>
      <!-- <gauge></gauge> -->
    </div>
    <div class='double-line'>
      <!-- <double-line></double-line> -->
    </div>
  </div>
</template>

<script>
import Doughnut from '@/components/charts/Doughnut'
import Point from '@/components/charts/Point'
import LineChart from '@/components/charts/Line'
import Map from '@/components/charts/Map'
import Bar from '@/components/charts/Bar'
import Pie from '@/components/charts/Pie'
import Gauge from '@/components/charts/Gauge'
import DoubleLine from '@/components/charts/DoubleLine'

export default {
  components: {
    Doughnut,
    Point,
    Map,
    LineChart,
    Bar,
    Pie,
    Gauge,
    DoubleLine
  },
  data() {
    return {
      isFullScreen: false,
    }
  },
  methods: {
    toggleFullscreen() {
      if (this.isFullScreen) {
        this.exitFullScreen()
      } else {
        this.launchFullScreen(document.documentElement)
      }
      this.isFullScreen = !this.isFullScreen
    },
    launchFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    },
    exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }
}
 </script>
<style lang="scss" scoped>
  .dashboard {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 1920px;
    height: 1080px;

    & > div {
      position: absolute;
    }
  }

  .title {
    width: 100%;
    height: 90px;
    background: url('../assets/img/title.png') no-repeat scroll left 15px/100%
  }

  .doughnut {
    top: 105px;
    left: 23px;
    width: 597px;
    height: 245px;
    border-radius: 20px;
    background: url('../assets/img/doughnut.png') no-repeat scroll left top/100%
  }

  .point {
    top: 365px;
    left: 23px;
    width: 597px;
    height: 334px;
    border-radius: 20px;
    background: url('../assets/img/point.png') no-repeat scroll left top/100%
  }

  .line {
    left: 23px;
    bottom: 20px;
    width: 597px;
    height: 344px;
    border-radius: 20px;
    background: #1A1939;
  }

  .map {
    left: 635px;
    top: 105px;
    width: 650px;
    height: 358px;
    border-radius: 20px;
    background: #1A1939;
  }

  .bar {
    left: 635px;
    bottom: 20px;
    width: 650px;
    height: 580px;
    border-radius: 20px;
  }

  .pie-char {
    right:23px;
    top: 105px;
    width: 597px;
    height: 245px;
    border-radius: 20px;
    background: #1A1939;
  }

  .gauge {
    top: 365px;
    right: 23px;
    width: 597px;
    height: 334px;
    border-radius: 20px;
    background: #1A1939;
  }

  .double-line {
    right: 23px;
    bottom: 20px;
    width: 597px;
    height: 344px;
    border-radius: 20px;
    background: #1A1939;
  }

</style>
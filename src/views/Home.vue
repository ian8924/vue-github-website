/* eslint-disable camelcase */
<template>
  <div class="home">
    <div
      class="background-img"
    >
      <div style="position:absolute;top:20%;left:45%">
        <vue-typed-js
          :strings="['Hello', `I'am Ian`,`a front-end developer`]"
          :type-speed="200"
          :loop="true"
          :back-speed="10"
        >
          <h1
            class="typing"
            style="color:rgb(185, 50, 50);font-family: 'Pacifico', cursive;"
          />
        </vue-typed-js>
      </div>
    </div>
    <canvas
      id="myCanvas"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      width: 1450,
      height: 100
    }
  },
  mounted () {
    this.width = document.body.clientWidth
    this.height = document.body.clientWidth / 14 * 8

    class Ball {
      constructor (radius) {
        this.x = 0
        this.y = 0
        this.radius = radius
        this.color = ''
      }

      draw (context) {
        context.save()
        context.translate(this.x, this.y)
        context.lineWidth = this.lineWidth
        context.fillStyle = this.color
        context.beginPath()
        // x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(0, 0, this.radius, 0, (Math.PI * 2), true)
        context.closePath()
        context.fill()
        context.restore()
      }
    }

    // eslint-disable-next-line camelcase
    let last_snow_created_time = new Date()
    const snows = []
    // 根据时间创造新的雪花与气泡
    function createSnow () {
      const now = new Date()
      // eslint-disable-next-line camelcase
      if (now - last_snow_created_time > snows.length - now.getMinutes() && snows.length < 1000) {
        const radius = Math.random() * 5 + 2
        const snow = new Ball(radius)
        snow.x = Math.random() * canvas.width + 1
        snow.color = '#ffffff'
        snows.push(snow)
        // eslint-disable-next-line camelcase
        last_snow_created_time = now
      }
    }

    function moveSnow (snow, index) {
      snow.y += snow.radius / 3
      if (snow.y > canvas.height) { snows.splice(index, 1) } else { snow.draw(context) }
    }

    function drawFrame () {
      // eslint-disable-next-line no-unused-vars
      const animation = requestAnimationFrame(drawFrame)
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(back_image, 0, 0, canvas.width, canvas.height)
      createSnow()
      snows.forEach(moveSnow)
    }
    const canvas = document.getElementById('myCanvas')
    const context = canvas.getContext('2d')
    // eslint-disable-next-line camelcase
    const back_image = new Image()
    back_image.src = 'https://s2.ax1x.com/2019/05/25/VAY1nf.jpg'

    drawFrame()
  }
}
</script>
<style >
.background-img{
  width: 100%;
  height: auto;
}
.typed-cursor{
  font-size: 30px;
  color:rgb(185, 50, 50)
}
</style>

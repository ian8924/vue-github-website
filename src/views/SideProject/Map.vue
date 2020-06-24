<template>
<div>
<h1>口罩地圖</h1>
<p>應用openstreetmap＆leaflet結合政府opendatas</p>
  <div style="display:flex;">
    <div class="select-area">
        <v-select
            v-model="city"
            :items="cityOptions"
            label="選城市"
            outlined
        />
         <v-select
            v-model="area"
            :items="areaOptions"
            label="選地區"
            outlined
        />
         <v-card
            style="margin:10px"
            :color="item.properties.mask_adult+item.properties.mask_child===0?'rgb(112,124,118)':'#385F73'"
            @click="openPop(item)"
            v-for="(item,index) in currentData"
            :key="index"
            dark
          >
            <v-card-title >{{item.properties.name}}</v-card-title>
            <v-card-subtitle>
                成人: {{item.properties.mask_adult}}, 小孩: {{item.properties.mask_child}}<br/>
                {{item.properties.address}}</v-card-subtitle>
          </v-card>
    </div>
    <div id="map"></div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import L from 'leaflet'
import cityName from '@/assets/cityName.json'
let osmMap = {}

export default {
  data () {
    return {
      currentData: [],
      datas: [],
      cityName,
      cityOptions: [],
      areaOptions: [],
      city: '',
      area: ''
    }
  },
  mounted () {
    osmMap = L.map('map', {
      center: [25.03, 121.55],
      zoom: 15
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
      maxZoom: 18
    }).addTo(osmMap)
    // 取得口罩商家資訊
    axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
      .then((res) => {
        this.datas = res.data.features
      })
    // 設定城市選項
    this.cityName.map(item => {
      this.cityOptions.push(item.CityName)
    })
  },
  methods: {
    // 更新圖標
    updateMap () {
      const pharmacies = this.datas.filter(item => {
        return item.properties.county === this.city && item.properties.town === this.area
      })

      pharmacies.forEach(pharmacies => {
        const { geometry, properties } = pharmacies
        L.marker([geometry.coordinates[1], geometry.coordinates[0]]).addTo(osmMap).bindPopup(`<strong>${properties.name}</strong> <br>
        口罩剩餘：<strong>成人 - ${properties.mask_adult ? `${properties.mask_adult} 個` : '未取得資料'}/ 兒童 - ${properties.mask_child ? `${properties.mask_child} 個` : '未取得資料'}</strong><br>
        地址: <a href="https://www.google.com.tw/maps/place/${properties.address}" target="_blank">${properties.address}</a><br>
        電話: ${properties.phone}<br>
        <small>最後更新時間: ${properties.updated}</small>`)
      })
      this.currentData = pharmacies
      this.penTo(pharmacies[0])
    },
    // 移除座標點
    removeMapMarker () {
      osmMap.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          osmMap.removeLayer(layer)
        }
      })
    },
    // 切換地圖中心點
    penTo (item) {
      const { geometry } = item
      osmMap.panTo([geometry.coordinates[1], geometry.coordinates[0]])
    },
    // 打開popUp
    openPop (item) {
      const { geometry, properties } = item
      this.penTo(item)
      L.marker([geometry.coordinates[1], geometry.coordinates[0]]).addTo(osmMap).bindPopup(`<strong>${properties.name}</strong> <br>
    口罩剩餘：<strong>成人 - ${properties.mask_adult ? `${properties.mask_adult} 個` : '未取得資料'}/ 兒童 - ${properties.mask_child ? `${properties.mask_child} 個` : '未取得資料'}</strong><br>
    地址: <a href="https://www.google.com.tw/maps/place/${properties.address}" target="_blank">${properties.address}</a><br>
    電話: ${properties.phone}<br>
    <small>最後更新時間: ${properties.updated}</small>`).openPopup()
    }
  },
  watch: {
    city (val) {
      this.removeMapMarker()
      // 設定地區選項
      this.areaOptions = []
      const index = this.cityOptions.indexOf(val)
      this.cityName[index].AreaList.map(item => {
        this.areaOptions.push(item.AreaName)
      })
      this.area = ''
    },
    area (val) {
      this.removeMapMarker()
      this.updateMap()
    }
  }

}
</script>

 <style>
.select-area{
    width: 25%;
    height: 600px;
    padding:10px;
    background: #ccc;
    overflow:scroll;
}
#map{
    width:65%;
    height: 600px;
    background: rgb(0, 0, 0);
}
</style>

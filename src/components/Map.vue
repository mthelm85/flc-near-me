<template lang="html">
  <div id="map" class="map"></div>
</template>

<script>
import L from 'leaflet'
export default {
  data () {
    return {
      coords: {
        lat: null,
        lng: null
      },
      map: null,
      centerMarker: null,
      tileLayer: null,
      layers: []
    }
  },

  async created () {
    let position = await this.getCoords()
    this.coords.lat = position.coords.latitude
    this.coords.lng = position.coords.longitude
    this.initMap()
    this.initLayers()
  },

  methods: {
    getCoords () {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position)
        })
      })
    },
    initMap () {
      this.map = L.map('map').setView([this.coords.lat, this.coords.lng], 12)
      this.centerMarker = L.marker([this.coords.lat, this.coords.lng]).addTo(this.map)
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      )
      this.tileLayer.addTo(this.map)
    },
    initLayers () {

    }
  }
}
</script>

<style lang="css">
#map {
  height: 600px;
}
</style>

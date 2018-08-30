<template lang="html">
  <div>
    <span class="lead">FLC Near Me</span>
    <span class="float-right">Fetching data...</span>
    <div id="map">
      <button @click="getFLCs" class="btn btn-primary">Get FLCs</button>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Google from '@/Google'
import L from 'leaflet'
export default {
  data () {
    return {
      coords: {
        lat: null,
        lng: null,
        state: null
      },
      flcArray: [],
      map: null,
      centerMarker: null,
      tileLayer: null,
      layers: []
    }
  },

  async created () {
    // Get user coordinates, save them
    let position = await this.getCoords()
    this.coords.lat = position.coords.latitude
    this.coords.lng = position.coords.longitude

    // Reverse geocode user coordinates, save user state
    let geocode = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.coords.lat},${this.coords.lng}&key=${Google.API}`)
    this.coords.state = geocode.data.results[0].address_components[4].short_name

    // Initialize the map and layers
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
    async getFLCs () {
      console.log('Fetching FLC Data...')
      let flc = await Axios.get(`https://cors-anywhere.herokuapp.com/https://data.dol.gov/get/flc_cert/limit/200/filter_column/flc_state="${this.coords.state}"`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'ad69a25c-4a4f-403f-ac10-c484c5430b56'
          }
        }
      )
      // Need to handle error
      for (let i = 0; i < flc.data.length; i++) {
        this.flcArray.push(flc.data[i])
      }
    },
    initMap () {
      this.map = L.map('map').setView([this.coords.lat, this.coords.lng], 12)

      this.centerMarker = L.marker([this.coords.lat, this.coords.lng])
        .addTo(this.map)
        .bindPopup('You are here.')

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
.btn {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 2000;
}
#map {
  height: 600px;
}
</style>

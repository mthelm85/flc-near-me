<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <span class="lead">FLC Near Me &bull; {{ coords.cityState }}</span>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <transition name="fade" mode="out-in">
          <button v-if="!fetching" @click="getFLCs" class="btn btn-primary">Get FLCs</button>
          <radar-spinner
            v-else
            :animation-duration="2000"
            :size="38"
            color="#ff1d5e"
            class="mr-4"
          />
        </transition>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Google from '@/Google'
import L from 'leaflet'
import { RadarSpinner } from 'epic-spinners'
export default {
  data () {
    return {
      coords: {
        lat: null,
        lng: null,
        state: null,
        cityState: null
      },
      flcArray: [],
      map: null,
      centerMarker: null,
      tileLayer: null,
      layers: [],
      locationStatus: 'unlocated',
      fetching: false
    }
  },

  components: {
    RadarSpinner
  },

  async created () {
    // Get user coordinates, save them
    let position = await this.getCoords()
    this.coords.lat = position.coords.latitude
    this.coords.lng = position.coords.longitude
    this.locationStatus = 'located'

    // Reverse geocode user coordinates, save user state
    let geocode = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.coords.lat},${this.coords.lng}&key=${Google.API}`)
    this.coords.cityState = geocode.data.results[1].formatted_address
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
      this.fetching = true
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
#map {
  height: 600px;
}
</style>

this.map.map<template lang="html">
  <div class="container">
    <div class="row mt-3">
      <div class="col-6">
        <span><strong>Your Location:</strong> {{ coords.cityState }}</span>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <span v-if="fetching" class="mt-1"><small class="mr-3"><span v-html="waitingMessage"></span></small></span>
        <span v-if="showResultsMessage" class="mt-1"><small class="mr-3">{{ resultsMessage }}</small></span>
        <transition name="fade" mode="out-in">
          <button :disabled="disabled" v-if="!fetching" @click="getFLCs(0)" class="btn btn-primary">Get FLCs</button>
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
      map: {
        map: null,
        centerMarker: null,
        tileLayer: null,
        layers: []
      },
      markerIcons: {
        center: new L.Icon({
          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      },
      fetching: false,
      flcArray: [],
      flceArray: null,
      offset: 0,
      disabled: false,
      waitingMessage: null,
      resultsMessage: null,
      showResultsMessage: false
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

    // Reverse geocode user coordinates, save user state for use in call to DOL API, display cityState
    this.geoCodeUserPos()

    // Initialize the map and layers based on user location
    this.initMap()
    this.initLayers()

    // Listen for marker drag event, run onDrag() to update coordinates
    this.map.centerMarker.on('dragend', this.userPosUpdate)
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
      this.waiting()
      this.fetching = true
      // Get FLCs from DOL API, filtering results by user State
      try {
        let flc = await Axios.get(`https://cors-anywhere.herokuapp.com/https://data.dol.gov/get/flc_cert/limit/200/offset/${this.offset}/columns/flc_cert_num:flc_name:flc_address:flc_city:flc_state:flc_zip:driving_auth:housing_auth:transportation_auth:flc_cert_start_date:flc_cert_end_date/filter_column/flc_state=${this.coords.state}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-API-KEY': 'ad69a25c-4a4f-403f-ac10-c484c5430b56'
            }
          }
        )
        for (let i = 0; i < flc.data.length; i++) {
          this.flcArray.push(flc.data[i])
        }
        this.geoCodeFLCs()
        this.offset += 200
      } catch (err) {
        this.fetching = false
        this.$swal({
          type: 'error',
          title: 'Oops...',
          text: 'The DOL API broke...again.'
        })
      }
    },

    async geoCodeFLCs () {
      // Geocode FLCs via Google API, create marker, add to map
      for (let i = 0; i < this.flcArray.length; i++) {
        let address = (this.flcArray[i].FLC_ADDRESS + this.flcArray[i].FLC_CITY + this.flcArray[i].FLC_ZIP.replace(/ /g, '+'))
        try {
          let res = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${Google.API}`)
          if (res.data.status === 'OK') {
            this.fetching = false
            this.disabled = true
            L.marker([res.data.results[0].geometry.location.lat, res.data.results[0].geometry.location.lng])
              .addTo(this.map.map)
              .bindPopup(`
                ${this.flcArray[i].FLC_NAME}
                <br />
                ${this.flcArray[i].FLC_ADDRESS}
                <br />
                ${this.flcArray[i].FLC_CITY}, ${this.flcArray[i].FLC_STATE} ${this.flcArray[i].FLC_ZIP}
                <br />
                Cert #: ${this.flcArray[i].FLC_CERT_NUM}
                <br />
                Housing: ${this.flcArray[i].HOUSING_AUTH} Driving: ${this.flcArray[i].DRIVING_AUTH} Transport: ${this.flcArray[i].TRANSPORTATION_AUTH}
                <br />
                Cert Period: ${this.flcArray[i].FLC_CERT_START_DATE} to ${this.flcArray[i].FLC_CERT_END_DATE}
                `)
          } else {
            console.log(`Error geocoding record with index ${i}`)
          }
        } catch (err) {
          this.fetching = false
          this.$swal({
            type: 'error',
            title: 'Oops...',
            text: 'An error occurred during the geocoding process.'
          })
        }
      }
      if (this.flcArray.length === this.offset) {
        this.getFLCs()
      } else {
        this.resultsMessage = `Retrieved ${this.flcArray.length} results`
        this.showResultsMessage = true
      }
    },

    async geoCodeUserPos () {
      this.disabled = false
      this.showResultsMessage = false
      // Reverse geocode user coordinates, save user state for use in call to DOL API, display cityState
      let geocode = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.coords.lat},${this.coords.lng}&key=${Google.API}`)
      this.coords.cityState = geocode.data.results[1].formatted_address
      for (let i = 0; i < geocode.data.results.length; i++) {
        if (geocode.data.results[i].types[0] === 'administrative_area_level_1') {
          this.coords.state = geocode.data.results[i].address_components[0].short_name
        }
      }
    },

    initMap () {
      this.map.map = L.map('map').setView([this.coords.lat, this.coords.lng], 12)

      this.map.centerMarker = L.marker([this.coords.lat, this.coords.lng], {
        icon: this.markerIcons.center,
        draggable: true,
        autoPan: true
      })
        .addTo(this.map.map)
        .bindPopup('You are here.')

      this.map.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      )

      this.map.tileLayer.addTo(this.map.map)
    },

    initLayers () {

    },

    userPosUpdate () {
      let latlng = this.map.centerMarker.getLatLng()
      this.coords.lat = latlng.lat
      this.coords.lng = latlng.lng
      this.geoCodeUserPos()
    },

    waiting () {
      let array = [
        'Fetching data...',
        'This is so cool...',
        'Time for coffee...',
        'Greasing the DOL API...',
        'I &hearts; WHD...',
        'Thinking really hard...',
        'Cue the Jeopardy theme song...',
        'I wish this was faster...',
        'Sorry about the wait...',
        'What\'s an FLC again?',
        'Fasten your seatbelt...'
      ]
      // After .6s, when transition has finished, display first message
      setTimeout(() => {
        this.waitingMessage = array[Math.floor(Math.random() * array.length)]
      }, 600)
      // Change message every 4 seconds
      setInterval(() => {
        this.waitingMessage = array[Math.floor(Math.random() * array.length)]
      }, 4000)
    }

  }

}
</script>

<style lang="css">
#map {
  height: 600px;
}
</style>

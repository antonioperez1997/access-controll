<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" mapTypeId="terrain" :center="center" :zoom="11">
    <Rectangle :options="rectangle" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue';
import { GoogleMap, Rectangle } from 'vue3-google-map';
import VueTypes from 'vue-types';
export default defineComponent({
  name: 'RectangleMap',
  components: {
    GoogleMap,
    Rectangle,
  },
  props: {
    apiKey: VueTypes.string.def(''),
    center: VueTypes.object.def({ lat: 33.678, lng: -116.243 }),
    rectangle: VueTypes.object.def({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      bounds: {
        north: 33.685,
        south: 33.671,
        east: -116.234,
        west: -116.251,
      },
    }),
  },
});
</script>

<template>
    <div>
        <sdPageHeader title="Leaflet Map">
            <template v-slot:buttons>
                <div class="page-header-actions">
                    <sdCalendarButton />
                    <sdExportButton />
                    <sdShareButton />
                    <sdButton size="small" type="primary">
                        <sdFeatherIcons type="plus" size="14" />
                        Add New
                    </sdButton>
                </div>
            </template>
        </sdPageHeader>
        <Main>
            <a-row :gutter="25">
                <a-col :md="12" :xs="24">
                    <sdCards title="Leaflet Basic Map">
                        <l-map
                            :center="[50.797897, -1.077641]"
                            :zoom="15"
                            class="map-wrapper"
                        >
                            <l-tile-layer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            >
                            </l-tile-layer>
                            <l-marker
                                :lat-lng="[50.797897, -1.077641]"
                            ></l-marker>
                        </l-map>
                    </sdCards>
                </a-col>
                <a-col :md="12" :xs="24">
                    <sdCards title="Leaflet MultipleIcon Map">
                        <l-map
                            :center="[50.797897, -1.077641]"
                            :zoom="12"
                            class="map-wrapper"
                        >
                            <l-tile-layer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            >
                            </l-tile-layer>
                            <l-marker
                                v-for="item in place"
                                :key="item.id"
                                :lat-lng="item.position"
                            ></l-marker>
                        </l-map>
                    </sdCards>
                </a-col>
                <a-col :md="24" :xs="24">
                    <sdCards title="Leaflet Custom Icon Map">
                        <l-map
                            :center="[50.797897, -1.077641]"
                            :zoom="12"
                            class="map-wrapper"
                        >
                            <l-tile-layer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            >
                            </l-tile-layer>
                            <l-marker
                                :icon="fontAwesomeIcon"
                                :lat-lng="[50.797897, -1.077641]"
                            ></l-marker>
                        </l-map>
                    </sdCards>
                </a-col>
            </a-row>
        </Main>
    </div>
</template>

<script>
import { Main } from '../styled';
import L, { Icon, latLng } from 'leaflet';
import { defineComponent } from 'vue';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const fontAwesomeIcon = L.divIcon({
    html: `<i style="color: #2880CA" class="fa fa-thumb-tack fa-3x"></i>`,
    iconSize: [20, 20],
    className: 'myDivIcon',
});

export default defineComponent({
    name: 'Leaflet',
    components: {
        Main,
    },
    setup() {
        const center = latLng(50.797897, -1.077641);
        //const latLngs = latLng(50.797897, -1.077641);

        const baseUrl =
            'http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi';
        const layers = [
            {
                name: 'Weather Data',
                visible: true,
                format: 'image/png',
                layers: 'nexrad-n0r-900913',
                transparent: true,
                attribution: 'Weather data © 2012 IEM Nexrad',
            },
        ];
        const place = [
            {
                id: 1,
                position: [50.797897, -1.077641],
            },
            {
                id: 2,
                position: [50.798897, -1.013641],
            },
            {
                id: 3,
                position: [50.7997799, -1.100641],
            },
        ];
        return {
            fontAwesomeIcon,
            center,
            latLng,
            place,
            baseUrl,
            layers,
        };
    },
});
</script>

<style scoped>
.map-wrapper {
    height: 600px !important;
}
</style>

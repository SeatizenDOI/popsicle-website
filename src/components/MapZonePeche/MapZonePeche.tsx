'use client';

import {
    MapContainer,
    TileLayer,
    FeatureGroup,
    ScaleControl,
} from 'react-leaflet';
import { GeoJSON } from 'react-leaflet/GeoJSON';
import { FeatureCollection, Geometry } from 'geojson';

import { zone_peche } from '@/lib/data';

import 'leaflet/dist/leaflet.css';

const zonesGeoJSON: FeatureCollection<Geometry> = {
    type: 'FeatureCollection',
    features: Object.entries(zone_peche).map(([name, coordinates]) => ({
        type: 'Feature',
        properties: { name },
        geometry: {
            type: 'Polygon',
            coordinates: [coordinates.map(([lat, lng]) => [lng, lat])], // GeoJSON expects [lng, lat]
        },
    })),
};

export function MapZonePeche() {
    const onEachFeature = (feature: any, layer: any) => {
        layer.on('mouseover', (e: any) => {
            layer
                .bindPopup(`<strong>${feature.properties.name}</strong>`)
                .openPopup();
        });
        layer.on('click', (e: any) => {
            layer.bindPopup(`<strong>${feature.properties.name}</strong>`);
        });
    };

    return (
        <div className="h-[500px] w-full">
            <MapContainer
                center={[-21.11644398894539, 55.513590539298725]}
                zoom={9}
                className="h-full w-full"
                maxZoom={18}
            >
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution="Tiles © Esri"
                />
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/light_only_labels/{z}/{x}/{y}{r}.png'"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <GeoJSON data={zonesGeoJSON} onEachFeature={onEachFeature} />
                <FeatureGroup>
                    <ScaleControl position="bottomright" imperial={false} />
                </FeatureGroup>
            </MapContainer>
        </div>
    );
}

export default MapZonePeche;

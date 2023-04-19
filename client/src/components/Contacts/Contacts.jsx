import {
  Clusterer, Map, Placemark, YMaps
} from '@pbe/react-yandex-maps';
import React from 'react';
import { SHOP } from '../../constants/api';
import './map.css';

function Contacts() {
  return (
    <YMaps>
      <Map
        className="mapview"
        defaultState={{
          center: [55.75, 37.57],
          zoom: 11,
          controls: ["zoomControl", "fullscreenControl"],

        }}
        modules={["control.ZoomControl", "control.FullscreenControl", 'geoObject.addon.balloon', 'geoObject.addon.hint']}
      >
        <Clusterer
          options={{
            preset: "islands#circleIcon",
            groupByCoordinates: false,
            maxZoom: 11,
          }}
        >
          {SHOP?.map((point) => (
            <Placemark
              key={point.coord}
              geometry={point.coord}
              options={
                {
                  iconLayout: 'default#image',
                  iconImageHref: "icon2.png",
                  iconImageSize: [35, 45],
                }
}
              properties={
              {
                hintContent: `<div class="balloon">
                <p class="description">Магазин: ${point.name}</p>            
                <b>Адрес: ${point.address}</b>
              </div>
                `,
              }
}
            />
          ))}
        </Clusterer>
      </Map>
    </YMaps>
  );
}

export default Contacts;

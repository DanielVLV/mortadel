import { Modal } from '@mui/material';
import {
  Clusterer, Map, Placemark, YMaps
} from '@pbe/react-yandex-maps';
import React from 'react';
import './map.css';

function Contacts() {
  const array = [[55.75, 37.57], [55.85, 37.57]];
  // const mapview = {
  //   position: "absolute !important", top: 0, height: "100vh", width: "100vw"
  // };

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
          }}
        >
          {array.map((coordinates) => (
            <Placemark
              key={coordinates}
              geometry={coordinates}
              options={
                {
                  // preset: 'islands#circleIcon', // список темплейтов на сайте яндекса
                  iconLayout: 'default#image',
                  iconImageHref: "icon2.png",
                  iconImageSize: [35, 45],
                }
}
              properties={
              {
                hintContent: <Modal />,
              }
}
              // onClick={() => { console.log('ddfdfdf'); }}
            />
          ))}
        </Clusterer>
      </Map>
    </YMaps>
  );
}

export default Contacts;

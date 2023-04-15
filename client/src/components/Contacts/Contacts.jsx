import {
  Clusterer, GeolocationControl, Map, Placemark, RouteButton, YMaps
} from '@pbe/react-yandex-maps';
import React from 'react';

function Contacts() {
  const array = [[55.75, 37.57], [55.85, 37.57]];
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [55.75, 37.57],
          zoom: 9,
          controls: ["zoomControl", "fullscreenControl"],

        }}
        modules={["control.ZoomControl", "control.FullscreenControl", 'geoObject.addon.balloon', 'geoObject.addon.hint']}
      >
        <GeolocationControl options={{ float: "left" }} />
        <Clusterer
          options={{
            preset: "islands#circleDotIcon",
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
                  // iconColor: 'red', // цвет иконки, можно также задавать в hex
                }
}
              properties={
              {
                hintContent: '<div>Я появляюсь при наведении на метку</div>',
              }
}
              onClick={() => { console.log('ddfdfdf'); }}
            />
          ))}
        </Clusterer>
        <RouteButton options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
}

export default Contacts;

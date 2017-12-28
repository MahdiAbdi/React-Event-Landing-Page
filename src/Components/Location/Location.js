import React from 'react';
const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");

const Location = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.dz}
    defaultCenter={props.position}
  >
    <Marker
      position={props.position}
    />
  </GoogleMap>
);

const FinalLoc = (props =>
  <div className="mapwrapper">
    <Location className="mymap"
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `${props.height}px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      dz={props.defaultZoom} position={props.position}
    />
    <section className="onmap opposite">
      <h1 className="section-title">
        <span className="icon-inner">
          <span className="fa-stack negative">
            <i className="fa rhex fa-stack-2x"></i>
            <i className={`fa fa-${props.icon} fa-stack-1x`}></i>
          </span>
        </span>
        <span className="title-inner animated fadeInRight visible">
          {props.title}
        </span>
      </h1>
      <p>
        {props.text}
      </p>
      <a href={props.button.href} className="btn btn-theme">{props.button.text}<i class={`fa fa-${props.button.icon}`} /></a>
    </section>
  </div>
);

export default FinalLoc;

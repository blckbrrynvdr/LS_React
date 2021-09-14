import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import './Map.css';
import { connect } from "react-redux";

export class Map extends Component {
  map = null;

  mapContainer = React.createRef();

  drawRoute = (map, coordinates) => {
    map.flyTo({
      center: coordinates[0],
      zoom: 15
    });

    const layerId = "route";
    
    if (map.getLayer(layerId)) {
      map.removeLayer(layerId);
      map.removeSource(layerId);
    }
  
    map.addLayer({
      id: layerId,
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8
      }
    });
  };

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoiYmxja2JycnludmRyIiwiYSI6ImNrc292b3dhazByaWEycG1vOXc1N3ltYm0ifQ.EtOQILHCgpf2sydJU9vFsA";
    
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    })
  }

  componentDidUpdate() {
    if (this.props.routes.length > 0) {
      this.drawRoute(this.map, this.props.routes);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div data-testid="map" className="map-wrapper">
        <div className="map" ref={this.mapContainer} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  routes: state.routes.routes,
})

export default connect(
  mapStateToProps
)(Map);
import { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      setLoading(true);
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data);
        setLoading(false);
      });
    }
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List
              places={places}
              childClicked={childClicked}
              loading={loading}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;

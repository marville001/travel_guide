import {CssBaseline, Grid} from "@material-ui/core"

import Header from "./components/Header"
import Map from "./components/Map"
import List from "./components/List"

const  App = ()=> {
  return (
    <>
    <CssBaseline>
      <Header />
      <Grid container spacing={3} style={{width:"100%"}}>
      <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
      <h1>Hello World</h1>
    </CssBaseline>
    </>
  );
}

export default App;

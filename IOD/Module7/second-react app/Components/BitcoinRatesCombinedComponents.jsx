import BitcoinRatesExercise1 from "./BitcoinRates";
import BitcoinRatesExercise2 from "./BitcoinRatesCustomHook";
import BitcoinRatesExercise3 from "./BitcoinRatesEmoji";

import Grid from "@mui/material/Grid";

function BitcoinRatesCombined() {
  return (
    <Grid container spacing={2} my={2}>
      <Grid item xs={4}>
        <BitcoinRatesExercise1></BitcoinRatesExercise1>
      </Grid>
      <Grid item xs={4}>
        <BitcoinRatesExercise2></BitcoinRatesExercise2>
      </Grid>
      <Grid item xs={4}>
        <BitcoinRatesExercise3></BitcoinRatesExercise3>
      </Grid>
    </Grid>
  );
}

export default BitcoinRatesCombined;

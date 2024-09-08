import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RevenueSourceType} from "../../types/common";

// Define a type for the slice state
interface RevenueDistributionSource{
  source?:RevenueSourceType;
}

// Define the initial state using that type
const initialState: RevenueDistributionSource= {
  source: undefined,
};

export const revenueDistributionSlice = createSlice({
  name: "RevenueDistributionSlice",
  initialState,
  reducers: {
    setRevenueDistributionSource:(state, action: PayloadAction<RevenueSourceType | undefined>) => {
      state.source=action.payload;
    },
  },
});

export const { setRevenueDistributionSource} = revenueDistributionSlice.actions;

export default revenueDistributionSlice.reducer;

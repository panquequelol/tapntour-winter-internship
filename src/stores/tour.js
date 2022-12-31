import { defineStore } from "pinia";
import axios from "axios";

const tour_endpoint = "https://tapntour-wk-db.glyfo.workers.dev/api/tours";

export const useTourStore = defineStore({
  id: "tour",
  state: () => ({
    tours: [],
    tour: {},
    loading: false,
    error: null,
  }),
  getters: {
    getTourbyCountry() {
      return (country) =>
        this.tours.filter(
          (tour) => country.toUpperCase() == tour.country.toUpperCase()
        );
    },
  },
  actions: {
    async fetchTours() {
      this.loading = true;
      try {
        const { data } = await axios.post(tour_endpoint, {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        console.log("[tour store]: fetch data");
        this.tours = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchTourbyId(id) {
      this.loading = true;
      try {
        const { data } = await axios.post(`${tour_endpoint}/${id}`, {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        console.log(`[tour store]: fetch data for tour ${id}`);
        this.tour = data[0];
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});

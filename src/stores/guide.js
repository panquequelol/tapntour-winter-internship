import { defineStore } from "pinia";
import axios from "axios";

const guide_endpoint = "https://tapntour-wk-db.glyfo.workers.dev/api/guides";

export const useGuideStore = defineStore({
  id: "guide",
  state: () => ({
    guides: [],
    guide: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchGuides() {
      this.guides = [];
      this.loading = true;
      try {
        const { data } = await axios.post(guide_endpoint, {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
        console.log("[guide store]: fetch data");
        this.guides = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});

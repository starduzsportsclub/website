import axios from "axios";

export const api = axios.create({
    baseURL: "https://sheets.googleapis.com/v4/spreadsheets/13utSC_x4qaHPmOik9ArA3W696CwytFJQsaBwTOptVG4/values",
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        valueInputOption: "RAW"
    }
})




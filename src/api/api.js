import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class HealthHubApi {

  // TODO: Look into Axios Interceptor
    static async request(endpoint, data = {}, method = "get") {
      console.log(`Making a ${method} request to ${endpoint} with data:`, data);
      const url = `${BASE_URL}/${endpoint}`;
      const params = (method === "get") ? data : {};

      try {
        return (await axios({ url, method, data, params })).data;
      } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }
    }

    static async getDoctors(filters = {}) {
      let res = await this.request("doctors", filters);
      return res.doctors;
    }
  
    static async addDoctor(doctorData) {
      let res = await this.request("doctors", doctorData, "post");
      return res.doctor;
    }

    // Method to delete a doctor by ID
    static async deleteDoctor(doctorId) {
      let res = await this.request(`doctors/${doctorId}`, {}, "delete");
      return res.deleted;
    }

    static async getAdministrators() {
      let res = await this.request("administrators");
      return res.administrators;
    }

    static async deleteAdministrator(adminId) {
      let res = await this.request(`administrators/${adminId}`, {}, "delete");
      return res.deleted;
    }

    // New method to add a patient
    static async addPatient(patientData) {
      let res = await this.request("patients", patientData, "post");
      return res.patient;
    }

    // New method to delete a patient by ID
    static async deletePatient(patientId) {
      let res = await this.request(`patients/${patientId}`, {}, "delete");
      return res.deleted;
    }
}

export default HealthHubApi;

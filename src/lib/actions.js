import axios from "axios";

export const sendEmail = async (form) => {
    try {
        const response = await axios.post("/api/sendEmail", JSON.stringify(form), { headers: { 'Content-Type': "application/json" } })
        return response;
    } catch (error) {
        return error;
    }
}
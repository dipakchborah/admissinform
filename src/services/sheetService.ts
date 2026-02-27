export interface RegistrationData {
  studentName: string;
  presentSchool: string;
  class: string;
  mobile: string;
  address: string;
}

const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL as string | undefined;

// export const submitRegistration = async (
//   data: RegistrationData
// ): Promise<{ success: boolean }> => {
//   if (!SHEET_URL) {
//     await new Promise((r) => setTimeout(r, 1200));
//     return { success: true };
//   }

//   const body = new URLSearchParams(data as any).toString();

//   const res = await fetch(SHEET_URL, {
//     method: "POST",
//     body,
//   });

//   if (!res.ok) throw new Error("Submission failed");

//   return { success: true };
// };


export const submitRegistration = async (
  data: RegistrationData
): Promise<{ success: boolean }> => {

  const formData = new FormData();

  formData.append("entry.1895257781", data.studentName);
  formData.append("entry.69201383", data.presentSchool);
  formData.append("entry.233540977", data.class);
  formData.append("entry.1371650482", data.mobile);
  formData.append("entry.1168476501", data.address);

  await fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLSdkHpVGwR_Jxw5hfNM1-0RUDrCxbvaphz34pcz52BV6SCS3Jg/formResponse",
    {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }
  );

  return { success: true };
};
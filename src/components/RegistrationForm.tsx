import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitRegistration, type RegistrationData } from "@/services/sheetService";
import { CheckCircle, Loader2 } from "lucide-react";

const classes = ["VI", "VII", "VIII", "IX", "X", "XI", "XII"];

const RegistrationForm = () => {
  const [form, setForm] = useState<RegistrationData>({
    studentName: "",
    presentSchool: "",
    class: "",
    mobile: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: keyof RegistrationData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!form.studentName.trim() || !form.class || !form.mobile.trim()) {
      setError("Please fill all required fields.");
      return;
    }
    if (!/^\d{10}$/.test(form.mobile.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      await submitRegistration(form);
      setSuccess(true);
      setForm({ studentName: "", presentSchool: "", class: "", mobile: "", address: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="register" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for registering. We will contact you shortly.
            </p>
            <Button
              onClick={() => setSuccess(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              Register Another Student
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Register Now
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Fill the form below to register for admission 2026–27.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl shadow-elevated p-6 md:p-10 space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="studentName">Student Name *</Label>
            <Input
              id="studentName"
              value={form.studentName}
              onChange={(e) => handleChange("studentName", e.target.value)}
              placeholder="Enter student name"
              required
              maxLength={100}
              className="focus-visible:ring-primary"
            />
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="fatherName">Father's Name *</Label>
            <Input
              id="fatherName"
              value={form.fatherName}
              onChange={(e) => handleChange("fatherName", e.target.value)}
              placeholder="Enter father's name"
              required
              maxLength={100}
              className="focus-visible:ring-primary"
            />
          </div> */}

          <div className="space-y-2">
            <Label htmlFor="presentSchool">Present School</Label>
            <Input
              id="presentSchool"
              value={form.presentSchool}
              onChange={(e) => handleChange("presentSchool", e.target.value)}
              placeholder="Enter present school"
              maxLength={150}
              className="focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="class">Class *</Label>
            <Select value={form.class} onValueChange={(v) => handleChange("class", v)}>
              <SelectTrigger className="focus:ring-primary">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((c) => (
                  <SelectItem key={c} value={c}>
                    Class {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number *</Label>
            <Input
              id="mobile"
              type="tel"
              value={form.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              placeholder="10-digit mobile number"
              required
              maxLength={10}
              className="focus-visible:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Enter address"
              maxLength={250}
              className="focus-visible:ring-primary"
            />
          </div>

          {error && <p className="text-destructive text-sm font-medium">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full text-base h-12 shadow-card"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Registration"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;

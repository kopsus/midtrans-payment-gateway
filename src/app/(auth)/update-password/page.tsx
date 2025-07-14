"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/init";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      alert("Gagal memperbarui password");
    } else {
      alert("Password berhasil diubah. Silakan login ulang.");
      await supabase.auth.signOut();
      router.push("/sign-in");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-sm space-y-4">
        <Input
          type="password"
          placeholder="Password baru"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          min={6}
        />
        <Button onClick={handleUpdate} disabled={loading} className="w-full">
          {loading ? "Memproses..." : "Update Password"}
        </Button>
      </div>
    </div>
  );
};

export default UpdatePassword;

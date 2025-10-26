import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
);

export async function POST(req: Request) {
  try {
    const { email, plan, source } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 });
    }

    const { error } = await supabase
      .from("waitlist")
      .insert({
        email: email.trim().toLowerCase(),
        plan,
        source: source || "membership_page",
      });

    if (error?.message?.includes("duplicate key")) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}

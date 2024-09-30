import { messageService } from "@/lib/message";
import { ISaveMessage } from "@/types/post";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const res: ISaveMessage = await req.json();
    const { email, name, message } = res;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return NextResponse.json({ message: "Invalid Input" }, { status: 422 });
    }

    const newMessage = {
      email,
      name,
      message,
    };
    await messageService.saveMessage(newMessage);
    return NextResponse.json({ message: "Message received" }, { status: 200 });
  }
}

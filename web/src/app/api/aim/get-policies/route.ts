//! AIM Intelligence
import { NextRequest, NextResponse } from "next/server";
import { authorizeRequestOrThrow } from "@/src/ee/features/playground/server/authorizeRequest";

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const { project_id } = await request.json();

    console.log("Project ID:", project_id);

    if (!project_id) {
      return NextResponse.json(
        { error: "project_id is required" },
        { status: 400 }
      );
    }

    // Authorize request
    await authorizeRequestOrThrow(project_id);

    // URLSearchParams를 사용하여 x-www-form-urlencoded 형식으로 변환
    const formData = new URLSearchParams();
    formData.append('project_id', project_id);

    // Call external API
    const response = await fetch(
      "http://211.115.110.155:8701/get-project-policies",
      {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString() // URLSearchParams 객체를 문자열로 변환
      }
    );

    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      return NextResponse.json(
        { error: "Failed to fetch policies", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();

    console.log("Response data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in get-policies:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: error.message.includes("Unauthorized") ? 401 : 500 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

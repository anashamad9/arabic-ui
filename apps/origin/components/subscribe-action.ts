"use server";

import { z } from "zod";

type EmailOctopusError = {
  code?: string;
  detail?: string;
  title?: string;
};

const subscribeSchema = z.object({
  email: z.email("يرجى إدخال عنوان بريد إلكتروني صحيح"),
});

type SubscribeResult = { success: true } | { success: false; error: string };

export async function subscribe(email: string): Promise<SubscribeResult> {
  // Check environment variables and return error instead of throwing
  if (!process.env.EMAIL_OCTOPUS_API_KEY) {
    console.error("متغير بيئة EMAIL_OCTOPUS_واجهة برمجية_KEY المفقود");
    return {
      error: "خطأ في تكوين الخدمة. يرجى المحاولة مرة أخرى لاحقًا.",
      success: false,
    };
  }

  if (!process.env.EMAIL_OCTOPUS_LIST_ID) {
    console.error("مفقود EMAIL_OCTOPUS_LIST_ID متغير البيئة");
    return {
      error: "خطأ في تكوين الخدمة. يرجى المحاولة مرة أخرى لاحقًا.",
      success: false,
    };
  }

  const result = subscribeSchema.safeParse({ email: email.trim() });
  if (!result.success) {
    return {
      error:
        result.error.issues[0]?.message || "تنسيق البريد الإلكتروني غير صالح.",
      success: false,
    };
  }

  try {
    console.log("محاولة الاشتراك في البريد الإلكتروني:", result.data.email);

    const response = await fetch(
      `https://api.emailoctopus.com/lists/${process.env.EMAIL_OCTOPUS_LIST_ID}/contacts`,
      {
        body: JSON.stringify({
          email_address: result.data.email,
          fields: {},
          status: "subscribed",
          tags: [],
        }),
        headers: {
          Authorization: `حامل ${process.env.EMAIL_OCTOPUS_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    );

    const data = (await response.json()) as EmailOctopusError;

    // Always log API errors for debugging
    if (!response.ok) {
      console.error("EmailOctopus واجهة برمجية خطأ:", {
        data,
        email: result.data.email,
        status: response.status,
        statusText: response.statusText,
      });
    }

    if (!response.ok) {
      if (response.status === 429) {
        return {
          error: "محاولات كثيرة. يرجى المحاولة مرة أخرى في وقت لاحق.",
          success: false,
        };
      }

      // Provide more specific error messages based on status codes
      if (response.status === 400) {
        return {
          error: data.detail || data.title || "عنوان بريد إلكتروني غير صالح.",
          success: false,
        };
      }

      if (response.status === 401) {
        console.error("فشل مصادقة EmailOctopus واجهة برمجية");
        return {
          error: "خطأ في تكوين الخدمة. يرجى المحاولة مرة أخرى لاحقًا.",
          success: false,
        };
      }

      return {
        error:
          data.detail ||
          data.title ||
          "فشل في الاشتراك. يرجى المحاولة مرة أخرى.",
        success: false,
      };
    }

    console.log("البريد الإلكتروني المشترك بنجاح:", result.data.email);
    return { success: true };
  } catch (error) {
    console.error("خطأ غير متوقع أثناء الاشتراك:", {
      email: result.data.email,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    return {
      error: "خطأ في الشبكة. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",
      success: false,
    };
  }
}

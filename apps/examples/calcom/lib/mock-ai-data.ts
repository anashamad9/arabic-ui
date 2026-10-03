export interface ReferenceLink {
  title: string;
  url: string;
}

export const MOCK_AI_RESPONSE = `I'd be happy to help you with billing information for [Cal.com](http://Cal.com)! Here's what you need to know about billing and costs:

## Credit System Overview

[Cal.com](http://Cal.com) uses a credit-based system for messaging (SMS/WhatsApp) and AI phone calls. Credits work as a flexible payment method where **1 credit = $0.01 USD**.

## Credit Allocations by Plan

**Free Users:**
- No free credits included
- Must purchase credits manually from Billing Settings

**Team Plan:**
- 750 credits per team member per month
- Credits reset at the start of each billing cycle
- Additional credits can be purchased from Team Settings

**Organizations (Enterprise):**
- 1000 credits per team member per month
- SMS/WhatsApp sending is free (doesn't consume credits)
- Messaging costs covered through organization billing

## Credit Usage Costs

**SMS/WhatsApp Messages:**
- Charged per segment (not per message)
- Standard messages: up to 160 characters per segment
- Messages with emojis/special characters: up to 70 characters per segment
- International rates vary by country (based on Twilio rates + 80% processing fee)

**[Cal.ai](http://Cal.ai) (AI Phone Agent):**
- 29 credits per minute
- Equals $0.29 per minute

## Paid Bookings

For collecting payments from clients, [Cal.com](http://Cal.com) integrates with Stripe. You can set up paid event types to receive payments when someone books with you.

Would you like more details about any specific aspect of billing, such as setting up paid bookings or purchasing additional credits?`;

export const MOCK_REFERENCE_LINKS: ReferenceLink[] = [
  {
    title: "المؤسسات (المؤسسة)",
    url: "https://cal.com/help/billing-and-usage/messaging-credits#organizations-enterprise",
  },
  {
    title: "مستخدمون مجانيون",
    url: "https://cal.com/help/billing-and-usage/messaging-credits#free-users",
  },
  {
    title: "نظام الائتمان",
    url: "https://cal.com/help/billing-and-usage/messaging-credits#credit-system",
  },
  {
    title: "كم عدد الائتمانات التي تحصل عليها؟",
    url: "https://cal.com/help/workflows/credits#how-many-credits-do-you-get",
  },
  {
    title: "الفوترة القائمة على القطاع",
    url: "https://cal.com/help/billing-and-usage/messaging-credits#segment-based-billing",
  },
  {
    title: "خطة الفريق",
    url: "https://cal.com/help/billing-and-usage/messaging-credits#team-plan",
  },
  {
    title: "كيفية إعداد نوع الحدث لتلقي المدفوعات",
    url: "https://cal.com/help/event-types/how-to-receive-payments#how-to-set-up-an-event-type-to-receive-payments",
  },
  {
    title: "كال.الذكاء الاصطناعي",
    url: "https://cal.com/help/billing-and-usage/messaging-credits#calai",
  },
  {
    title:
      "كيف يعمل التسعير لـ كال.الذكاء الاصطناعي؟ ما هي تكلفة الدقيقة الواحدة؟",
    url: "https://cal.com/help/cal-ai/cal-ai-help#how-does-pricing-work-for-calai-what-is-the-cost-per-minute",
  },
  {
    title: "نظرة عامة على الائتمانات",
    url: "https://cal.com/help/billing-and-usage/messaging-credits#overview-of-credits",
  },
  {
    title: "اتصالات متعددة الحقول",
    url: "https://cal.com/help/routing/connect-routing-form-to-booking-questions#multiple-field-connections",
  },
  {
    title: "الحجوزات المدفوعة",
    url: "https://cal.com/help/bookings/paid-bookings#paid-bookings",
  },
  {
    title: "🌍 بلدان أخرى",
    url: "https://cal.com/help/billing-and-usage/messaging-credits#-other-countries",
  },
  {
    title: "إنشاء حسابك",
    url: "https://cal.com/help/quick-start/create-account#create-your-account",
  },
  {
    title: "الحل: مطابقة المعرفات",
    url: "https://cal.com/help/routing/connect-routing-form-to-booking-questions#the-solution-matching-identifiers",
  },
  {
    title: "الخطوة 2: إنشاء سؤال الحجز المطابق",
    url: "https://cal.com/help/routing/connect-routing-form-to-booking-questions#step-2-create-a-matching-booking-question",
  },
  {
    title: "تكوين سؤال الحجز",
    url: "https://cal.com/help/routing/connect-routing-form-to-booking-questions#booking-question-configuration",
  },
];

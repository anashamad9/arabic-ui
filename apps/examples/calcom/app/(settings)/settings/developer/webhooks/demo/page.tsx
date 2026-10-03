import type { WebhookItem } from "../webhooks-list-content";
import { WebhooksPageContent } from "../webhooks-page-content";

const demoWebhooks: WebhookItem[] = [
  {
    date: "2021-10-20",
    enabled: true,
    events: [
      "إلغاء الحجز",
      "تم إنشاء الحجز",
      "رفض الحجز",
      "طلب الحجز",
      "بدء عملية دفع الحجز",
      "إعادة جدولة الحجز",
      "الحجز المدفوع",
      "حجز عدم الحضور محدث",
      "الاجتماع المنتهي",
      "بدأ الاجتماع",
      "تسجيل رابط التحميل جاهز",
      "إنشاء نص",
      "النموذج المقدم",
    ],
    id: "wh_1",
    url: "https://testurl.com/894357943857",
    userAvatar:
      "https://pbs.twimg.com/profile_images/1994776674391457792/7utKOMi6_400x400.jpg",
    userId: "user_1",
    userInitials: "JD",
    userName: "جون دو",
  },
  {
    date: "2024-01-15",
    enabled: true,
    events: ["تم إنشاء الحجز", "إلغاء الحجز"],
    id: "wh_2",
    url: "https://api.example.com/webhooks/booking-created",
    userAvatar:
      "https://pbs.twimg.com/profile_images/1994776674391457792/7utKOMi6_400x400.jpg",
    userId: "user_1",
    userInitials: "JD",
    userName: "جون دو",
  },
  {
    date: "2024-02-01",
    enabled: false,
    events: ["بدأ الاجتماع", "الاجتماع المنتهي"],
    id: "wh_3",
    url: "https://hooks.myapp.com/calcom",
    userId: "user_2",
    userInitials: "JS",
    userName: "جين سميث",
  },
];

export default function WebhooksDemoPage() {
  return <WebhooksPageContent webhooks={demoWebhooks} />;
}

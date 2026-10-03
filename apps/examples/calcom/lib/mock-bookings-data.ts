/**
 * Mock data for bookings that matches Cal.com's data structure.
 * This enables easier integration with the actual Cal.com API later.
 *
 * Based on Cal.com's Booking model from packages/trpc/server/routers/viewer/bookings/get.handler.ts
 */

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type BookingStatus =
  | "ACCEPTED"
  | "PENDING"
  | "CANCELLED"
  | "REJECTED"
  | "AWAITING_HOST";

export type SchedulingType = "ROUND_ROBIN" | "COLLECTIVE" | "MANAGED" | null;

export interface BookingUser {
  id: number;
  name: string | null;
  email: string;
  avatarUrl: string | null;
  username: string | null;
  timeZone: string;
}

export interface BookingAttendee {
  id: number;
  email: string;
  name: string;
  timeZone: string;
  locale: string | null;
  bookingId: number;
  noShow: boolean | null;
}

export type DisableScope = "HOST_AND_ATTENDEE" | "ATTENDEE_ONLY";

export interface BookingEventType {
  id: number;
  slug: string;
  title: string;
  eventName: string | null;
  price: number;
  recurringEvent: {
    freq: number;
    count: number;
    interval: number;
  } | null;
  currency: string;
  metadata: Record<string, unknown> | null;
  disableGuests: boolean;
  bookingFields: unknown[] | null;
  seatsPerTimeSlot: number | null;
  seatsShowAttendees: boolean;
  seatsShowAvailabilityCount: boolean;
  eventTypeColor: {
    lightEventTypeColor: string;
    darkEventTypeColor: string;
  } | null;
  customReplyToEmail: string | null;
  allowReschedulingPastBookings: boolean;
  hideOrganizerEmail: boolean;
  disableCancelling: boolean;
  disableCancellingScope: DisableScope;
  disableRescheduling: boolean;
  disableReschedulingScope: DisableScope;
  minimumRescheduleNotice: number;
  teamId: number | null;
  parentId: number | null;
  schedulingType: SchedulingType;
  hosts: {
    userId: number;
    user: {
      id: number;
      email: string;
    };
  }[];
  length: number;
  team: {
    id: number;
    name: string;
    slug: string;
  } | null;
  hostGroups: {
    id: number;
    name: string;
  }[];
}

export interface BookingReference {
  id: number;
  type: string;
  uid: string;
  meetingId: string | null;
  meetingPassword: string | null;
  meetingUrl: string | null;
  bookingId: number;
  externalCalendarId: string | null;
  deleted: boolean | null;
  credentialId: number | null;
}

export interface BookingPayment {
  paymentOption: string | null;
  amount: number;
  currency: string;
  success: boolean;
  appId: string | null;
  refunded: boolean;
}

export interface BookingSeat {
  referenceUid: string;
  attendee: {
    email: string;
  };
}

export interface AssignmentReason {
  id: number;
  reasonString: string;
  bookingId: number;
  createdAt: Date;
}

export interface BookingReport {
  id: number;
  reportedById: number;
  reason: string;
  description: string | null;
  createdAt: Date;
}

export interface Booking {
  id: number;
  title: string;
  userPrimaryEmail: string | null;
  description: string | null;
  customInputs: Record<string, unknown> | null;
  startTime: Date;
  createdAt: Date;
  updatedAt: Date;
  endTime: Date;
  metadata: Record<string, unknown> | null;
  uid: string;
  responses: Record<string, unknown> | null;
  recurringEventId: string | null;
  location: string | null;
  status: BookingStatus;
  paid: boolean;
  fromReschedule: string | null;
  rescheduled: boolean;
  rescheduledBy: string | null;
  cancelledBy: string | null;
  isRecorded: boolean;
  cancellationReason: string | null;
  rejectionReason: string | null;
  routedFromRoutingFormReponse: { id: number } | null;
  eventType: BookingEventType | null;
  references: BookingReference[];
  payment: BookingPayment[];
  user: BookingUser | null;
  attendees: BookingAttendee[];
  seatsReferences: BookingSeat[];
  assignmentReason: AssignmentReason[];
  report: BookingReport | null;
}

// =============================================================================
// MOCK DATA
// =============================================================================

const userPasquale: BookingUser = {
  avatarUrl:
    "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=72&h=72&dpr=2&q=80",
  email: "pasquale@cal.com",
  id: 1,
  name: "محمد أحمد",
  timeZone: "Europe/Rome",
  username: "باسكوال",
};

const userKeith: BookingUser = {
  avatarUrl: null,
  email: "keith@cal.com",
  id: 2,
  name: "كيث ويليامز",
  timeZone: "America/Los_Angeles",
  username: "كيث",
};

const userPeer: BookingUser = {
  avatarUrl:
    "https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?w=72&h=72&dpr=2&q=80",
  email: "peer@cal.com",
  id: 3,
  name: "أحمد سالم",
  timeZone: "Europe/London",
  username: "الأقران",
};

const _userCarina: BookingUser = {
  avatarUrl: null,
  email: "carina@cal.com",
  id: 4,
  name: "كارينا وولهايم",
  timeZone: "Europe/Berlin",
  username: "كارينا",
};

const _userJonathan: BookingUser = {
  avatarUrl: null,
  email: "jonathan@cal.com",
  id: 5,
  name: "جوناثان جالو",
  timeZone: "Europe/London",
  username: "جوناثان",
};

const _userSusan: BookingUser = {
  avatarUrl: null,
  email: "susan@example.com",
  id: 6,
  name: "سوزان مولر",
  timeZone: "America/New_York",
  username: "سوزان",
};

const _userDavid: BookingUser = {
  avatarUrl: null,
  email: "david@example.com",
  id: 7,
  name: "ديفيد بورينيوس",
  timeZone: "Europe/Stockholm",
  username: "دافيد",
};

const defaultEventType: BookingEventType = {
  allowReschedulingPastBookings: false,
  bookingFields: null,
  currency: "usd",
  customReplyToEmail: null,
  disableCancelling: false,
  disableCancellingScope: "HOST_AND_ATTENDEE",
  disableGuests: false,
  disableRescheduling: false,
  disableReschedulingScope: "HOST_AND_ATTENDEE",
  eventName: null,
  eventTypeColor: null,
  hideOrganizerEmail: false,
  hostGroups: [],
  hosts: [],
  id: 1,
  length: 30,
  metadata: null,
  minimumRescheduleNotice: 0,
  parentId: null,
  price: 0,
  recurringEvent: null,
  schedulingType: null,
  seatsPerTimeSlot: null,
  seatsShowAttendees: false,
  seatsShowAvailabilityCount: false,
  slug: "30min",
  team: null,
  teamId: null,
  title: "30 دقيقة اجتماع",
};

const defaultBookingFields = {
  assignmentReason: [],
  cancellationReason: null,
  cancelledBy: null,
  customInputs: null,
  fromReschedule: null,
  isRecorded: false,
  metadata: null,
  paid: false,
  payment: [],
  recurringEventId: null,
  references: [],
  rejectionReason: null,
  report: null,
  rescheduled: false,
  rescheduledBy: null,
  responses: null,
  routedFromRoutingFormReponse: null,
  seatsReferences: [],
};

export const mockPastBookings: Booking[] = [
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 1,
        email: "keith@cal.com",
        id: 1,
        locale: "en",
        name: "كيث ويليامز",
        noShow: false,
        timeZone: "America/Los_Angeles",
      },
      {
        bookingId: 1,
        email: "pasquale@cal.com",
        id: 2,
        locale: "en",
        name: "محمد أحمد",
        noShow: false,
        timeZone: "Europe/Rome",
      },
    ],
    createdAt: new Date("2025-11-20T10:00:00"),
    description:
      "غرفة السفينة لتصحيح مزامنة التقويم وفتح قائمة انتظار العلاقات العامة.",
    endTime: new Date("2025-11-25T15:00:00"),
    eventType: {
      ...defaultEventType,
      id: 10,
      length: 20,
      slug: "engineering-chat",
      title: "دردشة هندسية",
    },
    id: 1,
    location: "integrations:daily",
    rescheduled: true,
    startTime: new Date("2025-11-25T14:40:00"),
    status: "ACCEPTED",
    title: "مزامنة الإصدار",
    uid: "abc123-booking-1",
    updatedAt: new Date("2025-11-24T09:30:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 2,
        email: "carina@cal.com",
        id: 3,
        locale: "en",
        name: "كارينا وولهايم",
        noShow: false,
        timeZone: "Europe/Berlin",
      },
      {
        bookingId: 2,
        email: "jonathan@cal.com",
        id: 4,
        locale: "en",
        name: "جوناثان جالو",
        noShow: false,
        timeZone: "Europe/London",
      },
      {
        bookingId: 2,
        email: "pasquale@cal.com",
        id: 5,
        locale: "en",
        name: "محمد أحمد",
        noShow: false,
        timeZone: "Europe/Rome",
      },
    ],
    createdAt: new Date("2025-11-01T14:00:00"),
    description: "مناقشة حول تدفق المنصة على متن الطائرة والتحسينات القادمة.",
    endTime: new Date("2025-11-07T12:00:00"),
    eventType: {
      ...defaultEventType,
      eventTypeColor: {
        darkEventTypeColor: "#f53468",
        lightEventTypeColor: "#f53468",
      },
      id: 11,
      slug: "platform-meeting",
      title: "اجتماع المنصة",
    },
    id: 2,
    location: "integrations:daily",
    rescheduled: false,
    startTime: new Date("2025-11-07T11:30:00"),
    status: "ACCEPTED",
    title: "خارطة طريق للمنصة",
    uid: "abc123-booking-2",
    updatedAt: new Date("2025-11-01T14:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 3,
        email: "keith@cal.com",
        id: 6,
        locale: "en",
        name: "كيث ويليامز",
        noShow: false,
        timeZone: "America/Los_Angeles",
      },
      {
        bookingId: 3,
        email: "pasquale@cal.com",
        id: 7,
        locale: "en",
        name: "محمد أحمد",
        noShow: false,
        timeZone: "Europe/Rome",
      },
    ],
    createdAt: new Date("2025-11-01T09:00:00"),
    description: null,
    endTime: new Date("2025-11-06T15:20:00"),
    eventType: {
      ...defaultEventType,
      id: 10,
      length: 20,
      slug: "engineering-chat",
      title: "دردشة هندسية",
    },
    id: 3,
    location: "integrations:daily",
    rescheduled: false,
    startTime: new Date("2025-11-06T15:00:00"),
    status: "ACCEPTED",
    title: "جلسة تطوير تسجيل الدخول",
    uid: "abc123-booking-3",
    updatedAt: new Date("2025-11-01T09:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 4,
        email: "susan@example.com",
        id: 8,
        locale: "en",
        name: "إيلينا مورو",
        noShow: false,
        timeZone: "America/New_York",
      },
      {
        bookingId: 4,
        email: "pasquale@cal.com",
        id: 9,
        locale: "en",
        name: "محمد أحمد",
        noShow: false,
        timeZone: "Europe/Rome",
      },
    ],
    createdAt: new Date("2025-10-28T11:00:00"),
    description: "نطاق الفواتير v2 - قواعد التناسب والغبار.",
    endTime: new Date("2025-11-03T15:30:00"),
    eventType: defaultEventType,
    id: 4,
    location: "integrations:google_meet",
    rescheduled: false,
    startTime: new Date("2025-11-03T15:00:00"),
    status: "ACCEPTED",
    title: "تمرير نطاق الفواتير v2",
    uid: "abc123-booking-4",
    updatedAt: new Date("2025-10-28T11:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 5,
        email: "pasquale@cal.com",
        id: 10,
        locale: "en",
        name: "محمد أحمد",
        noShow: false,
        timeZone: "Europe/Rome",
      },
      {
        bookingId: 5,
        email: "otto@nordvik.io",
        id: 11,
        locale: "en",
        name: "أوتو نوردفيك",
        noShow: false,
        timeZone: "Europe/Stockholm",
      },
    ],
    createdAt: new Date("2025-10-01T08:00:00"),
    description: "شروط القناة والتسويق المشترك لنوردفيك.",
    endTime: new Date("2025-10-13T16:00:00"),
    eventType: defaultEventType,
    id: 5,
    location: "integrations:google_meet",
    rescheduled: true,
    startTime: new Date("2025-10-13T15:30:00"),
    status: "ACCEPTED",
    title: "تسجيل الوصول لشراكة Nordvik",
    uid: "abc123-booking-5",
    updatedAt: new Date("2025-10-12T14:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 6,
        email: "peer@cal.com",
        id: 12,
        locale: "en",
        name: "أحمد سالم",
        noShow: false,
        timeZone: "Europe/London",
      },
      {
        bookingId: 6,
        email: "keith@cal.com",
        id: 13,
        locale: "en",
        name: "كيث ويليامز",
        noShow: false,
        timeZone: "America/Los_Angeles",
      },
      {
        bookingId: 6,
        email: "pasquale@cal.com",
        id: 14,
        locale: "en",
        name: "محمد أحمد",
        noShow: false,
        timeZone: "Europe/Rome",
      },
    ],
    createdAt: new Date("2025-10-05T10:00:00"),
    description: "خطة قطع مكتبة المكونات وكسر التغييرات.",
    endTime: new Date("2025-10-10T17:30:00"),
    eventType: {
      ...defaultEventType,
      id: 12,
      schedulingType: "COLLECTIVE",
      slug: "team-meeting",
      team: {
        id: 1,
        name: "كال",
        slug: "cal",
      },
      teamId: 1,
      title: "اجتماع الفريق",
    },
    id: 6,
    location: "integrations:google_meet",
    rescheduled: false,
    startTime: new Date("2025-10-10T17:00:00"),
    status: "ACCEPTED",
    title: "تصميم نظام الهجرة",
    uid: "abc123-booking-6",
    updatedAt: new Date("2025-10-05T10:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 7,
        email: "priya@helixstudio.co",
        id: 15,
        locale: "en",
        name: "بريا نارايان",
        noShow: false,
        timeZone: "America/Los_Angeles",
      },
    ],
    createdAt: new Date("2025-10-01T09:00:00"),
    description: "ساعات العمل المدفوعة - صفحة التسعير تمزق.",
    endTime: new Date("2025-10-08T14:45:00"),
    eventType: {
      ...defaultEventType,
      eventTypeColor: {
        darkEventTypeColor: "#fd6d06",
        lightEventTypeColor: "#fd6d06",
      },
      id: 5,
      length: 45,
      price: 9900,
      slug: "paid-consultation",
      title: "الاستشارة المدفوعة",
    },
    id: 7,
    location: "integrations:zoom",
    paid: true,
    payment: [
      {
        amount: 9900,
        appId: "stripe",
        currency: "usd",
        paymentOption: "ON_BOOKING",
        refunded: false,
        success: true,
      },
    ],
    rescheduled: false,
    startTime: new Date("2025-10-08T14:00:00"),
    status: "ACCEPTED",
    title: "ساعات العمل ث/بريا نارايان",
    uid: "abc123-booking-7",
    updatedAt: new Date("2025-10-01T09:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 8,
        email: "designer@example.com",
        id: 16,
        locale: "en",
        name: "ليفيا مارش",
        noShow: null,
        timeZone: "America/New_York",
      },
    ],
    cancellationReason: "جدولة الصراع - سيتم إعادة جدولة الأسبوع المقبل.",
    cancelledBy: "user",
    createdAt: new Date("2025-09-28T15:00:00"),
    description: "شركات الملاحة المتنقلة - جولة اثنين من ردود الفعل.",
    endTime: new Date("2025-10-05T10:30:00"),
    eventType: {
      ...defaultEventType,
      id: 13,
      slug: "design-review",
      title: "مراجعة التصميم",
    },
    id: 8,
    location: "integrations:daily",
    rescheduled: false,
    startTime: new Date("2025-10-05T10:00:00"),
    status: "CANCELLED",
    title: "نقد الملاحة البحرية المتنقلة",
    uid: "abc123-booking-8",
    updatedAt: new Date("2025-10-04T08:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 9,
        email: "team@cal.com",
        id: 17,
        locale: "en",
        name: "ماركو بيليني",
        noShow: false,
        timeZone: "Europe/London",
      },
    ],
    createdAt: new Date("2025-09-01T10:00:00"),
    description: "استعراض العمليات الدائمة - الحوادث والتسليم تحت الطلب.",
    endTime: new Date("2025-10-02T09:30:00"),
    eventType: {
      ...defaultEventType,
      id: 6,
      recurringEvent: {
        count: 12,
        freq: 2,
        interval: 1,
      },
      slug: "weekly-sync",
      title: "المزامنة الأسبوعية",
    },
    id: 9,
    location: "integrations:daily",
    recurringEventId: "recurring-abc123",
    rescheduled: false,
    startTime: new Date("2025-10-02T09:00:00"),
    status: "ACCEPTED",
    title: "Ops weekly (سلسلة)",
    uid: "abc123-booking-9",
    updatedAt: new Date("2025-09-01T10:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    assignmentReason: [
      {
        bookingId: 10,
        createdAt: new Date("2025-09-20T11:00:00"),
        id: 1,
        reasonString: "جولة روبن: تعيين على أساس توافر والتوزيع المتساوي",
      },
    ],
    attendees: [
      {
        bookingId: 10,
        email: "prospect@company.com",
        id: 18,
        locale: "en",
        name: "سام ويتفيلد",
        noShow: false,
        timeZone: "America/Chicago",
      },
    ],
    createdAt: new Date("2025-09-20T11:00:00"),
    description: "واردة من مسح شارة المعرض التجاري.",
    endTime: new Date("2025-09-28T16:30:00"),
    eventType: {
      ...defaultEventType,
      eventTypeColor: {
        darkEventTypeColor: "#0dbf82",
        lightEventTypeColor: "#0dbf82",
      },
      hosts: [
        {
          user: { email: "pasquale@cal.com", id: 1 },
          userId: 1,
        },
        {
          user: { email: "keith@cal.com", id: 2 },
          userId: 2,
        },
      ],
      id: 101,
      schedulingType: "ROUND_ROBIN",
      slug: "sales-call",
      team: {
        id: 1,
        name: "كال",
        slug: "cal",
      },
      teamId: 1,
      title: "مكالمات المبيعات",
    },
    id: 10,
    location: "integrations:zoom",
    rescheduled: false,
    startTime: new Date("2025-09-28T16:00:00"),
    status: "ACCEPTED",
    title: "المصدر: Whitfield & Co.",
    uid: "abc123-booking-10",
    updatedAt: new Date("2025-09-20T11:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 11,
        email: "attendee1@example.com",
        id: 19,
        locale: "en",
        name: "كلير دوبوا",
        noShow: false,
        timeZone: "America/New_York",
      },
      {
        bookingId: 11,
        email: "attendee2@example.com",
        id: 20,
        locale: "fr",
        name: "هنري لوران",
        noShow: false,
        timeZone: "Europe/Paris",
      },
    ],
    createdAt: new Date("2025-09-10T10:00:00"),
    description: "تجول حي لآفاق الاتحاد الأوروبي.",
    endTime: new Date("2025-09-25T19:00:00"),
    eventType: {
      ...defaultEventType,
      eventTypeColor: null,
      id: 7,
      length: 60,
      seatsPerTimeSlot: 50,
      seatsShowAttendees: true,
      seatsShowAvailabilityCount: true,
      slug: "webinar",
      title: "الويبينار",
    },
    id: 11,
    isRecorded: true,
    location: "integrations:zoom",
    rescheduled: false,
    seatsReferences: [
      { attendee: { email: "attendee1@example.com" }, referenceUid: "seat-1" },
      { attendee: { email: "attendee2@example.com" }, referenceUid: "seat-2" },
    ],
    startTime: new Date("2025-09-25T18:00:00"),
    status: "ACCEPTED",
    title: "الويبينار — الجدولة على نطاق واسع",
    uid: "abc123-booking-11",
    updatedAt: new Date("2025-09-10T10:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 12,
        email: "noshow@example.com",
        id: 21,
        locale: "en",
        name: "تايلر بروكس",
        noShow: true,
        timeZone: "America/Los_Angeles",
      },
    ],
    createdAt: new Date("2025-09-15T09:00:00"),
    description: null,
    endTime: new Date("2025-09-20T11:15:00"),
    eventType: {
      ...defaultEventType,
      id: 1,
      length: 15,
      slug: "15min",
      title: "15 دقيقة اجتماع",
    },
    id: 12,
    location: "integrations:daily",
    rescheduled: false,
    startTime: new Date("2025-09-20T11:00:00"),
    status: "ACCEPTED",
    title: "دعوة مقدمة — تايلر بروكس",
    uid: "abc123-booking-12",
    updatedAt: new Date("2025-09-20T11:30:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 13,
        email: "enterprise@example.com",
        id: 22,
        locale: "en",
        name: "ريناتا فوغل",
        noShow: false,
        timeZone: "America/New_York",
      },
      {
        bookingId: 13,
        email: "sales@cal.com",
        id: 23,
        locale: "en",
        name: "جونا بايك",
        noShow: false,
        timeZone: "America/Los_Angeles",
      },
    ],
    createdAt: new Date("2025-09-01T10:00:00"),
    description:
      "بدء تشغيل المؤسسة - الدخول الموحد ، مزامنة الهوية ، ورسم خرائط المقاعد.",
    endTime: new Date("2025-09-10T16:00:00"),
    eventType: {
      ...defaultEventType,
      eventTypeColor: {
        darkEventTypeColor: "#0dbf82",
        lightEventTypeColor: "#0dbf82",
      },
      id: 20,
      length: 60,
      price: 29900,
      recurringEvent: {
        count: 4,
        freq: 2,
        interval: 1,
      },
      schedulingType: "ROUND_ROBIN",
      slug: "enterprise-onboarding",
      team: {
        id: 2,
        name: "فريق المبيعات",
        slug: "sales",
      },
      teamId: 2,
      title: "تهيئة المؤسسات",
    },
    id: 13,
    location: "integrations:zoom",
    paid: true,
    payment: [
      {
        amount: 29900,
        appId: "stripe",
        currency: "usd",
        paymentOption: "ON_BOOKING",
        refunded: false,
        success: true,
      },
    ],
    recurringEventId: "recurring-stress-test",
    rescheduled: false,
    startTime: new Date("2025-09-10T15:00:00"),
    status: "PENDING",
    title: "Acme rollout - تهيئة الحساب block",
    uid: "abc123-booking-13",
    updatedAt: new Date("2025-09-05T14:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
];

export const mockUpcomingBookings: Booking[] = [
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 100,
        email: "peer@cal.com",
        id: 100,
        locale: "en",
        name: "أحمد سالم",
        noShow: null,
        timeZone: "Europe/London",
      },
      {
        bookingId: 100,
        email: "keith@cal.com",
        id: 101,
        locale: "en",
        name: "كيث ويليامز",
        noShow: null,
        timeZone: "America/Los_Angeles",
      },
    ],
    createdAt: new Date("2026-01-10T10:00:00"),
    description: "Q1 الرهانات، والتوظيف، وتواريخ المعالم.",
    endTime: new Date("2026-01-15T15:00:00"),
    eventType: {
      ...defaultEventType,
      id: 14,
      length: 60,
      schedulingType: "COLLECTIVE",
      slug: "product-planning",
      team: {
        id: 1,
        name: "كال",
        slug: "cal",
      },
      teamId: 1,
      title: "تخطيط المنتجات",
    },
    id: 100,
    location: "integrations:google_meet",
    rescheduled: false,
    startTime: new Date("2026-01-15T14:00:00"),
    status: "ACCEPTED",
    title: "جلسة عمل خارطة الطريق للربع الأول",
    uid: "upcoming-booking-1",
    updatedAt: new Date("2026-01-10T10:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 101,
        email: "candidate@example.com",
        id: 102,
        locale: "en",
        name: "رينا أوكونكو",
        noShow: null,
        timeZone: "America/New_York",
      },
    ],
    createdAt: new Date("2026-01-12T09:00:00"),
    description: "لوحة تصميم النظم - استخلاص المعلومات من المنزل في انتظار.",
    endTime: new Date("2026-01-20T11:00:00"),
    eventType: {
      ...defaultEventType,
      eventTypeColor: null,
      id: 102,
      length: 60,
      schedulingType: "COLLECTIVE",
      slug: "technical-interview",
      team: {
        id: 1,
        name: "كال",
        slug: "cal",
      },
      teamId: 1,
      title: "المقابلة الفنية",
    },
    id: 101,
    location: "integrations:zoom",
    rescheduled: false,
    startTime: new Date("2026-01-20T10:00:00"),
    status: "PENDING",
    title: "رينا أوكونكو (خلفية)",
    uid: "upcoming-booking-2",
    updatedAt: new Date("2026-01-12T09:00:00"),
    user: userPasquale,
    userPrimaryEmail: "pasquale@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 102,
        email: "pasquale@cal.com",
        id: 103,
        locale: "en",
        name: "محمد أحمد",
        noShow: null,
        timeZone: "Europe/Rome",
      },
      {
        bookingId: 102,
        email: "carina@cal.com",
        id: 104,
        locale: "en",
        name: "كارينا وولهايم",
        noShow: null,
        timeZone: "Europe/Berlin",
      },
    ],
    createdAt: new Date("2026-01-18T11:00:00"),
    description: "يوم الخميس الافراج عن القطار وطابور الإصلاح العاجل.",
    endTime: new Date("2026-01-25T16:00:00"),
    eventType: {
      ...defaultEventType,
      id: 10,
      length: 30,
      slug: "engineering-chat",
      title: "دردشة هندسية",
    },
    id: 102,
    location: "integrations:daily",
    rescheduled: false,
    startTime: new Date("2026-01-25T15:30:00"),
    status: "ACCEPTED",
    title: "إطلاق سراح مزامنة القطار",
    uid: "upcoming-booking-3",
    updatedAt: new Date("2026-01-18T11:00:00"),
    user: userKeith,
    userPrimaryEmail: "keith@cal.com",
  },
  {
    ...defaultBookingFields,
    attendees: [
      {
        bookingId: 103,
        email: "keith@cal.com",
        id: 105,
        locale: "en",
        name: "كيث ويليامز",
        noShow: null,
        timeZone: "America/Los_Angeles",
      },
      {
        bookingId: 103,
        email: "jonathan@cal.com",
        id: 106,
        locale: "en",
        name: "جوناثان جالو",
        noShow: null,
        timeZone: "Europe/London",
      },
    ],
    createdAt: new Date("2026-01-20T09:00:00"),
    description: "إعدادات IA - كثافة الملاحة والحالات الفارغة.",
    endTime: new Date("2026-01-28T12:00:00"),
    eventType: {
      ...defaultEventType,
      eventTypeColor: {
        darkEventTypeColor: "#3b82f6",
        lightEventTypeColor: "#3b82f6",
      },
      id: 15,
      length: 45,
      slug: "design-review",
      title: "مراجعة التصميم",
    },
    id: 103,
    location: "integrations:google_meet",
    rescheduled: false,
    startTime: new Date("2026-01-28T11:15:00"),
    status: "ACCEPTED",
    title: "إعدادات IA نقد",
    uid: "upcoming-booking-4",
    updatedAt: new Date("2026-01-20T09:00:00"),
    user: userPeer,
    userPrimaryEmail: "peer@cal.com",
  },
];

function getMockBooking(bookings: Booking[], index: number): Booking {
  const booking = bookings[index];

  if (!booking) {
    throw new Error(`حجز وهمي مفقود في index ${index}`);
  }

  return booking;
}

function getMockEventType(booking: Booking): BookingEventType {
  if (!booking.eventType) {
    throw new Error(`نوع الحدث المفقود لحجز وهمي ${booking.id}`);
  }

  return booking.eventType;
}

const baseUpcomingPlanning = getMockBooking(mockUpcomingBookings, 0);
const baseUpcomingPending = getMockBooking(mockUpcomingBookings, 1);
const baseUpcomingEngineering = getMockBooking(mockUpcomingBookings, 2);
const baseCancelledDesignReview = getMockBooking(mockPastBookings, 7);
const basePastRecurring = getMockBooking(mockPastBookings, 8);
const basePastStressTest = getMockBooking(mockPastBookings, 12);

const upcomingPaidConsultation: Booking = {
  ...baseUpcomingPlanning,
  attendees: [
    {
      bookingId: 104,
      email: "founder@example.com",
      id: 107,
      locale: "en",
      name: "نادية المصري",
      noShow: null,
      timeZone: "America/New_York",
    },
  ],
  description: "كتلة استراتيجية - تجارب التسعير لا تزال مفتوحة.",
  endTime: new Date("2026-02-03T17:45:00"),
  eventType: {
    ...defaultEventType,
    eventTypeColor: {
      darkEventTypeColor: "#fd6d06",
      lightEventTypeColor: "#fd6d06",
    },
    id: 16,
    length: 45,
    price: 14900,
    slug: "paid-strategy",
    title: "جلسة استراتيجية مدفوعة الأجر",
  },
  id: 104,
  location: "integrations:zoom",
  payment: [],
  startTime: new Date("2026-02-03T17:00:00"),
  title: "كتلة الاستراتيجية ث / نادية المصري",
  uid: "upcoming-booking-5",
};

function createTodayDate(hours: number, minutes: number): Date {
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

const upcomingTodayMeeting: Booking = {
  ...baseUpcomingPlanning,
  attendees: [
    {
      bookingId: 106,
      email: "carina@cal.com",
      id: 108,
      locale: "en",
      name: "كارينا وولهايم",
      noShow: null,
      timeZone: "Europe/Berlin",
    },
  ],
  createdAt: createTodayDate(9, 0),
  description: "الصباح الوقوف - حاصرات فقط.",
  endTime: createTodayDate(11, 0),
  eventType: {
    ...defaultEventType,
    eventTypeColor: {
      darkEventTypeColor: "#0dbf82",
      lightEventTypeColor: "#0dbf82",
    },
    id: 18,
    length: 60,
    slug: "team-sync",
    title: "فريق المزامنة",
  },
  id: 106,
  location: "integrations:google_meet",
  startTime: createTodayDate(10, 0),
  title: "موقف المنتج",
  uid: "upcoming-booking-today",
  updatedAt: createTodayDate(9, 0),
};

function createRelativeDate(minutesFromNow: number): Date {
  return new Date(Date.now() + minutesFromNow * 60 * 1000);
}

const upcomingMinimumNoticeBooking: Booking = {
  ...baseUpcomingPlanning,
  attendees: [
    {
      bookingId: 107,
      email: "guest@example.com",
      id: 109,
      locale: "en",
      name: "توماس ريبيرو",
      noShow: null,
      timeZone: "America/New_York",
    },
  ],
  description: "الإعدادية المستثمر - سطح السفينة v4 وتشغيل الجافة.",
  endTime: createRelativeDate(75),
  eventType: {
    ...defaultEventType,
    id: 23,
    length: 30,
    minimumRescheduleNotice: 120,
    slug: "notice-demo",
    title: "دعوة المستثمر الإعدادية",
  },
  id: 107,
  location: "integrations:zoom",
  startTime: createRelativeDate(45),
  title: "إعداد المستثمر ث / توماس ريبيرو",
  uid: "upcoming-booking-notice",
  updatedAt: new Date(),
};

const upcomingAttendeeOnlyRestrictions: Booking = {
  ...baseUpcomingEngineering,
  attendees: [
    {
      bookingId: 108,
      email: "client@example.com",
      id: 110,
      locale: "en",
      name: "جيما والش",
      noShow: null,
      timeZone: "Europe/London",
    },
  ],
  description: "خطوط MSA الحمراء - لا يمكن للحضور إلغاء بدون مضيف.",
  endTime: new Date("2026-03-12T11:30:00"),
  eventType: {
    ...defaultEventType,
    disableCancelling: true,
    disableCancellingScope: "ATTENDEE_ONLY",
    disableRescheduling: true,
    disableReschedulingScope: "ATTENDEE_ONLY",
    id: 24,
    slug: "host-only-actions",
    title: "تجول العقد",
  },
  id: 108,
  location: "integrations:google_meet",
  startTime: new Date("2026-03-12T11:00:00"),
  title: "تجول MSA - جيما والش",
  uid: "upcoming-booking-scope",
  updatedAt: new Date("2026-03-01T09:00:00"),
};

const upcomingRescheduledRecurring: Booking = {
  ...baseUpcomingEngineering,
  description: "تتحرك من قبل بوكر - صراعات مع السفر.",
  endTime: new Date("2026-02-06T10:30:00"),
  eventType: {
    ...defaultEventType,
    eventTypeColor: {
      darkEventTypeColor: "#8b5cf6",
      lightEventTypeColor: "#8b5cf6",
    },
    id: 17,
    length: 30,
    recurringEvent: {
      count: 8,
      freq: 2,
      interval: 1,
    },
    slug: "customer-check-in",
    title: "تسجيل دخول العملاء",
  },
  fromReschedule: "previous-booking-uid",
  id: 105,
  metadata: {
    recurringEventsRemaining: 6,
    recurringPattern: "كل أسبوع لمدة 8 حوادث",
  },
  recurringEventId: "recurring-upcoming-check-in",
  rescheduled: true,
  rescheduledBy: "نادية المصري",
  startTime: new Date("2026-02-06T10:00:00"),
  title: "تسجيل وصول العملاء (سلسلة)",
  uid: "upcoming-booking-6",
};

const unconfirmedTeamBooking: Booking = {
  ...baseUpcomingPending,
  attendees: [
    {
      bookingId: 106,
      email: "enterprise@example.com",
      id: 108,
      locale: "en",
      name: "هيلينا غروبر",
      noShow: null,
      timeZone: "America/Chicago",
    },
  ],
  description: "استبيان الأمان + الوصول إلى رمل.",
  endTime: new Date("2026-02-10T16:30:00"),
  eventType: {
    ...defaultEventType,
    eventTypeColor: {
      darkEventTypeColor: "#0dbf82",
      lightEventTypeColor: "#0dbf82",
    },
    hosts: [
      {
        user: { email: "pasquale@cal.com", id: 1 },
        userId: 1,
      },
      {
        user: { email: "keith@cal.com", id: 2 },
        userId: 2,
      },
    ],
    id: 18,
    schedulingType: "ROUND_ROBIN",
    slug: "enterprise-demo",
    team: {
      id: 2,
      name: "فريق المبيعات",
      slug: "sales",
    },
    teamId: 2,
    title: "عرض للمؤسسات",
  },
  id: 106,
  location: "integrations:teams",
  startTime: new Date("2026-02-10T16:00:00"),
  title: "عرض المؤسسة - في انتظار تأكيد",
  uid: "unconfirmed-booking-2",
};

const unconfirmedTeamEventType = getMockEventType(unconfirmedTeamBooking);

const unconfirmedPaidRecurring: Booking = {
  ...unconfirmedTeamBooking,
  description:
    "سلسلة من أربعة أجزاء على متن الطائرة ؛ الدفع لم يتم القبض عليه بعد.",
  endTime: new Date("2026-02-12T15:00:00"),
  eventType: {
    ...unconfirmedTeamEventType,
    price: 29900,
    recurringEvent: {
      count: 4,
      freq: 2,
      interval: 1,
    },
    slug: "paid-onboarding-series",
    title: "دفع سلسلة تهيئة الحساب",
  },
  id: 107,
  metadata: {
    recurringEventsRemaining: 4,
    recurringPattern: "كل أسبوع لمدة 4 حوادث",
  },
  payment: [],
  recurringEventId: "recurring-unconfirmed-onboarding",
  startTime: new Date("2026-02-12T14:00:00"),
  title: "سلسلة تهيئة الحساب - في انتظار الدفع",
  uid: "unconfirmed-booking-3",
};

const cancelledTeamBooking: Booking = {
  ...baseCancelledDesignReview,
  cancellationReason: "طلب العميل نقل مراجعة المشروع.",
  description: "تصميم نقد لشل التحليلات.",
  endTime: new Date("2025-10-15T13:00:00"),
  eventType: {
    ...defaultEventType,
    eventTypeColor: {
      darkEventTypeColor: "#3b82f6",
      lightEventTypeColor: "#3b82f6",
    },
    id: 19,
    schedulingType: "COLLECTIVE",
    slug: "team-design-review",
    team: {
      id: 1,
      name: "كال",
      slug: "cal",
    },
    teamId: 1,
    title: "مراجعة تصميم الفريق",
  },
  id: 14,
  rescheduled: true,
  startTime: new Date("2025-10-15T12:30:00"),
  title: "تحليلات شل",
  uid: "cancelled-booking-2",
};

const cancelledPaidRecurring: Booking = {
  ...baseCancelledDesignReview,
  cancellationReason: "لم يتم الانتهاء من الدفع قبل الموعد النهائي.",
  description: "المستأجر الاستشاري - بطاقة لم يتم تأكيدها.",
  endTime: new Date("2025-10-18T11:45:00"),
  eventType: {
    ...defaultEventType,
    eventTypeColor: {
      darkEventTypeColor: "#fd6d06",
      lightEventTypeColor: "#fd6d06",
    },
    id: 21,
    length: 45,
    price: 19900,
    recurringEvent: {
      count: 6,
      freq: 2,
      interval: 2,
    },
    slug: "paid-advisory",
    title: "الاستشارة المدفوعة",
  },
  id: 15,
  metadata: {
    recurringEventsRemaining: 3,
    recurringPattern: "كل أسبوعين لمدة 6 حوادث",
  },
  payment: [],
  recurringEventId: "recurring-cancelled-paid",
  startTime: new Date("2025-10-18T11:00:00"),
  title: "تعيين استشاري (سلسلة)",
  uid: "cancelled-booking-3",
};

const recurringYogaClass: Booking = {
  ...defaultBookingFields,
  attendees: [
    {
      bookingId: 200,
      email: "pro@example.com",
      id: 200,
      locale: "en",
      name: "جوردان هيل",
      noShow: null,
      timeZone: "Europe/Rome",
    },
  ],
  createdAt: new Date("2026-05-01T09:00:00"),
  description: null,
  endTime: new Date("2026-05-22T17:31:00"),
  eventType: {
    ...defaultEventType,
    eventTypeColor: {
      darkEventTypeColor: "#8b5cf6",
      lightEventTypeColor: "#8b5cf6",
    },
    id: 200,
    length: 30,
    recurringEvent: {
      count: 6,
      freq: 2,
      interval: 1,
    },
    slug: "yoga-class",
    title: "فئة اليوغا",
  },
  id: 200,
  location: "integrations:daily",
  metadata: {
    recurringEventsRemaining: 4,
    recurringPattern: "كل أسبوع لمدة 6 حوادث",
  },
  recurringEventId: "recurring-yoga-class",
  rescheduled: false,
  startTime: new Date("2026-05-22T17:01:00"),
  status: "ACCEPTED",
  title: "فئة اليوغا",
  uid: "recurring-booking-1",
  updatedAt: new Date("2026-05-01T09:00:00"),
  user: userPasquale,
  userPrimaryEmail: "pasquale@cal.com",
};

const recurringYogaEventType = getMockEventType(recurringYogaClass);

const recurringUnconfirmedTennisClass: Booking = {
  ...recurringYogaClass,
  attendees: [
    {
      bookingId: 201,
      email: "pro@example.com",
      id: 201,
      locale: "en",
      name: "جوردان هيل",
      noShow: null,
      timeZone: "Europe/Rome",
    },
  ],
  endTime: new Date("2026-05-23T18:01:00"),
  eventType: {
    ...recurringYogaEventType,
    eventTypeColor: {
      darkEventTypeColor: "#0dbf82",
      lightEventTypeColor: "#0dbf82",
    },
    id: 201,
    recurringEvent: {
      count: 5,
      freq: 2,
      interval: 2,
    },
    slug: "tennis-class",
    title: "فئة التنس",
  },
  id: 201,
  metadata: {
    recurringEventsRemaining: 5,
    recurringPattern: "كل أسبوعين لمدة 5 حوادث",
  },
  recurringEventId: "recurring-tennis-class",
  startTime: new Date("2026-05-23T17:01:00"),
  status: "PENDING",
  title: "فئة التنس",
  uid: "recurring-booking-2",
};

const recurringSeededYogaClass: Booking = {
  ...recurringYogaClass,
  attendees: [
    {
      bookingId: 202,
      email: "pro@example.com",
      id: 202,
      locale: "en",
      name: "جوردان هيل",
      noShow: null,
      timeZone: "Europe/Rome",
    },
  ],
  description: "صف لاعبا اساسيا للبيانات الوصفية تكرار البذور.",
  endTime: new Date("2026-05-24T17:31:00"),
  eventType: {
    ...recurringYogaEventType,
    id: 202,
    slug: "seeded-yoga-class",
    title: "شروق الشمس",
  },
  id: 202,
  metadata: {
    recurringEventsRemaining: 1,
    recurringPattern: "كل أسبوع لمدة 3 حوادث",
  },
  recurringEventId: "recurring-seeded-yoga-class",
  startTime: new Date("2026-05-24T17:01:00"),
  title: "تدفق الشروق (بذرة)",
  uid: "recurring-booking-3",
};

const recurringPaidTeamWorkshop: Booking = {
  ...recurringYogaClass,
  attendees: [
    {
      bookingId: 203,
      email: "ops@example.com",
      id: 203,
      locale: "en",
      name: "إينيس مورو",
      noShow: null,
      timeZone: "America/New_York",
    },
    {
      bookingId: 203,
      email: "product@example.com",
      id: 204,
      locale: "en",
      name: "فيليكس هارت",
      noShow: null,
      timeZone: "Europe/London",
    },
  ],
  description: "ورشة عمل متكررة - الفاتورة لا تزال معلقة.",
  endTime: new Date("2026-05-26T16:00:00"),
  eventType: {
    ...defaultEventType,
    eventTypeColor: {
      darkEventTypeColor: "#fd6d06",
      lightEventTypeColor: "#fd6d06",
    },
    id: 203,
    length: 60,
    price: 49900,
    recurringEvent: {
      count: 10,
      freq: 2,
      interval: 1,
    },
    schedulingType: "COLLECTIVE",
    slug: "paid-team-workshop",
    team: {
      id: 1,
      name: "كال",
      slug: "cal",
    },
    teamId: 1,
    title: "ورشة عمل التيسير",
  },
  id: 203,
  metadata: {
    recurringEventsRemaining: 8,
    recurringPattern: "كل أسبوع لمدة 10 حوادث",
  },
  payment: [],
  recurringEventId: "recurring-paid-team-workshop",
  startTime: new Date("2026-05-26T15:00:00"),
  title: "حلقة عمل تيسيرية (سلسلة)",
  uid: "recurring-booking-4",
};

const recurringRescheduledClass: Booking = {
  ...recurringYogaClass,
  description: "انتقل الحضور فتحة مايو لتجنب التداخل.",
  endTime: new Date("2026-05-27T09:45:00"),
  eventType: {
    ...recurringYogaEventType,
    eventTypeColor: {
      darkEventTypeColor: "#3b82f6",
      lightEventTypeColor: "#3b82f6",
    },
    id: 204,
    slug: "pilates-class",
    title: "فئة بيلاتيس",
  },
  fromReschedule: "previous-pilates-booking",
  id: 204,
  metadata: {
    recurringEventsRemaining: 2,
    recurringPattern: "كل شهر لمدة 4 حوادث",
  },
  recurringEventId: "recurring-pilates-class",
  rescheduled: true,
  rescheduledBy: "جوردان هيل",
  startTime: new Date("2026-05-27T09:15:00"),
  title: "فئة بيلاتيس",
  uid: "recurring-booking-5",
};

const pastReportedBooking: Booking = {
  ...defaultBookingFields,
  attendees: [
    {
      bookingId: 16,
      email: "unknown@example.com",
      id: 18,
      locale: "en",
      name: "محمد حسن",
      noShow: false,
      timeZone: "America/New_York",
    },
  ],
  createdAt: new Date("2025-10-18T08:00:00"),
  description: "Walk-in عبر رابط عام - تم وضع علامة عليه بعد المكالمة.",
  endTime: new Date("2025-10-20T11:00:00"),
  eventType: {
    ...defaultEventType,
    id: 22,
    slug: "30min",
    title: "30 دقيقة اجتماع",
  },
  id: 16,
  location: "integrations:zoom",
  report: {
    createdAt: new Date("2025-10-20T11:05:00"),
    description: "استخدم الحاضرون غير المعترف بهم رابط حجز عام.",
    id: 1,
    reason: "البريد المزعج أو الحجز غير المرغوب فيه",
    reportedById: userPasquale.id,
  },
  startTime: new Date("2025-10-20T10:30:00"),
  status: "ACCEPTED",
  title: "مكالمة واردة — محمد حسن",
  uid: "past-booking-reported",
  updatedAt: new Date("2025-10-20T11:05:00"),
  user: userPasquale,
  userPrimaryEmail: "pasquale@cal.com",
};

export const mockPastBookingsForTab: Booking[] = [
  pastReportedBooking,
  ...mockPastBookings.filter(
    (booking) => booking.status !== "CANCELLED" && booking.status !== "PENDING",
  ),
];

export const mockUpcomingBookingsForTab: Booking[] = [
  upcomingTodayMeeting,
  upcomingMinimumNoticeBooking,
  upcomingAttendeeOnlyRestrictions,
  ...mockUpcomingBookings,
  upcomingPaidConsultation,
  upcomingRescheduledRecurring,
];

export const mockUnconfirmedBookings: Booking[] = [
  baseUpcomingPending,
  unconfirmedTeamBooking,
  unconfirmedPaidRecurring,
];

export const mockRecurringBookings: Booking[] = [
  recurringYogaClass,
  recurringUnconfirmedTennisClass,
  recurringSeededYogaClass,
  recurringPaidTeamWorkshop,
  recurringRescheduledClass,
  upcomingRescheduledRecurring,
  unconfirmedPaidRecurring,
  basePastRecurring,
  basePastStressTest,
];

export const mockCancelledBookings: Booking[] = [
  ...mockPastBookings.filter((booking) => booking.status === "CANCELLED"),
  cancelledTeamBooking,
  cancelledPaidRecurring,
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function isBookingToday(
  date: Date,
  referenceDate: Date = new Date(),
): boolean {
  return (
    date.getFullYear() === referenceDate.getFullYear() &&
    date.getMonth() === referenceDate.getMonth() &&
    date.getDate() === referenceDate.getDate()
  );
}

export function formatBookingDate(startTime: Date, endTime?: Date): string {
  const isUpcoming = (endTime ?? startTime) >= new Date();
  const bookingYear = startTime.getFullYear();
  const currentYear = new Date().getFullYear();
  const isDifferentYear = bookingYear !== currentYear;
  const weekday = startTime.toLocaleDateString("ar", { weekday: "short" });
  const day = startTime.getDate();
  const monthShort = startTime.toLocaleDateString("ar", { month: "short" });
  const monthLong = startTime.toLocaleDateString("ar", { month: "long" });

  if (isUpcoming) {
    if (isDifferentYear) {
      return `${weekday}, ${day} ${monthShort} ${bookingYear}`;
    }

    return `${weekday}, ${day} ${monthShort}`;
  }

  return `${day} ${monthLong} ${bookingYear}`;
}

export function formatBookingTime(startTime: Date, endTime: Date): string {
  const formatTime = (d: Date) =>
    d.toLocaleTimeString("ar", {
      hour: "numeric",
      hour12: true,
      minute: "2-digit",
    });
  return `${formatTime(startTime)} - ${formatTime(endTime)}`;
}

export function getBookingParticipants(booking: Booking): string {
  const names = booking.attendees.map((a) => a.name);
  if (names.length === 0) return "";
  const firstName = names[0] ?? "";
  if (names.length === 1) return firstName;
  const secondName = names[1] ?? "";
  if (names.length === 2) return `${firstName} و ${secondName}`;
  const lastName = names[names.length - 1] ?? "";
  return `${names.slice(0, -1).join(", ")} و ${lastName}`;
}

export function getLocationLabel(location: string | null): string {
  if (!location) return "";
  const locationMap: Record<string, string> = {
    "integrations:daily": "انضم إلى كال Video",
    "integrations:google_meet": "الانضمام إلى غوغل Meet",
    "integrations:teams": "انضم إلى فرق مايكروسوفت",
    "integrations:zoom": "انضم إلى زوم",
  };
  return locationMap[location] || location;
}

export function getLocationIcon(
  location: string | null,
): "video" | "phone" | "location" | null {
  if (!location) return null;
  if (location.startsWith("integrations:")) return "video";
  if (location.includes("phone")) return "phone";
  return "location";
}

// =============================================================================
// FILTER FUNCTIONS
// =============================================================================

export interface BookingFilter {
  categoryId: string;
  selectedOptionIds: string[];
}

export function filterBookings(
  bookings: Booking[],
  filters: BookingFilter[],
): Booking[] {
  if (filters.length === 0) return bookings;

  return bookings.filter((booking) => {
    return filters.every((filter) => {
      const { categoryId, selectedOptionIds } = filter;
      if (selectedOptionIds.length === 0) return true;

      switch (categoryId) {
        case "event-type": {
          const eventTypeTitle = booking.eventType?.title?.toLowerCase() ?? "";
          const eventTypeSlug = booking.eventType?.slug?.toLowerCase() ?? "";
          return selectedOptionIds.some((optionId) => {
            const optionLabel = getEventTypeLabel(optionId).toLowerCase();
            return (
              eventTypeTitle.includes(optionLabel) ||
              eventTypeSlug.includes(optionId.replace(/-/g, ""))
            );
          });
        }
        case "member": {
          const hostName = booking.user?.name?.toLowerCase() ?? "";
          const hostEmail = booking.user?.email?.toLowerCase() ?? "";
          return selectedOptionIds.some((optionId) => {
            const memberName = optionId.replace(/-/g, " ").toLowerCase();
            return (
              hostName.includes(memberName) ||
              hostEmail.includes(optionId.replace(/-/g, ""))
            );
          });
        }
        case "attendees-name": {
          return selectedOptionIds.some((optionId) => {
            const searchName = optionId.replace(/-/g, " ").toLowerCase();
            return booking.attendees.some((attendee) =>
              attendee.name.toLowerCase().includes(searchName),
            );
          });
        }
        case "attendee-email": {
          return selectedOptionIds.some((optionId) => {
            return booking.attendees.some((attendee) =>
              attendee.email
                .toLowerCase()
                .includes(optionId.split("-")[0] ?? ""),
            );
          });
        }
        case "date-range": {
          const now = new Date();
          const bookingDate = new Date(booking.startTime);
          return selectedOptionIds.some((optionId) => {
            switch (optionId) {
              case "today":
                return isSameDay(bookingDate, now);
              case "yesterday":
                return isSameDay(bookingDate, addDays(now, -1));
              case "this-week":
                return isWithinWeek(bookingDate, now);
              case "last-week":
                return isWithinLastWeek(bookingDate, now);
              case "this-month":
                return isSameMonth(bookingDate, now);
              case "last-month":
                return isLastMonth(bookingDate, now);
              default:
                return true;
            }
          });
        }
        case "booking-uid": {
          return selectedOptionIds.some((optionId) =>
            booking.uid.toLowerCase().includes(optionId.toLowerCase()),
          );
        }
        default:
          return true;
      }
    });
  });
}

function getEventTypeLabel(optionId: string): string {
  const labels: Record<string, string> = {
    "15-min": "15 دقيقة اجتماع",
    "30-min": "30 دقيقة اجتماع",
    "60-min": "60 دقيقة اجتماع",
    consultation: "التشاور",
    interview: "مقابلة",
    onboarding: "الاتصال على متن الطائرة",
  };
  return labels[optionId] ?? optionId;
}

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function isWithinWeek(date: Date, referenceDate: Date): boolean {
  const startOfWeek = new Date(referenceDate);
  startOfWeek.setDate(referenceDate.getDate() - referenceDate.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);
  return date >= startOfWeek && date < endOfWeek;
}

function isWithinLastWeek(date: Date, referenceDate: Date): boolean {
  const startOfLastWeek = new Date(referenceDate);
  startOfLastWeek.setDate(referenceDate.getDate() - referenceDate.getDay() - 7);
  startOfLastWeek.setHours(0, 0, 0, 0);
  const endOfLastWeek = new Date(startOfLastWeek);
  endOfLastWeek.setDate(startOfLastWeek.getDate() + 7);
  return date >= startOfLastWeek && date < endOfLastWeek;
}

function isSameMonth(date: Date, referenceDate: Date): boolean {
  return (
    date.getFullYear() === referenceDate.getFullYear() &&
    date.getMonth() === referenceDate.getMonth()
  );
}

function isLastMonth(date: Date, referenceDate: Date): boolean {
  const lastMonth = new Date(referenceDate);
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  return (
    date.getFullYear() === lastMonth.getFullYear() &&
    date.getMonth() === lastMonth.getMonth()
  );
}

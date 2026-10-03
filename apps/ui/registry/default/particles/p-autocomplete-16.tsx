"use client";

import { MapPinIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompleteStatus,
} from "@/registry/default/ui/autocomplete";
import { Spinner } from "@/registry/default/ui/spinner";

// Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY with the Places API (New) enabled to fetch
// live suggestions. Without a key, the demo falls back to sample addresses.
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

type AddressSuggestion = {
  placeId: string;
  text: string;
  mainText: string;
  secondaryText: string;
};

const sampleAddresses: AddressSuggestion[] = [
  {
    mainText: "1600 المدرج باركواي",
    secondaryText: "Mountain View, CA 94043, الولايات المتحدة الأمريكية",
  },
  {
    mainText: "1600 Pennsylvania Avenue NW",
    secondaryText: "واشنطن, DC 20500, الولايات المتحدة الأمريكية",
  },
  {
    mainText: "350 Fifth Avenue",
    secondaryText: "نيويورك, NY 10118, الولايات المتحدة الأمريكية",
  },
  {
    mainText: "221B شارع بيكر",
    secondaryText: "لندن NW1 6XE, المملكة المتحدة",
  },
  {
    mainText: "Champ de Mars, 5 Avenue Anatole فرنسا",
    secondaryText: "75007 Paris, France",
  },
  {
    mainText: "ساحة ديل كولوسيو، 1",
    secondaryText: "00184 Roma RM, إيطاليا",
  },
  { mainText: "بلاتز دير Republik 1", secondaryText: "11011 Berlin, Germany" },
  {
    mainText: "1 شارع ماكواري",
    secondaryText: "سيدني NSW 2000, أستراليا",
  },
].map((address, index) => ({
  ...address,
  placeId: `sample-${index + 1}`,
  text: `${address.mainText}, ${address.secondaryText}`,
}));

// A short-lived session token groups Autocomplete + Place Details requests
// for billing.
function newSessionToken() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2);
}

type PlacesAutocompleteResponse = {
  suggestions?: {
    placePrediction?: {
      placeId?: string;
      text?: { text?: string };
      structuredFormat?: {
        mainText?: { text?: string };
        secondaryText?: { text?: string };
      };
    };
  }[];
};

async function fetchAddressSuggestions(
  query: string,
  sessionToken: string,
  signal: AbortSignal,
): Promise<AddressSuggestion[]> {
  const response = await fetch(
    "https://places.googleapis.com/v1/places:autocomplete",
    {
      body: JSON.stringify({ input: query, sessionToken }),
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
      },
      method: "POST",
      signal,
    },
  );
  if (!response.ok) {
    throw new Error("فشل طلب واجهة برمجية");
  }
  const data = (await response.json()) as PlacesAutocompleteResponse;
  const suggestions: AddressSuggestion[] = [];
  for (const suggestion of data.suggestions ?? []) {
    const prediction = suggestion.placePrediction;
    if (!prediction?.placeId) continue;
    const text = prediction.text?.text ?? "";
    suggestions.push({
      mainText: prediction.structuredFormat?.mainText?.text ?? text,
      placeId: prediction.placeId,
      secondaryText: prediction.structuredFormat?.secondaryText?.text ?? "",
      text,
    });
  }
  return suggestions;
}

async function searchSampleAddresses(
  query: string,
): Promise<AddressSuggestion[]> {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 500 + 100),
  );
  const lowerQuery = query.toLowerCase();
  return sampleAddresses.filter((address) =>
    address.text.toLowerCase().includes(lowerQuery),
  );
}

export default function Particle() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [error, setError] = useState<string | null>(null);
  const sessionTokenRef = useRef<string | null>(null);

  useEffect(() => {
    const query = searchValue.trim();
    if (!query) {
      setSuggestions([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    let ignore = false;
    const controller = new AbortController();

    const timeoutId = setTimeout(async () => {
      try {
        sessionTokenRef.current ??= newSessionToken();
        const results = GOOGLE_MAPS_API_KEY
          ? await fetchAddressSuggestions(
              query,
              sessionTokenRef.current,
              controller.signal,
            )
          : await searchSampleAddresses(query);
        if (!ignore) setSuggestions(results);
      } catch {
        if (!ignore && !controller.signal.aborted) {
          setError("لا يمكن تحميل اقتراحات العنوان. يرجى المحاولة مرة أخرى.");
          setSuggestions([]);
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }, 300);

    return () => {
      ignore = true;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [searchValue]);

  let status: ReactNode = `${suggestions.length} suggestion${suggestions.length === 1 ? "" : "s"} found`;
  if (isLoading) {
    status = (
      <span className="flex items-center justify-between gap-2 text-muted-foreground">
        البحث عن العناوين...
        <Spinner className="size-4.5 sm:size-4" />
      </span>
    );
  } else if (error) {
    status = (
      <span className="font-normal text-destructive text-sm">{error}</span>
    );
  } else if (suggestions.length === 0 && searchValue) {
    status = (
      <span className="font-normal text-muted-foreground text-sm">
        لم يتم العثور على عناوين "{searchValue}"
      </span>
    );
  }

  const shouldRenderPopup = searchValue.trim() !== "";

  return (
    <Autocomplete
      autoHighlight
      filter={null}
      items={suggestions}
      itemToStringValue={(item: unknown) => (item as AddressSuggestion).text}
      onValueChange={(value, eventDetails) => {
        setSearchValue(value);
        if (eventDetails.reason === "item-press") {
          // Selecting a suggestion ends the billing session. In a real app,
          // fetch the place details with the same token before resetting it.
          sessionTokenRef.current = null;
        }
      }}
      value={searchValue}
    >
      <AutocompleteInput
        aria-label="عنوان العنوان"
        autoComplete="off"
        className="min-w-0 *:[input]:truncate"
        placeholder="أدخل عنوان"
        startAddon={<MapPinIcon />}
      />
      {shouldRenderPopup && (
        <AutocompletePopup
          aria-busy={isLoading || undefined}
          className="max-w-(--anchor-width) *:min-w-0"
        >
          <AutocompleteStatus className="text-muted-foreground">
            {status}
          </AutocompleteStatus>
          <AutocompleteList>
            {(suggestion: AddressSuggestion) => (
              <AutocompleteItem key={suggestion.placeId} value={suggestion}>
                <span className="flex w-full min-w-0 flex-col">
                  <span className="truncate font-medium">
                    {suggestion.mainText}
                  </span>
                  <span className="truncate text-muted-foreground text-xs">
                    {suggestion.secondaryText}
                  </span>
                </span>
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      )}
    </Autocomplete>
  );
}
